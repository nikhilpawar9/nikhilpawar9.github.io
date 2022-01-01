import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Hello from "../Hello";
const Hero = () => {
    return (
      <div className="canvas">
        <Canvas colorManagement camera={{ position: [-5, 0, 10], fov: 60 }}>
          <OrbitControls />

          <directionalLight intensity={0.5} />
          <pointLight position={[-10, 0, -20]} intensity={0.4} />
          <ambientLight intensity={0.3} />
          <Suspense fallback={null}>
            <Hello />
          </Suspense>
        </Canvas>
      </div>
    );
}

export default Hero
