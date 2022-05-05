import "./Home.css";
import AboutButton from "../../Components/AboutButton/AboutButton";

export default function Home() {
  return (
    <div className="home">
      <div className="projects">
        <div>
          <h2>resourcery</h2>
        </div>
        <div>
          <h2>friends.map( )</h2>
        </div>
        <div>
          <h2>Yah-Food!</h2>
        </div>
      </div>
      <div className="about-button">
        <AboutButton />
      </div>
    </div>
  );
}
