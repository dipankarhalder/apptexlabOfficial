import Link from "next/link";
import projectStyles from "./page.module.css";
import { projects } from "@/projects";

export default function Projects() {
  return (
    <ul className="work_page">
      {projects.map((project) => (
        <li key={project.id}>
          <div className={projectStyles.links}>
            <span>&#8594;</span>
            <Link href={`/projects/${project.slug}`}>{project.title}</Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
