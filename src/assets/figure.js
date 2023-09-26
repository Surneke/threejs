import React, { Suspense, useRef } from "react";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { CanvasLoader } from "../components/loader";
//camera={{ fov: 25, position: [-12, -12, -12] }}
export const SingleFigure = (props) => {
  const { nodes, materials } = useGLTF("/uploads_files_4227396_Kaws+Base.glb");
  return (
    <line
      onTimeUpdate={(line) => line.computeLineDistances()}
      geometry={nodes.Sphere001.geometry}
      scale={[0.04, 0.04, 0.04]}
      // scale={[0.1, 0.1, 0.1]}
      // strikethroughPosition={[-0.2, 0.02, -0.8]}
      lightingColor={0x000000}
    >
      <lineDashedMaterial
        color={0x000000}
        linewidth={1}
        scale={1}
        dashSize={2}
        gapSize={1}
        linejoin="round"
      />
    </line>
  );
};

useGLTF.preload("/uploads_files_4227396_Kaws+Base.glb");

export const Figure = () => {
  return (
    <div className="figure__canvas">
      <Canvas>
        <mesh>
          <Suspense fallback={<CanvasLoader />}>
            <SingleFigure />
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
};
