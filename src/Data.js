import pic1 from './assets/Project_1/Screenshot2.png'
import pic2 from './assets/Project_1/Screenshot3.png'
import pic3 from './assets/Project_1/Screenshot4.png'
import pic4 from './assets/Project_1/Screenshot5.png'
import pic5 from './assets/Project_2/myfbScreenshot-1.png'
import pic6 from './assets/Project_3/WeCodedScreenshot_1.png'
import pic7 from './assets/Project_3/WecodedScreenshot_2.png'


export const Projects = [
    {
        id: 1,
        name: "AmazingCart",
        tech: ["Vite", "Java Servlet"],
        intro: "A functional mockup full stack e-commerce web app",
        desc: ["A fully functional e-commerce web app.", 
            "Technologies Used:", 
            "Frontend: React+Vite, Bootstrap",
            "Backend: Java Servlets.",
            " Database: MySQL",
            "AmazingCart was one of my Capstone projects for my Java Full Stack course. It uses Java Servlets as backend. By implementing CORS in the backend, it can communicate with the React frontend.",
            "It stores the user's cart and orders in mysql database and fetches them when the user wants to view them.",
            "It is an app that can currently only run on localhost. If I host it online in the future, the link will be provided here."
        ],
        LiveLink:null,
        screenshots: [pic1, pic2, pic3, pic4]
    },
    {
        id: 2,
        name: "my-fb",
        tech: ["Vite + React"],
        intro: "A static webpage based on Facebook home page template",
        desc: ["An interactive, static frontend page created to be similar to Facebook page.",
            "Technologies Used:", 
            "Frontend: React+Vite, Bootstrap",
            "It has a tiny special feature, you can add new posts by typing in the post text area and submitting it.",
            "This feature works using React's state management, no database is connected."
        ],
        LiveLink: "https://charles7458.github.io/my-fb/",
        screenshots: [pic5]
    },
    {
        id: 3,
        name: "WeCoded Landing Page",
        tech: ["Vite + React"],
        intro: "A frontend landing page for DEV Wecoded posts",
        desc: ["An interactive, landing page for DEV WeCoded Posts",
            "Technologies Used:", 
            "Frontend: React+Vite",
            "This was my submission For DEV.to 's  Wecoded Challenge.",
            "This page uses only classical css",
            "This feature works using React's state management, no database is connected."
        ],
        LiveLink: "https://charles7458.github.io/wecoded-app/",
        screenshots: [pic6,pic7]
    }

]