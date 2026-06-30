"use client";

export function CoffeeCup() {
  return (
    <group position={[-3, -0.85, 1.5]}>
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.25, 0.25, 0.45, 32]} />

        <meshStandardMaterial
          color="#f5f5f5"
          roughness={0.6}
        />
      </mesh>

      <mesh position={[0, 0.12, 0]}>
        <cylinderGeometry args={[0.18, 0.18, 0.02, 32]} />

        <meshStandardMaterial color="#4b2e1f" />
      </mesh>
    </group>
  );
}