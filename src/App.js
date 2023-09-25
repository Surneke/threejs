import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Suspense } from "react";
// import { Model } from "./assets/model.js";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <div className="App">
      <Canvas camera={{ position: [5, 0, 0] }}>
        <mesh scale={0.5}>
          <Suspense>{/* <Model /> */}</Suspense>
        </mesh>
        <OrbitControls
          enableZoom={false}
          minPolarAngle={1.45}
          maxPolarAngle={Math.PI / 1.85}
          autoRotate
          enableRotate={true}
          autoRotateSpeed={5}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}

export default App;
