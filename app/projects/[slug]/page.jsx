import { use } from "react";
import { projects } from "@/projects";
import ProjectClient from "./project-client";

export default function ProjectPage({ params }) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);
  const currentIndex = projects.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const nextIndex = (currentIndex + 1) % projects.length;
  const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
  const prevProject = projects[prevIndex];
  const nextProject = projects[nextIndex];

  return (
    <ProjectClient
      project={project}
      nextProject={nextProject}
      prevProject={prevProject}
    />
  );
}
