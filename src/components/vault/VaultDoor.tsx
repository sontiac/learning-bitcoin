"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Ring, Html } from "@react-three/drei";
import * as THREE from "three";
import { useDifficulty, DIFFICULTIES } from "@/lib/difficulty";

export default function VaultDoor() {
  const coinGroupRef = useRef<THREE.Group>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);
  const innerRingRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const { difficulty, cycle, label, tagline } = useDifficulty();

  const diffIndex = DIFFICULTIES.findIndex((d) => d.key === difficulty);

  useFrame((_, delta) => {
    if (coinGroupRef.current) {
      coinGroupRef.current.rotation.y += delta * 0.3;
    }
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z += delta * 0.08;
    }
    if (innerRingRef.current) {
      innerRingRef.current.rotation.z -= delta * 0.12;
    }
  });

  return (
    <group position={[0, 0.8, -10]}>
      {/* Back wall */}
      <mesh position={[0, 0, -3]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#06060a" />
      </mesh>

      {/* Outer decorative ring */}
      <Ring ref={outerRingRef} args={[2.3, 2.5, 64]}>
        <meshStandardMaterial
          color="#D4A843"
          emissive="#F5C542"
          emissiveIntensity={0.2}
          metalness={0.95}
          roughness={0.15}
          side={THREE.DoubleSide}
        />
      </Ring>

      {/* Inner decorative ring */}
      <Ring ref={innerRingRef} args={[1.9, 2.05, 48]}>
        <meshStandardMaterial
          color="#8B7331"
          emissive="#D4A843"
          emissiveIntensity={0.15}
          metalness={0.9}
          roughness={0.2}
          side={THREE.DoubleSide}
        />
      </Ring>

      {/* The Bitcoin Coin — clickable difficulty selector */}
      <group ref={coinGroupRef}>
        <mesh
          rotation={[Math.PI / 2, 0, 0]}
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
            cycle();
          }}
        >
          <cylinderGeometry args={[1.7, 1.7, 0.12, 64]} />
          <meshStandardMaterial
            color="#D4A843"
            emissive="#F5C542"
            emissiveIntensity={hovered ? 0.3 : 0.1}
            metalness={0.95}
            roughness={0.1}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* ₿ symbol — front face */}
        <Text
          position={[0, 0, 0.07]}
          fontSize={2}
          anchorX="center"
          anchorY="middle"
        >
          ₿
          <meshStandardMaterial
            color="#F5C542"
            emissive="#F5C542"
            emissiveIntensity={0.5}
            metalness={0.9}
            roughness={0.15}
            side={THREE.DoubleSide}
          />
        </Text>

        {/* ₿ symbol — back face */}
        <Text
          position={[0, 0, -0.07]}
          fontSize={2}
          rotation={[0, Math.PI, 0]}
          anchorX="center"
          anchorY="middle"
        >
          ₿
          <meshStandardMaterial
            color="#F5C542"
            emissive="#F5C542"
            emissiveIntensity={0.5}
            metalness={0.9}
            roughness={0.15}
            side={THREE.DoubleSide}
          />
        </Text>

        {/* Coin edge ring */}
        <mesh>
          <torusGeometry args={[1.7, 0.06, 8, 64]} />
          <meshStandardMaterial
            color="#8B7331"
            emissive="#D4A843"
            emissiveIntensity={0.1}
            metalness={0.9}
            roughness={0.2}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>

      {/* Difficulty label — always visible below the coin */}
      <Html center style={{ pointerEvents: "none" }} position={[0, -2.8, 0]}>
        <div style={{ textAlign: "center", whiteSpace: "nowrap" }}>
          {/* Level dots */}
          <div style={{ display: "flex", gap: "6px", justifyContent: "center", marginBottom: "6px" }}>
            {DIFFICULTIES.map((d, i) => (
              <div
                key={d.key}
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: i <= diffIndex ? "#F5C542" : "rgba(212,168,67,0.2)",
                  transition: "background 0.3s ease",
                }}
              />
            ))}
          </div>
          <div
            style={{
              background: "linear-gradient(135deg, #F5C542, #D4A843)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "var(--font-playfair), serif",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            {label}
          </div>
          <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", marginTop: "2px" }}>
            {tagline}
          </div>
          <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.25)", marginTop: "6px" }}>
            Click the coin to change
          </div>
        </div>
      </Html>

      {/* Decorative spokes around the frame rings */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const r = 2.15;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * r, Math.sin(angle) * r, 0]}
            rotation={[0, 0, angle]}
          >
            <boxGeometry args={[0.15, 0.015, 0.015]} />
            <meshStandardMaterial
              color="#D4A843"
              emissive="#F5C542"
              emissiveIntensity={0.3}
              metalness={0.9}
              roughness={0.2}
            />
          </mesh>
        );
      })}

      {/* Spotlight on the coin */}
      <spotLight
        position={[0, 4, 2]}
        angle={0.4}
        penumbra={0.6}
        intensity={4}
        color="#F5C542"
      />
    </group>
  );
}
