import { Html, useProgress } from "@react-three/drei";
// import { useLoader } from "../context/loader";

export const CanvasLoader = () => {
  const { progress } = useProgress();
  //   const { setIsLoading } = useLoader();
  //   progress >= 90 ? setIsLoading(true) : setIsLoading(false);
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};
