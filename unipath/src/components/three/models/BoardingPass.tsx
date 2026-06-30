"use client";

export function BoardingPass() {
  return (
    <mesh
      castShadow
      receiveShadow
      position={[1.5, -0.99, 1.1]}
      rotation={[-Math.PI / 2, 0, 0.2]}
    >
      <boxGeometry args={[1.8, 0.01, 0.6]} />

      <meshStandardMaterial
        color="#ffffff"
        roughness={0.9}
      />
    </mesh>
  );
}