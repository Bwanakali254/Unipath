"use client";

export function Pen() {
  return (
    <mesh
      castShadow
      position={[2.5, -0.92, -0.6]}
      rotation={[0.2, 0.4, 1.2]}
    >
      <cylinderGeometry args={[0.025, 0.025, 1.2, 16]} />

      <meshStandardMaterial
        color="#111827"
        metalness={0.8}
        roughness={0.3}
      />
    </mesh>
  );
}