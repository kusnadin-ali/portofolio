"use client";
import TypeIt from "typeit";
import "@/styles/landing.css";

import { useEffect, useRef } from "react";
import { Button } from "@heroui/button";

export const Landing = () => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const instance = new TypeIt(textRef.current, {
      loop: true,
      waitUntilVisible: true,
    })
      .type("I'm a Software Engineer")
      .pause(750)
      .delete(18)
      .pause(500)
      .type(" Fullstack Developer")
      .pause(1000)
      .delete(20)
      .pause(500)
      .type(" Frontend Developer")
      .pause(1000)
      .delete(19)
      .pause(500)
      .type(" Backend Developer")
      .pause(1000)
      .delete(18)
      .go();

    return () => instance.destroy();
  }, []);
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-start py-4 px-2 md:px-8 lg:px-24 space-y-5">
        <div className="font-bold text-4xl text-fourth">
          Hi, I am Ali Kusnadin
        </div>
        <div className="text-third font-extrabold my-4 text-7xl ti-cursor-third">
          <span ref={textRef}></span>
        </div>
        <p className="text-2xl text-fourth py-3">based in Bandung, Indonesia</p>
        <div className="flex gap-5 flex-wrap">
          <Button
            type="button"
            className=" text-white bg-third rounded-lg"
            size="lg"
          >
            View My Work →
          </Button>

          <Button
            type="button"
            className=" text-white border-4 rounded-lg"
            size="lg"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </>
  );
};
