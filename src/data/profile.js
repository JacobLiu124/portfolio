// ------------------------------------------------------------------
// Fill this in with your own details. Nothing else in the codebase
// needs to change for basic content updates — components read from
// this file.
// ------------------------------------------------------------------

export const profile = {
  name: "Jacob Liu",
  role: "Software engineering student at Macquarie University. Part time math tutor",
  location: "Sydney, Australia",

  // Short intro shown in the hero. Keep it to 2–3 sentences.
  blurb:
    "Programmer who specialises in Java and Python. Currently researching, deep learning in foundational vision models." +
    "With general knowldege on APIs, full-stackweb application development and agile software development.",

  // Path relative to /public, e.g. "/headshot.jpg". Drop your image
  // into the public/ folder and point this at it.
  photo: "/headshot.jpg",

  links: {
    github: "https://github.com/JacobLiu124",
    linkedin: "https://www.linkedin.com/in/jacob-liu-1a40a9269/",
    // Add or remove as needed — Hero.jsx reads whatever keys exist here.
  },
};

// Contact bubbles at the bottom of the page. `value` is what gets
// copied to the clipboard when a bubble is clicked. `href` is optional —
// if present, the bubble is also a real link (e.g. mailto:, tel:).
export const contacts = [
  {
    label: "Email",
    value: "jacobliu2017@outlook.com",
    href: "mailto:jacobliu2017@outlook.com",
  },
  {
    label: "GitHub",
    value: "github.com/JacobLiu124",
    href: "https://github.com/JacobLiu124",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jacob-liu-1a40a9269",
    href: "https://linkedin.com/in/jacob-liu-1a40a9269",
  },
];
