export default function ProjectCard({ project, onOpen }) {
  return (
    <article className="project-card">
      <button
        className="project-card__hit"
        onClick={onOpen}
        aria-haspopup="dialog"
      >
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__summary">{project.summary}</p>

        {project.skills?.length > 0 && (
          <ul className="chip-row">
            {project.skills.map((skill) => (
              <li key={skill} className="chip">
                {skill}
              </li>
            ))}
          </ul>
        )}

        <span className="project-card__cue" aria-hidden="true">
          View details →
        </span>
      </button>
    </article>
  );
}
