import hurdleImg from "../assets/hurdles.png"; // your hurdle image

export default function Hurdles() {
  return (
    <section className="hurdles-stack">
      {Array.from({ length: 4 }).map((_, i) => (
        <img
          key={i}
          src={hurdleImg}
          alt="Hurdle"
          className="hurdle-layer"
          style={{
            transform: `translate(-50%, -50%) scale(${1 - i * 0.2})`,
            zIndex: 4 - i, // largest in front
          }}
        />
      ))}
    </section>
  );
}