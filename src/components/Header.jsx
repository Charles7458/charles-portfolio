import resume from '../assets/Charles_WebDev_CV.pdf';
import '../styles/home.css'

//navitem component
function NavItem({ref, children, focus}){
    return(
        <li className="group lg:text-lg text-md lg:mx-5 mx-2">
            <p className='group-hover:text-white text-gray-300 cursor-pointer' onClick={()=>focus(ref)}>{children}</p>
            <div className='h-0.5 w-0 group-hover:line bg-gradient-to-r from-emerald-700 to-blue-500 delay-100'></div>
        </li>
    )
}


export default function Header({aboutRef, contactRef, projectRef, focus}){
    return(
        <div className="flex items-center align-middle px-5 py-2 text-white justify-between fixed top-0 bg-slate-900/15 backdrop-blur shadow-gray-700 shadow-md w-full z-20">
            <h1 className="lg:text-2xl md:text-lg  font-mono bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-sky-400">Charles Luis</h1>
            <ul className="flex list-none font-serif text-xs md:text-sm">
                <NavItem ref={aboutRef} focus={focus}>About</NavItem>
                <NavItem ref={projectRef} focus={focus}>Projects</NavItem>
                <li className="group lg:text-lg text-md lg:mx-5 mx-2 ">
                    <a className='text-gray-300 hover:text-white' href={resume}>Resume</a>
                    <div className='h-0.5 w-0 group-hover:line bg-gradient-to-r from-emerald-700 to-blue-500 delay-100'></div>
                </li>
                <NavItem ref={contactRef} focus={focus}>Contact</NavItem>
            
            </ul>
        </div>
    )
}
