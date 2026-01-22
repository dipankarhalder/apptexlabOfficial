"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectClient({ project, nextProject, prevProject }) {
  const lenisRef = useRef(null);
  const projectNavRef = useRef(null);
  const progressBarRef = useRef(null);
  const projectDescriptionRef = useRef(null);
  const footerRef = useRef(null);
  const nextProjectProgressBarRef = useRef(null);

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [shouldUpdateProgress, setShouldUpdateProgress] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      smoothWheel: true,
    });

    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(projectNavRef.current, {
      opacity: 0,
      y: -100,
    });

    gsap.to(projectNavRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.25,
      ease: "power3.out",
    });

    gsap.to(projectDescriptionRef.current, {
      opacity: 1,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });

    const nevScrollTrigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        if (progressBarRef.current) {
          gsap.set(progressBarRef.current, {
            scaleX: self.progress,
          });
        }
      },
    });
  }, [nextProject.slug, isTransitioning, shouldUpdateProgress]);

  if (!project) return null;

  return (
    <div className="main_pages">
      <div>
        <div>
          <span>&#8592;&nbsp;</span>
          <Link href={`/projects/${prevProject.slug}`}>Prevoius</Link>
        </div>
        <div>
          <p>{project.title}</p>
        </div>
        <div>
          <span>&#8594;&nbsp;</span>
          <Link href={`/projects/${nextProject.slug}`}>Next</Link>
        </div>
      </div>
      <div>
        <p>{project.desc}</p>
      </div>
      <div>
        <h4>{nextProject.title}</h4>
        <div>
          <p>Next Project</p>
        </div>
        <div>
          <div className="next-project-process-bar"></div>
        </div>
      </div>
    </div>
  );
}
