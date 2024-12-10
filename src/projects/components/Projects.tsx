import { Link } from "react-router-dom";

import "../assets/projects.css";

export default function Projects() {
  return (
    <section className="projects">
      {/* <h1>Projects</h1>
      <p>Here are some of the projects I've worked on:</p> */}
      <div>
        <div className="projects-display">
          <Link to="/project/project1" className="project">
            <div className="project-content">
              <h2>Shape Editing Web App</h2>
              <img src="src/projects/assets/a3-screencap.png" alt="Project 1" />
              <div className="project-technologies">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
              </div>
            </div>
          </Link>
          <Link to="/project/project2" className="project">
            <div className="project-content">
              <h2>VHDL Simple Compiler</h2>
              <img src="src/projects/assets/compiler" alt="Project 2" />
              <div className="project-technologies">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
              </div>
            </div>
          </Link>
          <Link to="/project/project3" className="project">
            <div className="project-content">
              <h2>Oktopus API</h2>
              <img src="src/projects/assets/oktopus" alt="Project 3" />
              <div className="project-technologies">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
                <svg viewBox="0 0 128 128" id="express">
                  <path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"></path>
                </svg>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" />
              </div>
            </div>
          </Link>
          <Link to="/project/project4" className="project">
            <div className="project-content">
              <h2>Coming Soon...</h2>
              {/* <img src="src/projects/assets/project4" alt="Project 4" /> */}
              <div className="project-technologies"></div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
