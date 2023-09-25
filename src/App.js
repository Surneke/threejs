import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Suspense } from "react";
// import { Model } from "./assets/model.js";
import { OrbitControls, Preload } from "@react-three/drei";
import { Model } from "./assets/model";
import { CanvasLoader } from "./components/loader";

function App() {
  return (
    <div className="App">
      <Canvas camera={{ position: [5, 0, 0], fov: 23 }}>
        <mesh scale={0.5}>
          <Suspense fallback={<CanvasLoader />}>
            <Model />
          </Suspense>
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
        <Preload all />
      </Canvas>
    </div>
  );
}

export default App;
