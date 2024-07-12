import React from 'react'
import Projects from "./Projects.json"
import { Link } from 'react-router-dom'
export const Home = () => {
  const skills=['HTML','CSS','JavaScript','PHP','MySQL','RDBMS','React','Bootstrap','Git','GitHub','Responsive Design','APIs']
  return (
    <>
    <nav>
        <div className="logo">
            <img src="" alt="" />
            <p>Umapathi</p>
        </div>
        <ul className='menu'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contects</li>
        </ul>
    </nav>
    <div className="slidone">
        <div className="socialmedias">
            <a href="https://www.linkedin.com/in/umapathi2004/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/Umapathi2004" target="_blank"><i class="fa-brands fa-github"></i></a>
            <a href="https://www.instagram.com/umapathi1014/?igsh=ZGUzMzM3NWJiOQ%3D%3D" target="_blank"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://x.com/umapathi1014" target="_blank"><i class="fa-brands fa-twitter"></i></a>
            <a href="https://wa.me/917094350136" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
        </div>
        <div className="intro">
            <h1>Hey, I'm Umapathi</h1>
            <p>Skilled web developer with expertise in building responsive and user-friendly web applications, ensuring optimal results.</p>
            <button>Projects</button>
        </div>
    </div>
    <div className="slidtwo">
        <div className="heading">
            <h2>About me</h2>
            <div className="userdefined_line"></div>
        </div>
        <span>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</span>
        <div className="me-skill">
            <div className="known_me">
                <div className="heading">Get to know me!</div>
                <div className="content">
                <p>I'm a <b>Frontend Focused Web Developer</b> building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <b>Projects</b> section.</p>

                <p>I also like sharing content related to the stuff that I have learned over the years in <b>Web Development</b> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a href="">Linkedin</a> and <a href="">Instagram</a> where I post useful content related to Web Development and Programming</p>

                <p>I'm open to <b>Job</b> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <b>contact</b> me.</p>
                </div>
                <button>Contact</button>
            </div>
            <div className="skills">
            <div className="heading">My Skills</div>
                <ul>
                    {skills.map((skill,index)=>(<li key={index}>{skill}</li>))}
                </ul>
            </div>
        </div>
    </div>
    <div className="slidthree">
        <div className="heading">
            <h2>PROJECTS</h2>
            <div className="userdefined_line"></div>
        </div>
        <span>Here you will find some of the personal and clients projects that I created with each project containing its own case study</span>
        <div className="container">{
                Projects.map((project)=>(
                   <div className="projects" key={project.id}>
                   <img src={project.img} alt=""/>
                   <div className="projects_detials">
                       <div className="heading">{project.name}</div>
                       <div className="para">{project.discription}</div>
                       <Link to={`/CaseStudy?id=${project.id}`}>
                       Case Study
                       </Link>
                   </div>
                   </div>
                ))}
        </div>
    </div>
    <div className="slidfour">
        <div className="heading">
            <h2>CONTACT</h2>
            <div className="userdefined_line"></div>
        </div>
        <span>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</span>
        <form className='messageForm'>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder='Enter Your Name' required id='name'/>
            <label htmlFor="mail">Email</label>
            <input type="email" placeholder='Enter Your Email' required id='mail'/>
            <label htmlFor="message">Message</label>
            <textarea placeholder='Enter Your Message' required id='message'></textarea>
            <button>Submit</button>
        </form>
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
