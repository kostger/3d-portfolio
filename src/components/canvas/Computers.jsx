import {Suspense,useEffect,useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls,Preload,useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
import { PointLight } from 'three';

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  console.log(computer);
  return (
      <mesh>
          <hemisphereLight intensity={0.15} groundColor="black" />
          <pointLight isPointLight intensity={100} />
          <spotLight position={[-20,50,10]} />
          <primitive
              object={computer.scene}
              scale={0.6}
              position={[0, -3.5, 0]}
              rotation={[-0.01, -0.2, -0.1]}
          />
      </mesh>
  );
};

const ComputersCanvas = () => {
  return (
      <Canvas
          frameloop="demand"
          shadows
          camera={{
              position: [20, 3, 5],
              fov: 25,
          }}
          gl={{ preserveDrawingBuffer: true }}>
          <Suspense>
              <OrbitControls
                  enableZoom={false}
                  maxPolarAngle={Math.PI / 2}
                  minPolarAngle={Math.PI / 2}
              />
              <Computers />
          </Suspense>
          <Preload all />
      </Canvas>
  );
};
export default ComputersCanvas;