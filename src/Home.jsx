import pfp from './assets/pfp.jpg'
import mysqlLogo from './assets/mySQL-logo.png'
import { useState, useEffect, useRef } from 'react'
import {useNavigate} from 'react-router-dom'
import './styles/home.css'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Projects } from './Data';
import Header from './components/Header'

//component for snowing simulation
function Snowing(){
    const pos = ['10%', '31%', '76%', '26%', '85%', '48%', '55%','91%', '98%', '15%', '35%', '60%', '12%', '80%', '67%', '41%']

    const [active,setActive] = useState([]);
    useEffect(()=>{
        pos.forEach( (pos, i) =>{
            setTimeout(()=>{
            setActive(prev => [...prev, pos])
            }, i *3000)
        })
    },[])

    return(
        <>
            {
                active.map((snow)=>{
                        return <div key={snow} id={snow} className='snow z-20 absolute cursor-pointer' style={{top:'60px', left:snow}}></div>
                })
            }
        </>        
    )
}


//Stack component
function Stack({name, color, logo}) {
    return(
        <div className='stack-div outline' style={{color:color, outlineColor:color}}>
            <p className='text-sm md:text-md lg:text-xl font-bold'>{name}</p>
            <span className='mb-1 ms-2 hidden md:block'>
                <box-icon name={logo} type='logo' color={color} size='md'></box-icon>
            </span>
            <span className='mb-1 ms-2 md:hidden'> {/* small icon for small screen */}
                <box-icon name={logo} type='logo' color={color} size='sm'></box-icon>
            </span>
        </div>
    )
}

//Stack div component
function StackDiv({title, children}){
    return(
        <div className=' group grid grid-cols-[25%_1fr] py-10 align-middle items-center px-5 border-b border-b-white w-full hover:bg-gradient-to-r'>
            <div>
                <h4 className='text-md lg:text-2xl me-6 font-semibold group-hover:text-emerald-500'>{title}</h4>
            </div>
            <div className='flex flex-wrap gap-y-5'>
                {children}
            </div>
        </div>
    )
}

function BackToTop({homeRef}){

    return(
        <button onClick={()=>homeRef.current?.scrollIntoView({behavior:"smooth"})} className='bg-white rounded-full px-3.5 pt-3 pb-2 fixed bottom-10 right-9'>
            <box-icon name='up-arrow-alt'></box-icon>
        </button>
    )
}

//Project component
function Project({id, name, img, intro, tech, nav}){

    return(        
        <div className='group shrink-0 rounded-xl bg-gray-500 py-6 max-w-[60vw] lg:max-w-fit px-5 ms-32 
        lg:ms-0 lg:me-20 overflow-hidden cursor-default snap-start' 
          onClick={()=>nav(`/project/${id}`)}  >
            <a className='mx-auto flex mb-5 w-fit' href={img} onClick={e=>e.stopPropagation()}><img src={img} className='rounded-md h-24 ' /></a>
            <h4 className='font-bold text-center group-hover:underline'>{name}</h4>
            <p className='my-3 text-center'>{intro}</p>
            <div className='flex justify-center items-center'>
                {tech.map(techno=>{
                    return<div className='py-1 px-3 bg-gradient-to-br from-blue-400 to-green-300 rounded-full me-5'>
                            <p className='text-xs inline text-nowrap'>{techno}</p>
                        </div>
                })}
            </div>
            
        </div>        
    )
}


// The Home Page
export default function Home(){
    const home = useRef(null);
    const contact = useRef(null);
    const about = useRef(null);
    const project = useRef(null);

    const frontend = [ 
        {name: 'HTML', color:'#0284c7', logo:'html5'},
        {name: 'CSS', color:'#fb923c', logo:'css3'},
        {name: 'JavaScript', color:'#facc15', logo:'javascript'},
        {name: 'Bootstrap', color:'#7e22ce', logo:'bootstrap'},
        {name: 'Tailwind', color:'#0ea5e9', logo:'tailwind-css'},
    ]

    const [showSnow, setShowSnow] = useState(false)
    const navigate = useNavigate();
    const yy =0
    const [yPos,setYPos] = useState(0)
    window.addEventListener('scroll',()=>(setYPos(window.scrollY)))

    //functions to slide project gallery
    function slideLeft(){
        const gallery = document.getElementById("project-gallery");
        gallery.scrollLeft-=200;
    }

    function slideRight(){
        const gallery = document.getElementById("project-gallery");
        gallery.scrollLeft+=200;
    }

    const focusHead =()=> {
        const heading = home.current;
        heading.scrollIntoView();
    }

    function focusComp(ref){
        const newRef = ref.current;
        newRef.scrollIntoView();
    }

    useEffect(()=>{focusHead()},[])
    return(
        <div className="bg-black pt-20 text-white h-full overflow-y-hidden">
            {/* snow*/}
            {showSnow &&
                <Snowing/>
            }  
               <Header focus={focusComp} aboutRef={about} contactRef={contact} projectRef={project} />
               {yPos>350 && <BackToTop homeRef={home}/> }
               <div data-aos='fade-down' data-aos-duration='1000' className="px-10 mt-20" >                        
                        <h1 ref={home} className="text-gray-100 text-4xl lg:ms-10 font-semibold scroll-mt-20">Hello!</h1>
                        <p className="text-gray-300 w-[90vw] lg:text-2xl lg:w-[70vw] mt-5  lg:ps-10 font-serif text-pretty">
                        I am a Java Full Stack Developer.
                        I create, responsive and interactive user experiences using React. And build backend using Spring Boot or Java Servlets.
                        I have worked on few projects and keep working to improve my experience and knowledge in web app development. 
                        I am always eager to solve challenges and keep track of latest technologies.
                        </p>        
                    <button onClick={()=>setShowSnow(!showSnow)} className='mt-5 lg:ms-10 px-5 py-2 rounded-xl  bg-white text-black font-bold hover:ring hover:ring-rose-600'>
                        {showSnow ? "Stop the Snow":"Make it Snow"}
                    </button>            
               </div>

               <div className='mt-[600px] lg:px-20 px-5 mb-20'>
                    <h2 ref={about} className='scroll-mt-20 w-fit text-3xl font-semi-bold font-mono hover:text-emerald-500 mb-8'>
                        About
                    </h2>
                    <h2 data-aos='fade-right' data-aos-duration='1000'  className=' w-fit text-lg lg:text-2xl mb-10 font-bold stack-head'>
                        My Tech Stack
                    </h2>

                    <div data-aos='fade-right' data-aos-duration='1500' className='justify-self-center border border-white w-full'>
                        <StackDiv title="FRONTEND">
                            {frontend.map( (stack)=>{
                                return <Stack name={stack.name} logo={stack.logo} color={stack.color}/>
                            })}
                        </StackDiv>
                        <StackDiv title="BACKEND">
                        <div className='group flex w-fit mx-3 pt-5 px-7 justify-center text-amber-800 hover:bg-white outline outline-amber-800 rounded-md cursor-pointer'>
                            <p className='text-md lg:text-xl font-bold'>JAVA</p>
                            <span className='ms-2 relative bottom-4 hidden md:block'>
                                <box-icon name='java' type='logo' color="#92400e" size='lg'></box-icon>
                            </span>
                            <span className='ms-2 relative bottom-2 md:hidden'>
                                <box-icon name='java' type='logo' color="#92400e" size='md'></box-icon>
                            </span>
                        </div>

                        <div className='group flex w-fit mx-3 px-5 py-3 lg: justify-center items-center text-emerald-600 hover:bg-white outline outline-emerald-600 rounded-md cursor-pointer'>
                            <p className='text-md lg:text-xl font-bold'>Spring Boot</p>
                            <span className='ms-2 relative top-1 hidden md:block'>
                                <box-icon name='power-off' type='logo' color="#059669" size='md'></box-icon>
                            </span>
                            <span className='ms-2 relative top-1 md:hidden'>
                                <box-icon name='power-off' type='logo' color="#059669" size='sm'></box-icon>
                            </span>
                        </div>
                        </StackDiv>

                        <StackDiv title="DATABASE">
                            <div className='stack-div justify-center outline-gray-500'>
                                <img className='w-24' src={mysqlLogo}/>
                            </div>
                        </StackDiv>
                    </div>
                    {/* Projects */}
                    <div className='mt-20'>
                            <h2 ref={project} className='scroll-mt-20 w-fit font-bold text-xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-red-500'>
                                Projects
                            </h2>
                            <div className='flex overflow-hidden my-10 items-center align-middle'>
                                <button className='font-bold text-2xl mx-5' onClick={()=> {slideLeft();}}>
                                    &lt;</button>{/*slide button*/}
                                <div className='flex w-full overflow-x-scroll scroll-smooth scroll-hidden mx-auto items-center 
                                align-middle snap-x snap-mandatory' id='project-gallery'>
                                    {Projects.map(project=>{
                                        return <Project id={project.id} name={project.name} intro={project.intro} tech={project.tech} img={project.screenshots[0]} nav={navigate}/>
                                    })} <p className='ms-10 lg:ms-0 snap-start'>more to come...</p>
                                </div>
                                <button className='font-bold text-2xl mx-5' onClick={slideRight}>&gt;</button>{/*slide button*/}
                                
                            </div>
                    </div>
                    <div className='mt-20'>
                        <h2 data-aos='fade-down' className='text-3xl font-bold underline underline-offset-8 w-fit journey-head mb-10'>My Journey</h2>
                        <Timeline data-aos='fade-down'>
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <p>Nov 2024 - May 2025</p>
                                    <p><b>Master in Java Full Stack Program</b></p>
                                    <p>FITA, Puducherry</p>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <p>Aug 2021 - Apr 2024</p>
                                    <p><b>B.Sc. Chemistry</b></p>
                                    <p>Madras Christian College, Chennai</p>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </div>
               </div>
            
            <div className='px-10 mb-20'>
                <h1 ref={contact} className='text-2xl lg:text-3xl font-bold font-mono scroll-mt-20 mb-5 w-fit bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-sky-400'>
                Contact Details
               </h1>
               <div className='bg-gray-400 w-[90%] justify-self-center rounded-lg lg:p-10 p-6'>
                    <img src={pfp}  height='40px' className='rounded-full shrink-0 w-24 h-24 lg:w-40 lg:h-40'/>
                    <h3 className='w-fit text-lg lg:text-3xl my-8 bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-pink-300'>Charles Luis | Java Full Stack Developer</h3>
                    <p className='text-lg'><i class="fa-solid fa-envelope me-3 sky"></i><b>Email:</b> c.charles8547@gmail.com</p>
                    <p className='text-lg my-5'><i class="fa-solid fa-pen fa-xs me-3"></i><b>Social links</b></p>
                    <ul className='flex list-none'>
                        <li className='me-8'><a href='https://github.com/Charles7458' target='_blank'><i className='fa-brands fa-square-github fa-2xl'></i></a></li>
                        <li className='me-8'>
                            <a href='https://www.linkedin.com/in/charles-luis-760552284/' target='_blank'>
                            <i className='fa-brands fa-linkedin fa-2xl'></i>
                            </a>
                        </li>
                    </ul>
               </div>
            </div>
               

               <footer className='bg-slate-700 py-4 w-full'>
                    <p className='text-center text-lg w-[60vw] mx-auto'>
                        Charles@2025<br/> All Rights Reserved.
                    </p>
               </footer>
        </div>
    )
}