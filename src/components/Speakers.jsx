import harry from "../assets/harry.jpg";
import veronika from "../assets/veronika.jpg";
import lissa from "../assets/lissa.jpg";
import sheldon from "../assets/sheldon.jpg";
import ann from "../assets/ann.jpg";
import akira from "../assets/akira.jpg";
import murty from "../assets/murty.jpg";
import jason from "../assets/jason.jpg";

export default function Speakers() {
  const speakers = [
    { img: harry, name: "Harry Williams", role: "Director of Mobile Gaming, Fixer" },
    { img: veronika, name: "Veronika Zakharova", role: "Director of Mobile Gaming, Fixer" },
    { img: lissa, name: "Lissa Cross", role: "Director of Mobile Gaming, Fixer" },
    { img: sheldon, name: "Sheldon Smith", role: "Director of Mobile Gaming, Fixer" },
    { img: ann, name: "Ann Jacobs", role: "Director of Mobile Gaming, Fixer" },
    { img: akira, name: "Akira Lee", role: "Director of Mobile Gaming, Fixer" },
    { img: murty, name: "Murty Yang", role: "Director of Mobile Gaming, Fixer" },
    { img: jason, name: "Jason Guhl", role: "Director of Mobile Gaming, Fixer" },
  ];

  return (
    <section className="speakers">
      <h2 className="speakers-title">Speakers</h2>
      <div className="speakers-list">
        {speakers.map((spk, i) => (
          <div key={i} className="speaker-row">
            <div className="speaker-info">
              <img src={spk.img} alt={spk.name} className="speaker-img" />
              <div>
                <h3 className="speaker-name">{spk.name}</h3>
                <p className="speaker-role">{spk.role}</p>
              </div>
            </div>
            <button className="linkedin-btn">LinkedIn</button>
          </div>
        ))}
      </div>
    </section>
  );
}
