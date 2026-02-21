"use client";

import { Environment } from "@react-three/drei";

export default function VaultEnvironment() {
  return (
    <>
      {/* Ambient — warm base so nothing is pure black */}
      <ambientLight intensity={0.1} color="#D4A843" />

      {/* Front fill — illuminates pillar faces and shapes facing the camera */}
      <directionalLight
        position={[0, 3, 6]}
        intensity={0.7}
        color="#F5E6C8"
      />

      {/* Primary amber spotlights — dramatic downward cones */}
      <spotLight
        position={[-3, 6, 0]}
        angle={0.6}
        penumbra={0.7}
        intensity={4}
        color="#D4A843"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <spotLight
        position={[3, 6, 0]}
        angle={0.6}
        penumbra={0.7}
        intensity={4}
        color="#D4A843"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Mid-corridor spot for the floating shapes */}
      <spotLight
        position={[0, 5, -3]}
        angle={0.8}
        penumbra={0.5}
        intensity={3}
        color="#F5C542"
        castShadow
      />

      {/* Backlight from vault door area */}
      <pointLight position={[0, 2, -9]} intensity={2} color="#F5C542" distance={14} decay={2} />

      {/* Fill from behind camera */}
      <pointLight position={[0, 2, 5]} intensity={0.6} color="#D4A843" />

      {/* Environment map — warehouse has more reflections for gold to catch */}
      <Environment preset="warehouse" />

      {/* Fog — pushed back a bit so foreground stays visible */}
      <fog attach="fog" args={["#0a0a0f", 5, 18]} />
    </>
  );
}
