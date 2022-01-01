import React, {Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import Hello from './Hello'
import "./styles.css";
import { OrbitControls } from "@react-three/drei";
import Header from "./components/header/Header";

export default function App() {
  return (
    <>
      <Header />
      <Canvas className="canvas" colorManagement camera={{ position: [-5, 0, 10], fov: 60 }}>
        <OrbitControls />

        <directionalLight intensity={0.5} />
        <pointLight position={[-10, 0, -20]} intensity={0.4} />
        <ambientLight intensity={0.3} />
        <Suspense fallback={null}>
          <Hello />
        </Suspense>
      </Canvas>
    </>
  );
}
