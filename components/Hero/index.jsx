"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const bannerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const columns = gsap.utils.toArray(`.${heroStyles.column}`);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: heroRef.current,
        },
      });

      tl.fromTo(
        bannerRef.current,
        { width: "50%" },
        { width: "100%", ease: "none" },
        0,
      );

      columns.forEach((col, index) => {
        tl.fromTo(
          col,
          {
            rotationZ: 45,
            rotationY: index % 2 === 0 ? -15 : 15,
          },
          {
            rotation: 0,
            y: 0,
            ease: "none",
          },
          0,
        );
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="main_hero_content" ref={heroRef}>
        <div className="hero_content">
          <h1>Hero Content</h1>
          <p>Scroll down and watch the banner expand</p>
        </div>
        <div className="hero_banner" ref={bannerRef}>
          <div className="column">1</div>
          <div className="column">2</div>
          <div className="column">3</div>
          <div className="column">4</div>
          <div className="column">5</div>
        </div>
      </section>
      <section className="main_about_content">
        <h2>About Section</h2>
        <p>This content comes after the hero animation.</p>
      </section>
    </>
  );
}
