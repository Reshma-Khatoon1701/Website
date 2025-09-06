import { useEffect, useState } from "react";

export default function NumbersShowcase() {
  const items = [
    { number: 1034, text: "Sample data about sample things" },
    { number: 2, text: "Sample data about sample things" },
    { number: 54, text: "Sample data about sample things" },
    { number: 25, text: "Sample data about sample things" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 3000); // change every 3 seconds
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <section className="numbers-section">
      {items.map((item, i) => (
        <div
          key={i}
          className={`number-item ${i === activeIndex ? "active" : ""}`}
        >
          <h1 className="big-number">{item.number}</h1>
          <p className="number-text">{item.text}</p>
          {i === activeIndex && <div className="spark"></div>}
        </div>
      ))}
    </section>
  );
}
