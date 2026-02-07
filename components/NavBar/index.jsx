"use client";

import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const pathname = usePathname();

  const isActive = (href) =>
    pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    gsap.fromTo(
      ".appNavigationHeader > ul > li",
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1.8,
        stagger: 0.2,
        ease: "power3.out",
      },
    );
  }, []);

  return (
    <div className="navigation">
      <ul>
        <li className={isActive("/projects") ? "active" : ""}>
          <Link href="/projects">Works</Link>
        </li>
        <li className={isActive("/services") ? "active" : ""}>
          <Link href="/services">Services</Link>
        </li>
        <li className={isActive("/industries") ? "active" : ""}>
          <Link href="/industries">Industries</Link>
        </li>
        <li className={isActive("/about") ? "active" : ""}>
          <Link href="/about">About</Link>
        </li>
        <li className={isActive("/contacts") ? "active" : ""}>
          <Link href="/contacts">Contact</Link>
        </li>
      </ul>
    </div>
  );
};
