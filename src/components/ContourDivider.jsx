// A thin traced boundary between sections — echoes the hero's
// contour signature at low volume, rather than a plain <hr>.
export default function ContourDivider() {
  return (
    <div className="contour-divider" aria-hidden="true">
      <svg viewBox="0 0 1000 12" preserveAspectRatio="none">
        <path d="M0 6 Q 250 -2 500 6 T 1000 6" />
      </svg>
    </div>
  );
}
