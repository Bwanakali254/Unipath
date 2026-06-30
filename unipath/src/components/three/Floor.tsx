"use client";

export function Floor() {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -0.5, 0]}
      receiveShadow
    >
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial
        color="#e5e7eb"
        roughness={0.9}
        metalness={0.05}
      />
    </mesh>
  );
}
