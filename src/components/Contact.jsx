import { useState } from "react";
import { CopyIcon, CheckIcon } from "./Icons.jsx";
import { contacts } from "../data/profile.js";

export default function Contact() {
  const [copiedLabel, setCopiedLabel] = useState(null);

  const handleCopy = async (contact) => {
    try {
      await navigator.clipboard.writeText(contact.value);
      setCopiedLabel(contact.label);
      window.setTimeout(() => setCopiedLabel(null), 1800);
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — fail quietly,
      // the bubble's href (if any) still works as a fallback.
    }
  };

  return (
    <section id="contact" className="section">
      <p className="eyebrow">Get in Touch!</p>
      <h2 className="section__title">Let's connect</h2>
      <p className="contact__blurb container-narrow">
        I'm currently open to work opportunities or internships. If you have any questions or inquiries, 
        feel free to reach out to me through any of the contact methods below. I look forward to connecting with you! 
      </p>

      <ul className="bubble-row">
        {contacts.map((contact) => {
          const isCopied = copiedLabel === contact.label;
          return (
            <li key={contact.label}>
              <button
                className={`bubble ${isCopied ? "bubble--copied" : ""}`}
                onClick={() => handleCopy(contact)}
                title={`Copy ${contact.label.toLowerCase()}`}
              >
                <span className="bubble__label">{contact.label}</span>
                <span className="bubble__value">{contact.value}</span>
                <span className="bubble__icon" aria-hidden="true">
                  {isCopied ? <CheckIcon /> : <CopyIcon />}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      <p className="contact__hint" role="status" aria-live="polite">
        {copiedLabel ? `Copied ${copiedLabel.toLowerCase()} to clipboard.` : "\u00A0"}
      </p>
    </section>
  );
}
