export const projectsData = [
    {
        id: 1,
        image: 'https://res.cloudinary.com/dnkqy2kkr/image/upload/v1741369497/img4_eti2mi.png',
        title: "Forecast Flow",
        fullTitle: 'Forecast Flow: Rainfall predicton model',
        description: 'ForecastFlow is a machine learning-based system designed to predict rainfall based on historical weather data. It utilizes data analysis and machine learning techniques to analyze various factors influencing rainfall and predict whether it will rain tomorrow.',
        tech: 'Python, Machine Learning, Scikit-learn, pandas, matplotlib, tkinter',
        category: "ML/DS",
        link: 'https://github.com/alsaim7/ForecastFlow.git'
    },
    {
        id: 2,
        image: 'https://res.cloudinary.com/dnkqy2kkr/image/upload/v1741370384/img5_a1iamq.png',
        title: "ShigotoZen: To-do list",
        fullTitle: 'ShigotoZen: A Simple and Efficient To-Do List App',
        description: 'ShigotoZen: A Simple and Efficient To-Do List App built with React and Material UI, featuring local storage for task persistence and a clean, responsive UI. This project demonstrates modern front-end development practices and provides a straightforward way to manage tasks.',
        tech: 'React Js, Material UI',
        category: "Web",
        link: 'https://shigotozen.netlify.app/'
    },
    {
        id: 3,
        image: 'https://res.cloudinary.com/dnkqy2kkr/image/upload/v1741369118/img3_py3fmm.png',
        title: "AlertSphere",
        fullTitle: 'AlertSphere: Disaster Tweet Detector',
        description: 'AlertSphere is a machine learning-based system designed to predict whether a given tweet indicates a disaster. It utilizes natural language processing (NLP) techniques to analyze the text content of tweets and classify them as either disaster-related or not.',
        tech: 'Python, NLP, Machine Learning, Scikit-learn, pandas, matplotlib, tkinter',
        category: "ML/DS",
        link: 'https://github.com/alsaim7/AlertSphere.git'
    },
    {
        id: 4,
        image: 'https://res.cloudinary.com/dnkqy2kkr/image/upload/v1741366600/img2_ek9fyt.png',
        title: 'AS-Camp',
        fullTitle: 'AS-Camp: A Full-Stack Campground Exploration and Sharing Platform',
        description: 'AS-Camp is a full-stack web application for discovering, sharing, and reviewing campgrounds. Users can post their own campsites, explore detailed locations, and leave comments. Built with Node.js, Express.js, MongoDB, and Map APIs, it features a responsive design and secure authentication.',
        tech: "Express.js, MongoDB, Mongoose, Passport.js, Cloudinary, MapTiler, EJS, Joi, Express-Session, Helmet.",
        category: "Web",
        link: 'https://github.com/alsaim7/AS-Camp.git'
    },
    {
        id: 5,
        image: 'https://res.cloudinary.com/dnkqy2kkr/image/upload/v1741365683/img1_wgxfiz.png',
        title: "Prime Tutors",
        fullTitle: 'Prime Tutors',
        description: 'Prime Tutors is a fully responsive static website designed with smooth animations for an engaging user experience. The site features a contact form that seamlessly integrates with a spreadsheet, automatically updating submitted data while also sending email notifications. This ensures efficient communication and data management. Developed as a freelance project, Prime Tutors showcases a clean, modern design with optimized performance.',
        tech: 'React Js, Gsap for animations, Bootstrap.',
        category: "Web",
        link: 'https://primetutors.netlify.app/'
    },
    {
        id: 6,
        image: 'https://res.cloudinary.com/dnkqy2kkr/image/upload/v1744989732/logo_mytello_uwqwkx.png',
        title: "MyTello",

        fullTitle: 'A full-stack storytelling platform for sharing and discovering user-generated stories',
        description: `MyTello is a full-stack web application where users can register, authenticate, and share original stories with a global audience. Inspired by platforms like Reddit and Medium, it features a clean, responsive interface built with React.

The backend is powered by FastAPI and PostgreSQL for efficient and scalable data management. The app supports JWT-based user authentication, protected routes, and full CRUD operations for stories. While the current version focuses on story creation and browsing, its modular architecture allows for easy expansion with features like commenting and reactions.

It includes robust form validation, error handling, and carefully configured CORS for seamless frontend-backend communication. The frontend is deployed on Netlify, and the backend is hosted on Railway for reliable performance and accessibility.`,

        tech: 'React, Tailwind CSS, React Router, Axios, FastAPI, PostgreSQL, SQLAlchemy, Pydantic, JWT Auth, CORS, Railway, Netlify.',
        category: "Web",
        link: 'https://mytello.netlify.app/'
    },
];


export const projectsNav = [
    {
        name: 'All'
    },
    {
        name: 'Web'
    },
    {
        name: 'ML/DS'
    },
]