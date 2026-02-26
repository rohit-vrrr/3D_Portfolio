import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={1.5}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 3]} />
        <meshStandardMaterial
          color="#b8e1ff"
          roughness={1}
          metalness={0}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[0, 0, 0]}
          scale={0.8}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, name }) => {
  return (
    <Canvas
      title={name}
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
