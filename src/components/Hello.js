/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/hello.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    actions.hello.play();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} position={[0, -2, 0]} scale={0.02}>
        <primitive object={nodes.mixamorig6Hips} />
        <skinnedMesh
          geometry={nodes.Ch09.geometry}
          material={materials.Ch09_body}
          skeleton={nodes.Ch09.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/hello.glb");