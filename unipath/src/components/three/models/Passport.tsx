"use client";

export function Passport() {
  return (
    <group position={[0, -1.02, 0]}>
      {/* Cover */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.2, 0.05, 1.6]} />
        <meshStandardMaterial
          color="#0b3d91"
          roughness={0.7}
          metalness={0.15}
        />
      </mesh>

      {/* Gold emblem */}
      <mesh position={[0, 0.028, 0]}>
        <circleGeometry args={[0.18, 32]} />
        <meshStandardMaterial
          color="#d4af37"
          metalness={1}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}