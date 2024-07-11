import React from 'react'
import Projects from "./Projects.json"
export const Home = () => {
  const skills=['HTML','CSS','JavaScript','PHP','MySQL','RDBMS','React','Bootstrap','Git','GitHub','Responsive Design','API']
  console.log(Projects);
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
            <a href="https://www.linkedin.com/in/umapathi2004/"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/Umapathi2004"><i class="fa-brands fa-github"></i></a>
            <a href=""><i class="fa-brands fa-instagram"></i></a>
            <a href=""><i class="fa-brands fa-twitter"></i></a>
            <a href=""><i class="fa-brands fa-whatsapp"></i></a>
        </div>
        <div className="intro">
            <h1>Hey, I'm Umapathi</h1>
            <p>Skilled web developer with expertise in building responsive and user-friendly web applications,<br/> ensuring optimal results.</p>
            <button>Projects</button>
        </div>
    </div>
    <div className="slidtwo">
        <div className="heading">
            <h2>About me</h2>
            <div className="userdefined_line"></div>
        </div>
        <span>Here you will find more information about me, what I do, and my current skills mostly in terms<br/> of programming and technology</span>
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
        <span>Here you will find some of the personal and clients projects that I created with each project<br/> containing its own case study</span>
        <div className="container">{
                Projects.map((project)=>(
                   <div className="projects" key={project.id}>
                   <img src={project.img} alt=""/>
                   <div className="projects_detials">
                       <div className="heading">{project.name}</div>
                       <div className="para">{project.discription}</div>
                       <button>Case Study</button>
                   </div>
                   </div>
                ))}
        </div>
    </div>
    </>
  )
}
