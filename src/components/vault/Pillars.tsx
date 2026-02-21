"use client";

import { useTexture } from "@react-three/drei";
import * as THREE from "three";

function Pillar({ position }: { position: [number, number, number] }) {
  const marbleTexture = useTexture("/marblesquare.png");
  marbleTexture.wrapS = marbleTexture.wrapT = THREE.RepeatWrapping;
  marbleTexture.repeat.set(0.8, 1);

  return (
    <group position={position}>
      {/* Main pillar body */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.2, 7, 1.2]} />
        <meshStandardMaterial
          map={marbleTexture}
          roughness={0.25}
          metalness={0.7}
        />
      </mesh>
      {/* Top cap */}
      <mesh position={[0, 3.6, 0]}>
        <boxGeometry args={[1.4, 0.2, 1.4]} />
        <meshStandardMaterial
          map={marbleTexture}
          roughness={0.3}
          metalness={0.6}
        />
      </mesh>
      {/* Base */}
      <mesh position={[0, -3.6, 0]}>
        <boxGeometry args={[1.4, 0.2, 1.4]} />
        <meshStandardMaterial
          map={marbleTexture}
          roughness={0.3}
          metalness={0.6}
        />
      </mesh>
    </group>
  );
}

function CircuitLine({ points }: { points: [number, number, number][] }) {
  const linePoints = points.map((p) => new THREE.Vector3(...p));
  const curve = new THREE.CatmullRomCurve3(linePoints, false, "catmullrom", 0);
  const tubeGeometry = new THREE.TubeGeometry(curve, 20, 0.008, 4, false);

  return (
    <mesh geometry={tubeGeometry}>
      <meshStandardMaterial
        color="#D4A843"
        emissive="#F5C542"
        emissiveIntensity={0.8}
        metalness={0.9}
        roughness={0.2}
      />
    </mesh>
  );
}

function PillarCircuits({
  baseX,
  baseZ,
  side,
}: {
  baseX: number;
  baseZ: number;
  side: "left" | "right";
}) {
  const faceX = side === "left" ? baseX + 0.61 : baseX - 0.61;

  // Two different circuit patterns that alternate
  const patternA: [number, number, number][][] = [
    // Main vertical trunk
    [
      [faceX, -2.5, baseZ - 0.2],
      [faceX, 2.5, baseZ - 0.2],
    ],
    // Horizontal branches
    [
      [faceX, 0.5, baseZ - 0.5],
      [faceX, 0.5, baseZ + 0.4],
    ],
    [
      [faceX, 1.8, baseZ - 0.2],
      [faceX, 1.8, baseZ + 0.4],
      [faceX, 2.3, baseZ + 0.4],
    ],
    // Right-angle connector
    [
      [faceX, -0.8, baseZ + 0.3],
      [faceX, 0.2, baseZ + 0.3],
      [faceX, 0.2, baseZ - 0.1],
    ],
    // Small branch
    [
      [faceX, -1.5, baseZ - 0.2],
      [faceX, -1.5, baseZ + 0.3],
    ],
    // Lower horizontal
    [
      [faceX, -2.0, baseZ - 0.4],
      [faceX, -2.0, baseZ + 0.2],
    ],
  ];

  const patternB: [number, number, number][][] = [
    // Zigzag trunk
    [
      [faceX, -2.5, baseZ + 0.1],
      [faceX, -1.0, baseZ + 0.1],
      [faceX, -1.0, baseZ - 0.3],
      [faceX, 1.0, baseZ - 0.3],
      [faceX, 1.0, baseZ + 0.1],
      [faceX, 2.5, baseZ + 0.1],
    ],
    // Cross branches
    [
      [faceX, 0.0, baseZ - 0.5],
      [faceX, 0.0, baseZ + 0.4],
    ],
    [
      [faceX, 1.5, baseZ - 0.3],
      [faceX, 1.5, baseZ + 0.4],
    ],
    // Short connector
    [
      [faceX, -1.8, baseZ + 0.1],
      [faceX, -1.8, baseZ + 0.4],
      [faceX, -1.3, baseZ + 0.4],
    ],
    // Stub
    [
      [faceX, 2.2, baseZ + 0.1],
      [faceX, 2.2, baseZ - 0.4],
    ],
  ];

  const isAlt = Math.abs(baseZ) > 3;
  const lines = isAlt ? patternB : patternA;

  // Node positions at line endpoints / junctions
  const nodes: [number, number, number][] = lines.flatMap((line) => [
    line[0],
    line[line.length - 1],
  ]);

  return (
    <>
      {lines.map((points, i) => (
        <CircuitLine key={i} points={points} />
      ))}
      {nodes.map((pos, i) => (
        <mesh key={`node-${i}`} position={pos}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial
            color="#F5C542"
            emissive="#F5C542"
            emissiveIntensity={1.2}
          />
        </mesh>
      ))}
    </>
  );
}

function Floor() {
  const marbleTexture = useTexture("/marblesquare.png");
  marbleTexture.wrapS = marbleTexture.wrapT = THREE.RepeatWrapping;
  marbleTexture.repeat.set(3, 4);

  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -3.71, -4]}
      receiveShadow
    >
      <planeGeometry args={[12, 18]} />
      <meshStandardMaterial
        map={marbleTexture}
        color="#888899"
        roughness={0.08}
        metalness={0.85}
        envMapIntensity={3}
      />
    </mesh>
  );
}

export default function Pillars() {
  const pillarPositions: {
    pos: [number, number, number];
    side: "left" | "right";
  }[] = [
    { pos: [-3.5, 0, -1], side: "left" },
    { pos: [3.5, 0, -1], side: "right" },
    { pos: [-3.5, 0, -4], side: "left" },
    { pos: [3.5, 0, -4], side: "right" },
    { pos: [-3.5, 0, -7], side: "left" },
    { pos: [3.5, 0, -7], side: "right" },
  ];

  return (
    <group>
      {pillarPositions.map(({ pos, side }, i) => (
        <group key={i}>
          <Pillar position={pos} />
          <PillarCircuits baseX={pos[0]} baseZ={pos[2]} side={side} />
        </group>
      ))}

      {/* Floor — sits below pillar bases at Y=-3.7 */}
      <Floor />

      {/* Ceiling */}
      <mesh
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 4, -4]}
      >
        <planeGeometry args={[12, 18]} />
        <meshStandardMaterial
          color="#06060a"
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>

      {/* Side walls — subtle, to close the corridor */}
      <mesh position={[-4.5, 0, -4]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[18, 8]} />
        <meshStandardMaterial color="#08080e" roughness={0.7} metalness={0.2} />
      </mesh>
      <mesh position={[4.5, 0, -4]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[18, 8]} />
        <meshStandardMaterial color="#08080e" roughness={0.7} metalness={0.2} />
      </mesh>
    </group>
  );
}
