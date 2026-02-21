"use client";

import { Environment } from "@react-three/drei";

export default function VaultEnvironment() {
  return (
    <>
      {/* Very dim ambient — let the spots do the work */}
      <ambientLight intensity={0.04} color="#1a1a2e" />

      {/* Primary amber spotlights — dramatic downward cones like the mockup */}
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

      {/* Backlight from vault door area — silhouette effect */}
      <pointLight position={[0, 2, -9]} intensity={1.5} color="#F5C542" distance={12} decay={2} />

      {/* Subtle fill from behind camera */}
      <pointLight position={[0, 2, 5]} intensity={0.2} color="#D4A843" />

      {/* Environment map for metallic reflections */}
      <Environment preset="night" />

      {/* Fog for depth — closer start for more atmosphere */}
      <fog attach="fog" args={["#0a0a0f", 3, 16]} />
    </>
  );
}
