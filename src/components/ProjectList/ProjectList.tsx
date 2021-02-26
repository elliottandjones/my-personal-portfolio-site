import "./ProjectList.css";

export default function ProjectList() {
  // const [expanded, setExpanded] = useState(false);
  // const handleToggle = () => {
  //   setExpanded(!expanded);
  // }
  return (
    <div id="project-list" className="project-list">
      <ul id="projects-list">
        <li className="tetris">
          <a className="grow" href="https://agitated-hoover-67ed9a.netlify.com" title="It's Tetris. You know--Tetris.">
            <p>Tetris</p>
          </a>
        </li>
        <li className="conjuring">
          <a className="grow" href="https://conjuring-2b5a2.firebaseapp.com" title="Conjuring: a D&D 5e reference web app!">
            <p>Conjuring</p>
            {/* <p style={{fontSize: "0.6em", textTransform: "none"}}>(a D&D 5e Reference App)</p> */}
          </a>
        </li>
        <li className="space">
          <a className="grow" href="https://relaxed-bassi-0a0166.netlify.com" title="Cruise around in space.">
            <p>Go to Space</p>
          </a>
        </li>
      </ul>
    </div>
  );
}
//<button
//aria - expanded={ expanded }
// aria - controls="menu-list"
// onClick = { handleToggle } >
//<Burger expanded={expanded} />
//  </button >
//<div id="bar1" className={!expanded ? 'close' : 'open'}></div>
//<div id="bar2" className={!expanded ? 'close' : 'open'}></div>
//<div id="bar3" className={!expanded ? 'close' : 'open'}></div>
