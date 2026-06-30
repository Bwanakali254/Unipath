"use client";

export function AcceptanceLetter() {
  return (
    <mesh
      castShadow
      receiveShadow
      position={[-1.6, -0.99, -1]}
      rotation={[-Math.PI / 2, 0, -0.15]}
    >
      <boxGeometry args={[1.4, 0.01, 1]} />

      <meshStandardMaterial
        color="#fafafa"
        roughness={0.95}
      />
    </mesh>
  );
}