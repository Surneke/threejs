import "../App.css";
import * as maath from "maath";
import { Suspense, useRef } from "react";
import { PointMaterial, Points } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

export const Star = (props) => {
  const ref = useRef();
  const { camera, mouse, viewport } = useThree();

  const sphere = maath.random.inSphere(new Float32Array(5000), { radius: 2 });
  useFrame((state, delta) => {
    const x = (mouse.x * viewport.width) / 2;
    // const y = (mouse.y * viewport.height) / 2;
    // ref.current.position.set(x, y, 0);
    // ref.current.rotation.set(-y, x, 0);
    ref.current.rotation.x = mouse.x;
    // ref.current.rotation.x -= delta / 10;
    // ref.current.rotation.y -= delta / 10;
    // ref.current.rotation.z -= delta / 10;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const Stars = () => {
  return (
    <div className="stars__container">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Star />
        </Suspense>
      </Canvas>
      ;
    </div>
  );
};
