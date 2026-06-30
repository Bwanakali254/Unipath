"use client";

import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function Duck() {
  const { scene } = useGLTF("/models/Duck.glb");

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  return (
    <primitive
      object={scene}
      scale={1}
      position={[0, -0.5, 0]}
    />
  );
}

useGLTF.preload("/models/Duck.glb");
