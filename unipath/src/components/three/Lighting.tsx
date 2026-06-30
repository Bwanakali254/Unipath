export function Lighting() {
  return (
    <>
      <ambientLight intensity={0.4} />

      <hemisphereLight
        intensity={0.8}
        groundColor="#2b2b2b"
      />

      <directionalLight
        castShadow
        intensity={2.5}
        position={[5, 8, 5]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
    </>
  );
}