import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

export const Contacts = () => {
  useEffect(() => {
    gsap.to(".appContact", { x: 0, opacity: 1, duration: 1, delay: 1.2 });
  }, []);

  return (
    <div className="appContact">
      <Link href="">Lets Talk</Link>
    </div>
  );
};
