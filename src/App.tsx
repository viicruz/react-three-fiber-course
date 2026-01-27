import { Canvas, type Vector3 } from '@react-three/fiber'
import './App.css'

export function App() {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} />
      <Cube position={[1, 0, 0]} color='orange' />
      <Cube position={[-1, 0, 0]} color='green' />
      <Cube position={[0, 1, 0]} color='red' />
      <Cube position={[0, -1, 0]} color='blue' />
    </Canvas>
  )
}

type CubeProps = {
  position: Vector3;
  color: string;
};

export function Cube(props: CubeProps) {
  return (
    <mesh position={props.position}>
      <boxGeometry />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
}


export default App
