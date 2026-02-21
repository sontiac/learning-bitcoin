"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Float, Html, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { Chapter } from "@/lib/chapters";
import { goldMaterial } from "@/lib/theme";

function ShapeGeometry({ shape }: { shape: Chapter["shape"] }) {
  switch (shape) {
    case "icosahedron":
      return <icosahedronGeometry args={[0.5, 0]} />;
    case "torus":
      return <torusGeometry args={[0.4, 0.15, 16, 32]} />;
    case "octahedron":
      return <octahedronGeometry args={[0.5, 0]} />;
    case "dodecahedron":
      return <dodecahedronGeometry args={[0.45, 0]} />;
  }
}

export default function FloatingShape({ chapter }: { chapter: Chapter }) {
  const router = useRouter();
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const targetScale = useRef(1);

  const goldTexture = useTexture("/gold-texture.png");
  goldTexture.wrapS = goldTexture.wrapT = THREE.RepeatWrapping;
  goldTexture.repeat.set(2, 2);

  useFrame(() => {
    if (!meshRef.current) return;
    targetScale.current = hovered ? 1.2 : 1;
    const s = meshRef.current.scale.x;
    const next = THREE.MathUtils.lerp(s, targetScale.current, 0.1);
    meshRef.current.scale.setScalar(next);
    meshRef.current.rotation.y += 0.005;
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.3}
      floatIntensity={0.5}
      position={chapter.position}
    >
      <mesh
        ref={meshRef}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "auto";
        }}
        onClick={(e) => {
          e.stopPropagation();
          router.push(`/chapter/${chapter.slug}`);
        }}
        castShadow
      >
        <ShapeGeometry shape={chapter.shape} />
        <meshStandardMaterial
          map={goldTexture}
          bumpMap={goldTexture}
          bumpScale={0.04}
          emissive="#F5C542"
          emissiveIntensity={hovered ? 0.4 : 0.1}
          metalness={0.95}
          roughness={0.15}
        />
      </mesh>

      {/* Label on hover */}
      {hovered && (
        <Html
          center
          style={{ pointerEvents: "none" }}
          position={[0, 1.1, 0]}
        >
          <div
            style={{
              background: "rgba(10, 10, 15, 0.92)",
              border: "1px solid rgba(212, 168, 67, 0.5)",
              borderRadius: "10px",
              padding: "14px 22px",
              backdropFilter: "blur(12px)",
              whiteSpace: "nowrap",
              textAlign: "center",
              boxShadow: "0 4px 24px rgba(0,0,0,0.5), 0 0 12px rgba(212,168,67,0.15)",
            }}
          >
            <div
              style={{
                background: "linear-gradient(135deg, #F5C542, #D4A843)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "var(--font-playfair), serif",
                fontSize: "20px",
                fontWeight: 600,
                marginBottom: "4px",
              }}
            >
              {chapter.title}
            </div>
            <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)" }}>
              {chapter.tagline}
            </div>
          </div>
        </Html>
      )}
    </Float>
  );
}
