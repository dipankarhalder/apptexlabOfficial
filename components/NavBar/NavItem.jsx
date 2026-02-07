"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";

export const NavItem = ({ href, label }) => {
  const itemRef = useRef(null);
  const tl = useRef(null);

  // const splitText = (text) =>
  //   text.split("").map((char, i) => (
  //     <span key={i} className="char">
  //       {char === " " ? "\u00A0" : char}
  //     </span>
  //   ));

  // const handleEnter = () => {
  //   const charsTop = itemRef.current.querySelectorAll(".top .char");
  //   const charsBottom = itemRef.current.querySelectorAll(".bottom .char");

  //   tl.current?.kill();
  //   tl.current = gsap.timeline();
  //   tl.current
  //     .to(charsTop, {
  //       y: "-100%",
  //       stagger: 0.03,
  //       duration: 0.4,
  //       ease: "power2.out",
  //     })
  //     .fromTo(
  //       charsBottom,
  //       { y: "100%" },
  //       {
  //         y: "0%",
  //         stagger: 0.03,
  //         duration: 0.4,
  //         ease: "power2.out",
  //       },
  //       "<",
  //     );
  // };

  // const handleLeave = () => {
  //   const charsTop = itemRef.current.querySelectorAll(".top .char");
  //   const charsBottom = itemRef.current.querySelectorAll(".bottom .char");

  //   tl.current?.kill();
  //   tl.current = gsap.timeline();
  //   tl.current
  //     .to(charsTop, {
  //       y: "0%",
  //       stagger: 0.03,
  //       duration: 0.35,
  //       ease: "power2.out",
  //     })
  //     .to(
  //       charsBottom,
  //       {
  //         y: "100%",
  //         stagger: 0.03,
  //         duration: 0.35,
  //         ease: "power2.out",
  //       },
  //       "<",
  //     );
  // };

  return (
    <li
      ref={itemRef}
      className="nav-item"
      // onMouseEnter={handleEnter}
      // onMouseLeave={handleLeave}
    >
      <Link href={href}>
        <span className="text">
          <span className="top">{label}</span>
          <span className="bottom">{label}</span>
        </span>
      </Link>
    </li>
  );
};
