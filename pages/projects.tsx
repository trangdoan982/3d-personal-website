import 'tailwindcss/tailwind.css';
import NavBar from "@/components/NavBar"


const Projects = () => {
  return (<div>
     <NavBar />
     <div className='flex flex-col m-5'>
        <div className='w-full rounded-lg m-10 content-center' >
          <img className='rounded-lg h-1/2' src='/heroMainProject.png' />
        </div>
        <div style={{marginTop: "20px"}}>
         Some call this Jack-of-all-trade. I call this a Renaissance woman in the making.
        </div>  
      </div>
    </div>)
}

export default Projects
