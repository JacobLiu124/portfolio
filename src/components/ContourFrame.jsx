import { useState } from "react";

// The signature element: an animated contour line that traces itself
// around the portrait, in the same visual language as a segmentation
// boundary drawn around a region of interest.
export default function ContourFrame({ src, alt }) {
  const [failed, setFailed] = useState(false);
  const showImage = src && !failed;

  return (
    <div className="contour-frame">
      <svg
        className="contour-frame__svg"
        viewBox="0 0 300 340"
        aria-hidden="true"
      >
        <path
          className="contour-frame__path"
          d="M150 8
             C 230 8 288 60 290 148
             C 292 232 246 300 158 332
             C 82 328 12 276 10 176
             C 8 84 66 12 150 8 Z"
        />
      </svg>
      <div className="contour-frame__image">
        {showImage ? (
          <img src={src} alt={alt} loading="eager" onError={() => setFailed(true)} />
        ) : (
          <div className="contour-frame__placeholder" aria-hidden="true">
            <span>Add your photo — see profile.js</span>
          </div>
        )}
      </div>
    </div>
  );
}
