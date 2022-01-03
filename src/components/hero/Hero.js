import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Hello from "../Hello";
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
      <div className="canvas">
        <Canvas
          colorManagement
          camera={{
            position: [-2, 0, 15],
            fov: 30,
            zoom: 2,
            near: 1,
            far: 1000,
          }}
        >
          <OrbitControls  />

          <directionalLight intensity={0.5} />
          <pointLight position={[-10, 0, -20]} intensity={0.4} />
          <ambientLight intensity={0.3} />
          <Suspense fallback={<Html>Loading...</Html>}>
            <Hello />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Hero;
