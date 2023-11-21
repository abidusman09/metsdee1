"use client";
import { NextUIProvider } from "@nextui-org/react";
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const Provider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default Provider;
