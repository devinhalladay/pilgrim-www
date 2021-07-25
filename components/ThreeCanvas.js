import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Canvas, extend, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
// import { MaterialLoader } from "three";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { Environment, Html, useProgress } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";

function Scene({ url, mtlUrl }) {
  const materials = useLoader(MTLLoader, mtlUrl);
  const object = useLoader(OBJLoader, url, (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  return <primitive object={object} scale={0.4} />;
}

export default function ThreeCanvasComponent() {
  return (
    <Canvas>
      <Scene url="/FrameX8.obj" mtlUrl="/FrameX8.mtl" />

      <OrbitControls />
      <Environment preset="sunset" background />
      <ambientLight intensity={2} />
    </Canvas>
  );
}
