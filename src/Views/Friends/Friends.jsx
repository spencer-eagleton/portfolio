import './Friends.css'

export default function Friends() {
  return (
    <div className="friendscontainer">
    <h1>friends.map()</h1>
    <container className="samplecontainer">
      <div className="friendssample"></div>
      <p>
       friends.map() is a convenient travel companion that helps to keep you and your groups safe and organized in unfamiliar places while protecting your privacy.
      </p>
    </container>

    <div className="links">
      <a href="https://friends-dot-map.netlify.app/">Deployed Site</a>
      <a href="https://github.com/friends-dot-map">Github</a>
    </div>
  </div>
  )
}
