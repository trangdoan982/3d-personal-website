import 'tailwindcss/tailwind.css';

import NavBar from "@/components/NavBar"
import ProjectHeader from "@/components/ProjectHeader"

const Projects = () => {
  return (<div>
    <NavBar />
    <ProjectHeader 
      heroImage="/sun.jpeg"
      title="Fake project"
      blurb="whatever you say is true"
      month="June"
      year="2023"
    >

    </ProjectHeader>
    </div>)
}

export default Projects
