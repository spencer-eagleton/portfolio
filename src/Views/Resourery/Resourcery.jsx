import "./Resourcery.css";

export default function Resourcery() {
  return (
    <div className="resourcerycontainer">
      <h1>Resourcery</h1>
      <container className="samplecontainer">
        <div className="resourcerysample"></div>
        <p>
          Resourcery is a mutual-aid web app that enables people to support others directly
          with free resources on a personnal level. Users are able to post
          anything from free food, pet supplies, camping supplies to services
          for those in need. Built with ReactJS, CSS, PostgreSQL and Express.
        </p>
      </container>

      <div className="links">
        <a href="https://resourcery-resourcery.netlify.app/">Deployed Site</a>
        <a href="https://github.com/resourcery-final-project">Github</a>
      </div>
    </div>
  );
}
