import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Suspense } from "react";
import { Model } from "./assets/model.js";

function App() {
  return (
    <div className="App">
      <Canvas camera={{ position: [5, 0, 0] }}>
        <mesh>
          <Suspense>
            <Model />
          </Suspense>
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
