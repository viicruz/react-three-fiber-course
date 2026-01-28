import { Canvas, useFrame, type Vector3 } from '@react-three/fiber';
import type * as THREE from "three";
import './App.css'
import { useRef, useState } from 'react';

export function App() {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} intensity={0.5} />
      <ambientLight intensity={0.1} />

      <group position={[0, -1, 0]}>
        {/* <Cube position={[1, 0, 0]} color='red' size={[1, 1, 1]} /> */}
        <Sphere position={[1, 0, 0]} color='blue' radius={0.6} segments={32} />
        {/* <Torus position={[5, 0, 0]} color="yellow" radius={0.6} radialSegments={16} tube={0.1} tubularSegments={32} />
        <TorusKnot position={[1, 0, 0]} color="yellow" radius={0.6} radialSegments={16} tube={0.1} tubularSegments={32} p={15} q={18} /> */}
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
    if (ref.current) {
      ref.current.rotation.x += delta
      ref.current.rotation.y += delta * 2.0
      ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2
    }
  });

  return (
    <mesh ref={ref} position={props.position}>
      <boxGeometry args={props.size} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
}


type SphereProps = {
  position: Vector3;
  color: string;
  radius: number;
  segments: number;
}

export function Sphere(props: SphereProps) {

  const ref = useRef<THREE.Mesh>(null)
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useFrame((state, delta) => {
    if (ref.current) {
      const speed = isHovered ? 1 : 0.2;
      ref.current.rotation.y += delta * speed;
    }
  });

  return (
    <mesh
      ref={ref}
      position={props.position}
      onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
      onPointerLeave={() => setIsHovered(false)}
      onPointerDown={() => setIsClicked(!isClicked)}
      scale={isClicked ? 1.5 : 1}
    >
      <sphereGeometry args={[props.radius, props.segments, props.segments]} />
      <meshStandardMaterial color={isHovered ? "orange" : "lightblue"} wireframe />
    </mesh>
  )
}

type TorusProps = {
  position: Vector3;
  color: string;
  radius: number,
  tube: number,
  radialSegments: number,
  tubularSegments: number;
  arc?: number;
}
export function Torus(props: TorusProps) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta;
      ref.current.rotation.y += delta;

      ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2
    }
  })
  return (
    <mesh ref={ref} position={props.position}>
      <torusGeometry args={[props.radius, props.tube, props.radialSegments, props.tubularSegments]} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  )
}

type TorusKnotProps = {
  position: Vector3;
  color: string;
  radius: number,
  tube: number,
  radialSegments: number,
  tubularSegments: number;
  p: number;
  q: number;

}
export function TorusKnot(props: TorusKnotProps) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta;
      ref.current.rotation.y += delta;

      ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2
    }
  })
  return (
    <mesh ref={ref} position={props.position}>
      <torusKnotGeometry args={[props.radius, props.tube, props.radialSegments, props.tubularSegments, props.p, props.q]} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  )
}


export default App
