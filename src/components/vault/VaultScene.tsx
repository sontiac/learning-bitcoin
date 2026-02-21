"use client";

import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  EffectComposer,
  Bloom,
} from "@react-three/postprocessing";
import * as THREE from "three";
import VaultEnvironment from "./VaultEnvironment";
import Pillars from "./Pillars";
import FloatingShape from "./FloatingShape";
import VaultDoor from "./VaultDoor";
import GoldParticles from "./GoldParticles";
import { chapters } from "@/lib/chapters";

function CameraRig() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    // Subtle parallax: ~1-2 degrees of movement
    const targetX = mouse.current.x * 0.3;
    const targetY = 1.5 + mouse.current.y * -0.2;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.05);
    camera.lookAt(0, 0.5, -6);
  });

  return null;
}

function Scene() {
  return (
    <>
      <CameraRig />
      <VaultEnvironment />
      <Pillars />
      <VaultDoor />
      <GoldParticles />
      {chapters.map((chapter) => (
        <FloatingShape key={chapter.slug} chapter={chapter} />
      ))}
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.6}
          luminanceSmoothing={0.4}
          intensity={0.8}
        />
      </EffectComposer>
    </>
  );
}

function LoadingScreen() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0f]">
      <div className="text-center">
        <div className="text-gold-gradient font-serif text-2xl font-semibold mb-3">
          The Vault
        </div>
        <div className="text-white/40 text-sm">Opening the vault…</div>
      </div>
    </div>
  );
}

function WebGLFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0f]">
      <div className="text-center max-w-md px-6">
        <div className="text-gold-gradient font-serif text-3xl font-semibold mb-4">
          The Vault
        </div>
        <p className="text-white/60 mb-6">
          This experience requires WebGL. Please try a modern browser.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {chapters.map((ch) => (
            <a
              key={ch.slug}
              href={`/chapter/${ch.slug}`}
              className="block rounded-lg border border-[#D4A843]/30 bg-[#1a1a2e]/50 p-4 hover:border-[#D4A843]/60 transition-colors"
            >
              <div className="text-gold-gradient font-serif text-sm font-semibold">
                {ch.title}
              </div>
              <div className="text-white/40 text-xs mt-1">{ch.tagline}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function VaultScene() {
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl2") || canvas.getContext("webgl");
      if (!gl) setWebglSupported(false);
    } catch {
      setWebglSupported(false);
    }
  }, []);

  if (!webglSupported) {
    return <WebGLFallback />;
  }

  return (
    <div className="relative w-full h-screen" style={{
      background: "radial-gradient(ellipse at 50% 40%, #1a1520 0%, #0f0e14 40%, #0a0a0f 100%)",
    }}>
      <Suspense fallback={<LoadingScreen />}>
        <Canvas
          camera={{ position: [0, 1.5, 4], fov: 55, near: 0.1, far: 30 }}
          shadows
          gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, alpha: true }}
          style={{ background: "transparent" }}
        >
          <Scene />
        </Canvas>
      </Suspense>

      {/* Title overlay */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center pointer-events-none select-none">
        <h1 className="text-gold-gradient font-serif text-4xl md:text-5xl font-bold tracking-wide">
          The Vault
        </h1>
        <p className="text-white/40 text-sm mt-2 tracking-widest uppercase">
          Select a chapter to begin
        </p>
      </div>
    </div>
  );
}
