import { Canvas, useFrame, type Vector3 } from '@react-three/fiber';
import type * as THREE from "three";
import './App.css'
import { useRef } from 'react';

export function App() {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} intensity={0.5} />
      <ambientLight intensity={0.1} />

      <group position={[0, -1, 0]}>
        {/* <Cube position={[1, 0, 0]} color='orange' size={[1, 1, 1]} />
        <Cube position={[-1, 0, 0]} color='green' size={[1, 1, 1]} />
        <Cube position={[0, 1, 0]} color='red' size={[1, 1, 1]} />
        <Cube position={[0, -1, 0]} color='blue' size={[1, 1, 1]} /> */}
        <Cube position={[0, 0, 0]} color='blue' size={[1, 1, 1]} />
      </group>

    </Canvas>
  )
}

type CubeProps = {
  position: Vector3;
  color: string;
  size: [number, number, number],
};

export function Cube(props: CubeProps) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if(ref.current){
      ref.current.rotation.x += delta * 2
    } 
  });

  return (
    <mesh ref={ref} position={props.position}>
      <boxGeometry args={props.size} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
}


export default App
