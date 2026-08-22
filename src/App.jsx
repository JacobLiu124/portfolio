import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import ScrollTopButton from "./components/ScrollTopButton.jsx";
import ContourDivider from "./components/ContourDivider.jsx";
import { profile } from "./data/profile.js";

export default function App() {
  return (
    <>
      <div className="bg-glow" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <ContourDivider />
        <Projects />
        <ContourDivider />
        <Contact />
      </main>
      <footer className="footer">
        <p>
          {profile.name} · Built with React &amp; Vite ·{" "}
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            source
          </a>
        </p>
      </footer>
      <ScrollTopButton />
    </>
  );
}
