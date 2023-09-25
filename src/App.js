import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Suspense } from "react";
import { Model } from "../public/blender/model";

function App() {
  return (
    <div>
      <Canvas camera={{ position: [5, 0, 0] }}>
        <mesh>
          <Suspense>{/* <Model /> */}</Suspense>
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
