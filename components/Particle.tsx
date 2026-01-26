"use client";

import { useCallback } from "react";
import Particles, { ParticlesProps } from "react-tsparticles";
import { loadFull } from "tsparticles";

type InitType = ParticlesProps["init"];
type InitTypeNonNullable = NonNullable<InitType>;
type InitParameters = Parameters<InitTypeNonNullable>;
type Engine = InitParameters[0];

const Particle = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      className="h-screen"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 150,
              duration: 1,
            },
          },
        },
        particles: {
          color: {
            value: "#e6e6e6",
          },
          links: {
            color: "#ffb22c",
            distance: 150,
            enable: true,
            opacity: 0.8,
            width: 2,
          },
          collisions: {
            enable: true,
          },
          move: {
            enable: true,
            direction: "top-right",
            outModes: {
              default: "out",
            },
            random: true,
            straight: false,
            speed: 0.7,
            bounce: true,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 110,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Particle;
