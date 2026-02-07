"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Logo } from "@/components/Logo";
import { NavBar } from "@/components/NavBar";
import { Contacts } from "@/components/Contacts";

gsap.registerPlugin(ScrollTrigger);

export const Navigation = () => {
  const headerRef = useRef(null);
  const currentY = useRef(0);
  const targetY = useRef(0);

  useEffect(() => {
    const header = headerRef.current;
    const onScroll = () => {
      const scroll = window.scrollY;
      if (scroll > currentY.current && scroll > 50) {
        targetY.current = -header.offsetHeight;
      } else {
        targetY.current = 0;
      }
      currentY.current = scroll;
    };
    window.addEventListener("scroll", onScroll);
    let rafId;
    const smoothUpdate = () => {
      const y = gsap.utils.interpolate(
        parseFloat(header.style.transform.replace("translateY(", "") || 0),
        targetY.current,
        0.1,
      );
      header.style.transform = `translateY(${y}px)`;
      rafId = requestAnimationFrame(smoothUpdate);
    };
    smoothUpdate();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="mainheader" ref={headerRef}>
      <Logo />
      <NavBar />
      <Contacts />
    </div>
  );
};
