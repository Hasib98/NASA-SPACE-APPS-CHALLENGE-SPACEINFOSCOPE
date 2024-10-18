/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 scene.gltf 
Author: AstroJar (https://sketchfab.com/AstroJar)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/pixel-planet-wise-0855-0714-8cecd383290e417d8b03c900e5d908ef
Title: Pixel Planet WISE 0855-0714
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.Material}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/scene.gltf");
