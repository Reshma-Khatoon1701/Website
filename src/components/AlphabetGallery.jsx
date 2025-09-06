import { useState } from "react";

// Import cursive letter images
import imgA from "../assets/cursiveA.png";
import imgB from "../assets/cursiveB.png";
import imgC from "../assets/cursiveC.png";
import imgD from "../assets/cursiveD.png";
import imgE from "../assets/cursiveE.png";
import imgF from "../assets/cursiveF.png";


// Import background design images
import bgA from "../assets/bgA.jpg";
import bgB from "../assets/bgB.jpg";
import bgC from "../assets/bgC.jpg";
import bgD from "../assets/bgD.jpg";
import bgE from "../assets/bgE.jpg";
import bgF from "../assets/bgF.jpg";


const letters = {
  A: { cursive: imgA, bg: bgA },
  B: { cursive: imgB, bg: bgB },
  C: { cursive: imgC, bg: bgC },
  D: { cursive: imgD, bg: bgD },
  E: { cursive: imgE, bg: bgE },
  F: { cursive: imgF, bg: bgF },

};

export default function AlphabetGallery() {
  const [selected, setSelected] = useState("A");

  return (
    <section className="alphabet-gallery">
      {/* Left side - Cursive + Background */}
      <div className="gallery-left">
        <h2 className="gallery-title">The Letter</h2>

        <div className="letter-container">
          <img
            src={letters[selected].bg}
            alt={`Background for ${selected}`}
            className="letter-bg"
          />
          <img
            src={letters[selected].cursive}
            alt={`Cursive ${selected}`}
            className="letter-cursive"
          />
        </div>
      </div>

      {/* Right side - Alphabet Grid */}
      <div className="gallery-right">
        <h3 className="grid-title">A-Z PROJECT</h3>
        <div className="alphabet-grid">
          {Object.keys(letters).map((letter) => (
            <div
              key={letter}
              className={`grid-item ${selected === letter ? "active" : ""}`}
              onClick={() => setSelected(letter)}
            >
              {letter}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
