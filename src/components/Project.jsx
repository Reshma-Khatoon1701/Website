import projectImage from "../assets/project1.jpg"; 

export default function Project() {
  return (
    <section className="project-showcase">
     
      <div className="project-image">
        <img src={projectImage} alt="Project" />
      </div>

     
      <div className="project-info">
        <h1 className="project-title">Project Name</h1>
        <p className="client-name">Client Name</p>
      </div>

      
      <button className="plus-btn">+</button>
    </section>
  );
}