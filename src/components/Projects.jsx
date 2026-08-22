import { useState } from "react";
import ProjectCard from "./ProjectCard.jsx";
import ProjectModal from "./ProjectModal.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  const [activeId, setActiveId] = useState(null);
  const activeProject = projects.find((p) => p.id === activeId) || null;

  return (
    <section id="projects" className="section">
      <p className="eyebrow">Projects</p>
      <h2 className="section__title">Selected work</h2>

      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={() => setActiveId(project.id)}
          />
        ))}
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveId(null)} />
    </section>
  );
}
