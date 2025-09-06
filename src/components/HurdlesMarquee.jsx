import hurdleIcon from "../assets/man.jpg.svg"; // your man logo

export default function HurdlesMarquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {/* Repeat text + icon multiple times for seamless scroll */}
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="marquee-item">
            HURDLES <img src={hurdleIcon} alt="Hurdle Icon" className="hurdle-icon"/>
          </span>
        ))}
      </div>
    </div>
  );
}