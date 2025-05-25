import {useEffect, useRef} from 'react';

import { useNavigate, useParams } from "react-router-dom";
import { Projects } from "./Data";

export default function ProjectPage(){

    const head = useRef(null);
    const params = useParams();
    const id = params.id;
    const nav = useNavigate();
    const project = Projects[id-1];

    const focusHead =()=> {
        const heading = head.current;
        heading.scrollIntoView()
    }
    useEffect(()=>{focusHead()})

    return(
        <div className="pt-14 bg-black min-h-[100vh] text-white">
            {/* header */}
            <div className="flex items-center align-middle px-5 py-2 text-white justify-between fixed top-0 bg-slate-900/15 backdrop-blur shadow-gray-700 shadow-md w-full z-20">
                <h1 className="lg:text-2xl md:text-lg  font-mono bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-sky-400">Charles Luis</h1>
                <ul className="flex list-none font-serif text-xs md:text-sm">
                    <li className="lg:text-lg text-md lg:mx-5 mx-2 text-gray-300 hover:text-white cursor-pointer" onClick={()=>nav("/")}>Back To Home</li>
                </ul>
            </div>
            <div className="w-[85vw] mx-auto">
                <h1 ref={head} className="font-bold font-mono w-fit mt-20 mb-10 text-3xl bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-400 hover:text-transparent scroll-m-20">
                    {project.name}
                </h1>
                <img src={project.screenshots[0]} className="w-[80vw] md:w-[60vw] lg:w-[50vw] rounded-xl mx-auto mb-20"/>

                <div className="font-sans li text-lg">{project.desc.map(line=><p>{line}</p>)}</div>

                {project.LiveLink!==null &&
                    <p className='mt-10'>Link to the Live Page: <a href={project.LiveLink} target='_blank' className='italic text-blue-500 hover:underline'>Live Page</a></p>
                }
                <h2 className="mt-40 mb-24 text-2xl font-semibold">Screenshots</h2>
                <div className="flex flex-wrap gap-x-5 gap-y-5">
                    {project.screenshots.map(pic=>{
                        return <a href={pic}><img src={pic} className="lg:w-[35vw] w-[80vw] mb-10 border-2 border-white" /></a>
                    })}
                </div>
            </div>
            
        </div>
    )
}