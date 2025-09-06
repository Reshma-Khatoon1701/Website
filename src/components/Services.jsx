import gradientBg from "../assets/backgroundgradient.jpg.jpg";   // background gradient image
import circleDesign from "../assets/circledesign.jpg.svg";   // circular design
import pecaapp from "../assets/PecaApp.png";       // Pecaapp logo

export default function Services() {
  return (
    <section 
      className="services"
      style={{ backgroundImage: `url(${gradientBg})` }}
    >
      <div className="services-container">
        {/* Heading and description */}
        <h2 className="services-title">
          Accomplish<br />Anything in<br />Developing
        </h2>
        <p className="services-text">
          This is the space to introduce the Services section. Briefly describe 
          the types of services offered and highlight any special benefits or features.
        </p>

        {/* Center circle with left & right text */}
        <div className="services-center">
          {/* Left features */}
          <div className="features left">
            <p>Sample Text</p>
            <p>Sample Text</p>
            <p>Sample Text</p>
          </div>

          {/* Circle stack */}
          <div className="circle-stack">
            <img src={circleDesign} alt="Circle Design" className="circle-design" />
            <img src={pecaapp} alt="PecaApp Logo" className="circle-inner" />
          </div>

          {/* Right features */}
          <div className="features right">
            <p>Sample Text</p>
            <p>Sample Text</p>
            <p>Sample Text</p>
          </div>
        </div>

        {/* Button */}
        <button className="create-btn">Create Now</button>
      </div>
    </section>
  );
}
