"use client";

import { Canvas } from "@react-three/fiber";
import { Scene } from "@/components/index";
import { GitHubButton } from "@/components/GitHubButton";

export default function Component() {
  return (
    <div className="w-full h-screen bg-gray-900 flex flex-col items-center justify-center">
      <GitHubButton />
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
        <Scene />
      </Canvas>
    </div>
  );
}
