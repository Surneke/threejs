import "./App.css";
import { gsap } from "gsap";
import { Figure } from "./assets/figure";
import { Canvas } from "@react-three/fiber";
import { CanvasLoader } from "./components/loader";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Suspense, useLayoutEffect, useRef } from "react";
import { OrbitControls, Preload } from "@react-three/drei";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { Star, Stars } from "./components/stars";

function App() {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  const main = useRef();
  const smoother = useRef()

  const scrollTo = () => {
    smoother.current.scrollTo(".box-c", true, "center center");
  };
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      smoother.current = ScrollSmoother.create({
        smooth: 2,
        effects: true,
      });
      ScrollTrigger.create({
        trigger: ".box-c",
        pin: true,
        start: "center center",
        end: "+=300",
        markers: true,
      });
    }, main);
    return () => ctx.revert();
  }, []);

  return (
    // <div className="App">
    <main className="main">
      <Stars />
      <div></div>
      <div id="smooth-wrapper" ref={main}>
        <div className="line"></div>
        <div id="smooth-content">
          <header className="header">
            <button className="button" onClick={scrollTo}>
              Jump to C
            </button>
          </header>
          <div className="box box-a" data-speed="0.5">
            <Figure />
          </div>
          <div className="box box-b" data-speed="0.8">
            b
          </div>
          <div className="box box-c" data-speed="1.5">
            <Stars />
          </div>
          <div className="line"></div>
        </div>
      </div>
    </main>
    // </div>
  );
}

export default App;
