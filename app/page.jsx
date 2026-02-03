import styles from "./page.module.css";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className={styles.pageHome}>
      <Hero />
    </div>
  );
}
