import ContourFrame from "./ContourFrame.jsx";
import { GithubIcon, LinkedinIcon, CodeIcon, LinkIcon } from "./Icons.jsx";
import { profile } from "../data/profile.js";

const ICONS = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  leetcode: CodeIcon,
};

const LABELS = {
  github: "GitHub",
  linkedin: "LinkedIn",
};

export default function Hero() {
  const linkEntries = Object.entries(profile.links || {});

  return (
    <section id="hero" className="hero section">
      <div className="hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">{profile.location}</p>
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__role">{profile.role}</p>
          <p className="hero__blurb">{profile.blurb}</p>

          {linkEntries.length > 0 && (
            <ul className="hero__links">
              {linkEntries.map(([key, href]) => {
                const Icon = ICONS[key] || LinkIcon;
                const label = LABELS[key] || key;
                return (
                  <li key={key}>
                    <a href={href} target="_blank" rel="noreferrer">
                      <Icon />
                      <span>{label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="hero__portrait">
          <ContourFrame src={profile.photo} alt={profile.name} />
        </div>
      </div>
    </section>
  );
}
