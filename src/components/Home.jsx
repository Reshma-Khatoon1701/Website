import banner1 from "../assets/banner1.jpg";

export default function Home() {
    return (
        <section
        id="home"
        className="home"
        style={{
            backgroundImage: `url(${banner1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }} >
            <div className="home-content">
                <h1 className="home-title">
                    I am a Sample <br /> Website 
                </h1>
                <p className="home-text"> I'm a sample <br /> Website, Create me<br /> as same as I am, <br />
                Don't Do any <br /> Mistakes.
                </p>
                <button className="home-btn">
                    Get Started
                </button>
            </div>
        </section>
    );
}