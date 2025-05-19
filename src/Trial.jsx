import pfp from './assets/pfp.jpg'
import mysqlLogo from './assets/mySQL-logo.png'
import { useState, useEffect } from 'react'
import './styles/trial.css'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

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

function NavItem({link, children}){
    return(
        <li className="lg:text-lg text-md lg:mx-5 mx-2 text-gray-300 hover:text-white"><a href={link}>{children}</a></li>
    )
}


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

export default function Trial(){
    
    const frontend = [ 
        {name: 'HTML', color:'#0284c7', logo:'html5'},
        {name: 'CSS', color:'#fb923c', logo:'css3'},
        {name: 'JavaScript', color:'#facc15', logo:'javascript'},
        {name: 'Bootstrap', color:'#7e22ce', logo:'bootstrap'},
        {name: 'Tailwind', color:'#0ea5e9', logo:'tailwind-css'},
    ]
    const colors = {
        color1 : "sky-600",
    }
    const [showSnow, setShowSnow] = useState(false)

    return(
        <div className="bg-black pt-20 text-white h-full">
            {showSnow &&
                <Snowing/>
            }  
                {/* snow*/}
               <div className="flex align-middle px-5 py-2 text-white justify-between fixed top-0 bg-slate-900/15 backdrop-blur shadow-gray-700 shadow-md w-full z-20">
                    <h1 className="lg:text-2xl text-lg font-mono bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-sky-400">Charles Luis</h1>
                    <ul className="flex list-none font-serif ">
                        <NavItem link='#home'>Home</NavItem>
                        <NavItem link='#about'>About</NavItem>
                        <NavItem link='#resume'>Resume</NavItem>
                        <NavItem link='#contact'>Contact</NavItem>
                    
                    </ul>
               </div>
               <div className="px-10" >                        
                        <h1 className="text-gray-100 text-2xl ms-5 font-semibold scroll-mt-20" id="home">Hello!</h1>
                        <p className="text-gray-300 text-xl w-[90vw] mt-5 ps-10 font-serif text-pretty">I am Charles Luis.
                        I am a Java Full Stack Developer.
                        I can create, responsive and interactive user experiences using React. And build backend using Spring Boot and Java Servlets.
                        </p>        
                    <button onClick={()=>setShowSnow(!showSnow)} className='mt-5 ms-10 px-5 py-2 rounded-xl  bg-white text-black font-bold hover:ring hover:ring-rose-600'>
                        {showSnow ? "Stop the Snow":"Make it Snow"}
                    </button>            
               </div>

               <div className='mt-60 lg:px-20 px-5 mb-20'>
                    <h2 id='about' className='scroll-mt-20 w-fit text-3xl font-semi-bold font-mono hover:text-emerald-500 mb-16'>
                        <a href='#about'>About</a>
                    </h2>
                    <h2  className=' w-fit text-lg lg:text-2xl mb-10 font-bold stack-head'>
                        My Tech Stack
                    </h2>

                    <div className='justify-self-center border border-white w-full'>
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
                        </StackDiv>

                        <StackDiv title="DATABASE">
                            <div className='stack-div justify-center outline-gray-500'>
                                <img className='w-24' src={mysqlLogo}/>
                            </div>
                        </StackDiv>
                    </div>
                    <div className='mt-20'>
                            <h2 className='w-fit font-bold text-xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-red-500'>Projects</h2>
                            <div className='flex'>

                            </div>
                    </div>
                    <div className='mt-20'>
                        <h2 className='text-3xl font-bold underline underline-offset-8 w-fit journey-head mb-10'>My Journey</h2>
                        <Timeline>
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
                <h1 id='contact' className='text-2xl lg:text-3xl font-bold font-mono scroll-mt-20 mb-5 w-fit bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-sky-400'>
                Contact Details
               </h1>
               <div className='bg-gray-400 w-[90%] justify-self-center rounded-lg lg:p-10 p-6'>
                    <img src={pfp}  height='40px' className='rounded-full shrink-0 w-24 h-24 lg:w-40 lg:h-40'/>
                    <h3 className='text-lg lg:text-3xl my-8 bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-pink-300'>Charles Luis | Java Full Stack Developer</h3>
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