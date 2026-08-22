import { useEffect, useRef } from "react";
import { CloseIcon } from "./Icons.jsx";
import { asset } from "../utils/asset.js";

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);
  const open = Boolean(project);

  // Lock background scroll while the modal is open.
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const hasDocs = project.documentation?.length > 0;

  return (
    <div
      className="modal-backdrop"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          ref={closeRef}
          className="modal__close"
          onClick={onClose}
          aria-label="Close project details"
        >
          <CloseIcon />
        </button>

        <div className="modal__scroll">
          {project.screenshot && (
            <div className="modal__cover">
              <img src={asset(project.screenshot)} alt={`Screenshot of ${project.title}`} />
            </div>
          )}

          <div className="modal__body">
            <h2 id="modal-title" className="modal__title">
              {project.title}
            </h2>

            {project.skills?.length > 0 && (
              <ul className="chip-row">
                {project.skills.map((skill) => (
                  <li key={skill} className="chip">
                    {skill}
                  </li>
                ))}
              </ul>
            )}

            <p className="modal__summary">{project.summary}</p>

            {project.links?.length > 0 && (
              <div className="modal__links">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="button button--ghost"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            {hasDocs ? (
              <div className="modal__docs">
                {project.documentation.map((block, i) => (
                  <div key={i} className="modal__doc-block">
                    <h3>{block.heading}</h3>
                    {block.body && <p>{block.body}</p>}
                    {block.list && (
                      <ul>
                        {block.list.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="modal__docs-empty">
                Full write-up coming soon — add entries to{" "}
                <code>documentation</code> in <code>src/data/projects.js</code>.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
