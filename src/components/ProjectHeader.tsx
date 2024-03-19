import 'tailwindcss/tailwind.css';

interface ProjectHeaderProps {
    heroImage: string,
    title: string,
    blurb: string,
    month: string,
    year: string
}
const ProjectHeader = (props: ProjectHeaderProps) => {
    return(<div className='flex flex-col m-5'>
        <div className="bg-orange-300 w-full rounded-lg content-center">
            <img src={props.heroImage} className='rounded-lg h-1/2' /> 
        </div>
        <div className='flex flex-col md:flex-row w-full bg-zinc-700 p-2'>
            <div className='bg-red-400 m-2 w-1/2 text-xl'>
                <div className='bg-green-100'>
                    {props.title}
                </div>
            </div>
            <div className='bg-blue-100 w-1/2'>
                <div> {props.month} </div>
                <div> {props.year} </div>
                <div> {props.blurb} </div>
            </div>
        </div>
    </div>)
}

export default ProjectHeader