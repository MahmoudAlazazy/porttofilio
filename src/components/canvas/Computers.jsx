import React from "react";
import { OrbitControls, Preload, useGLTF, Float } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  useEffect(() => {
    computer.scene.traverse((child) => {
      if (child.isMesh) {
        child.geometry?.center();
      }
    });
  }, [computer.scene]); // Fixed: Added proper dependency

  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="black" />
      <pointLight intensity={3} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <Float 
       speed={2}
  rotationIntensity={0.2}
  floatIntensity={1.5}
      >
        <primitive
          object={computer.scene}
          scale={isMobile ? 0.5 : 0.75}
          position={isMobile ? [0, -1.6, -1.2] : [0, -2.6, -1.5]}
          rotation={isMobile ? [0, 0, -0.05] : [-0.01, -0.2, -0.05]}
        />
      </Float>
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setisMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:640px)");
    setisMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setisMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
           enableRotate={true} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;