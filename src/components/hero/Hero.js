import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  Plane,
} from "@react-three/drei";
import Hello from "../Hello";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <h1 className="effect-shine">Nikhil Pawar</h1>
       

      </div>

      <div className="canvas">
        <Canvas
          colorManagement
          shadowMap
          camera={{
            position: [-2, 0, 15],
            fov: 30,
            zoom: 2,
            near: 0.1,
            far: 9999999,
          }}
        >
          <OrbitControls />

          <directionalLight intensity={0.8} />
          <pointLight position={[0, 0.2, 0]} intensity={0.94} />
          <ambientLight intensity={0.6} />
          <Suspense fallback={<Html>Loading...</Html>}>
            <Hello />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Hero;
