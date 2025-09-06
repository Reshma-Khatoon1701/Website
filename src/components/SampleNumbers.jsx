export default function SampleNumbers() {
  const row1 = [59, 73, 89, 102, 65, 77];
  const row2 = [71, 81, 91, 101, 78, 85];

  return (
    <section className="sample-numbers">
      <h2 className="row-title">Sample Numbers <br /> Row No. 1</h2>
      <div className="scroll-container">
        {row1.map((num, i) => (
          <div key={i} className="number-box">
            <h3 className="number">{num}</h3>
            <p className="unit">Unit</p>
          </div>
        ))}
      </div>

      <h2 className="row-title">Sample Numbers <br /> Row No. 2</h2>
      <div className="scroll-container">
        {row2.map((num, i) => (
          <div key={i} className="number-box">
            <h3 className="number">{num}</h3>
            <p className="unit">Unit</p>
          </div>
        ))}
      </div>
    </section>
  );
}

