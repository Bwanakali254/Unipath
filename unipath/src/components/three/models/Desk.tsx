"use client";

export function Desk() {
  return (
    <mesh
      receiveShadow
      position={[0, -1.2, 0]}
    >
      <boxGeometry args={[10, 0.3, 8]} />

      <meshStandardMaterial
        color="#6F4E37"
        roughness={0.8}
        metalness={0.1}
      />
    </mesh>
  );
}