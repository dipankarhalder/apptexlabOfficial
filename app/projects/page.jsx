import Link from "next/link";
import styles from "./page.module.css";
import { projects } from "@/projects";

export default function Projects() {
  return (
    <div className={styles.pageWorks}>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <div className="">
              <span>&#8594;</span>
              <Link href={`/projects/${project.slug}`}>{project.title}</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
