"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { Scene } from "./Scene";
import { Lighting } from "./Lighting";
import { CameraRig } from "./CameraRig";

export function CanvasExperience() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{
        position: [0, 2, 8],
        fov: 45,
      }}
    >
      <Lighting />

      <CameraRig>
        <Scene />
      </CameraRig>

      <OrbitControls
        enableDamping
        dampingFactor={0.08}
      />
    </Canvas>
  );
}