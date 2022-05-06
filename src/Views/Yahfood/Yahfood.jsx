import './Yahfood.css'

export default function Yahfood() {
  return (
    <div className="yahfoodcontainer">
      <h1>Yahfood</h1>
      <container className="samplecontainer">
        <div className="yahfoodsample"></div>
        <p>
          Yah-Food is a fun, simple, and creative app that helps the user
          discover new foods based on the ingredients they already have. It
          offers a small featured recipe section, ability to favorite certain
          recipes, and create your own recipes. This App is suited for mobile
          use.
        </p>
      </container>

      <div className="links">
        <a href="https://hopeful-curie-14d366.netlify.app/">Deployed Site</a>
        <a href="https://github.com/Yah-food">Github</a>
      </div>
    </div>
  );
}
