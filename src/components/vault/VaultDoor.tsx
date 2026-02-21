"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Ring } from "@react-three/drei";
import * as THREE from "three";

export default function VaultDoor() {
  const coinGroupRef = useRef<THREE.Group>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);
  const innerRingRef = useRef<THREE.Mesh>(null);

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
      <mesh position={[0, 0, -1]}>
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
        />
      </Ring>

      {/* The Bitcoin Coin — rotating on Y axis */}
      <group ref={coinGroupRef}>
        {/* Coin disc — cylinder rotated so flat faces point along Z */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[1.7, 1.7, 0.12, 64]} />
          <meshStandardMaterial
            color="#D4A843"
            emissive="#F5C542"
            emissiveIntensity={0.1}
            metalness={0.95}
            roughness={0.1}
          />
        </mesh>

        {/* ₿ symbol — front face */}
        <Text
          position={[0, 0, 0.065]}
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
          />
        </Text>

        {/* ₿ symbol — back face */}
        <Text
          position={[0, 0, -0.065]}
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
          />
        </mesh>
      </group>

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

      {/* Spotlight on the coin from above */}
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
