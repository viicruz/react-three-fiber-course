import { Canvas, } from '@react-three/fiber'
import './App.css'

const App = () => {
  return (
    <Canvas>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
  )
}

export default App
