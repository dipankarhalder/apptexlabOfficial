"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const bannerRef = useRef(null);
  const bannerColumnsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(bannerColumnsRef.current, {
        willChange: "transform",
        rotationX: 15,
        rotationY: -8,
        rotationZ: 32,
      });
      gsap.set(bannerRef.current, { width: "50%" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: heroRef.current,
        },
      });

      tl.to(bannerRef.current, { width: "100%", ease: "none" }, 0);
      tl.to(
        bannerColumnsRef.current,
        {
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          ease: "none",
          onComplete: () => {
            gsap.set(bannerColumnsRef.current, { willChange: "auto" });
          },
        },
        0,
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="appMainHeroContent" ref={heroRef}>
        <div className="heroContent">
          <div className="appHeroInsideContent">
            <h1>One Lab, Many Industries</h1>
            <p>
              We craft innovative IT solutions and digital experiences that
              drive growth across industries.
            </p>
          </div>
        </div>
        <div className="heroBanner" ref={bannerRef}>
          <div className="heroBannerColumns" ref={bannerColumnsRef}>
            <div className="column"></div>
            <div className="column"></div>
            <div className="column"></div>
            <div className="column"></div>
            <div className="column"></div>
            <div className="column"></div>
          </div>
        </div>
      </section>
    </>
  );
}
