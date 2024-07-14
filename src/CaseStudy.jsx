import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import icon from "./assets/icon.png"
import Projects from './Projects.json';

export const CaseStudy = () => {
    const [manuAction,setmenuAction]=useState(false);
    const addAction=()=>{
      manuAction?setmenuAction(false):setmenuAction(true);
    }
  const homeRef = useRef(null); 
  useEffect(()=>{
  homeRef.current.scrollIntoView({ behavior: 'smooth' });
  },[]);
  const [filtered, setFiltered] = useState([]);
  const [skills,setSkills]=useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');

  useEffect(() => {
    if (id) {
      const filteredProject = Projects.filter((project) => project.id == id);
      setFiltered(filteredProject[0]);
      setSkills(filteredProject[0].tools);
    }
  }, [id]);
  return (
    <>
    <nav>
        <div className="logo">
            <img src={icon} alt="" />
            <p>Umapathi</p>
        </div>
        <div className='innermenu'>
        <ul className='menu'>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/"}>About</Link></li>
            <li><Link to={"/"}>Projects</Link></li>
            <li><Link to={"/"}>Contects</Link></li>
        </ul>
        <i class="fa-solid fa-bars" onClick={addAction}></i>
        </div>
    </nav>
    <ul className={`phone_menu ${manuAction?"active":"disable"}`}>
            <li className="want"><Link to={"/"}>Home</Link></li>
            <li><Link to={"/"}>About</Link></li>
            <li><Link to={"/"}>Projects</Link></li>
            <li><Link to={"/"}>Contects</Link></li>
    </ul>
    <div className="caseStudy_slid1" ref={homeRef}>
        <h1>{filtered.name}</h1>
        <p>This page contains the case study of Boreal Coffee Clone Website which includes the Project Overview, Tools Used and Live Links to the official product.</p>
        <a href={filtered.gitlink} target="_blank">GitHub Link</a>
    </div>
    <div className="caseStudy_slid2">
        <div className="caseStudy_container">
        <img src={filtered.img} alt="" />
        <div className="heading">{filtered.name}</div>
        <p>{filtered.detials}</p>
        <div className="heading">Tools Used</div>
        <ul>
            {skills.map((skill,index)=>(<li key={index}>{skill}</li>))}
        </ul>
        <div className="heading">Get Source</div>
        <div className="buttons">
            <a href={filtered.gitlink} target="_blank" className='nonoutline'>GitHub Link</a>
            <Link className='outline' to={"/"}>Go Back</Link>
        </div>
        </div>
    </div>
    <footer>
        <div className="footer_content">
            <div className="content1">
                <h2>Social</h2>
                <ul>
                    <li><a href="https://www.linkedin.com/in/umapathi2004/" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
                    <li><a href="https://wa.me/917094350136" target="_blank"><i class="fa-brands fa-whatsapp"></i></a></li>
                    <li><a href="https://x.com/umapathi1014" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href="https://github.com/Umapathi2004" target="_blank"><i class="fa-brands fa-github"></i></a></li>
                    <li><a href="https://www.instagram.com/umapathi1014/?igsh=ZGUzMzM3NWJiOQ%3D%3D" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
                </ul>
            </div>
            <div className="content2">
                <h2>Umapathi</h2>
                <p>A Frontend focused Web Developer building the Frontend of Websites and</p>
                <p>Web Applications that leads to the success of the overall product</p>
            </div>
        </div>
        <div className="copyright">© Copyright 2024 . Made by <Link to={"/"}>Umapathi</Link></div>
    </footer>
    </>
  )
}
