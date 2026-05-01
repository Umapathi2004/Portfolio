import React, { useRef, useState, useEffect } from 'react'
import { Toaster, toast } from 'sonner';
import Projects from "./Projects.json"
import { Link } from 'react-router-dom'
import icon from "./assets/icon.png"
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from './App';
export const Home = () => {
  const { dark, setDark } = useTheme();
  const [manuAction, setmenuAction] = useState(false);
  const addAction = () => {
    manuAction ? setmenuAction(false) : setmenuAction(true);
  }
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false); // State to track form submission status
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      setTimeout(() => {
        
      }, 1000);
      // Example of handling form submission (replace with your own logic)
      console.log(formData);

      // Simulate asynchronous operation (e.g., API call to Formspree)
      const response = await fetch('https://formspree.io/f/xpwawpvg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form.');
      }

      // Optionally reset the form fields after successful submission
      setFormData({
        name: '',
        email: '',
        message: '',
      });

      // alert('Form submitted successfully!');
      const notifySuccess = () => {
        toast.success('Form submitted successfully!');
      };
      notifySuccess();
    } catch (error) {
      // console.error('Error submitting form:', error);
      // alert('Failed to submit form. Please try again later.');
      const notifyError = () => {
        toast.error('Failed to submit form. Please try again later.');
      };
      notifyError();
    } finally {
      setSubmitting(false);
    }
  };


  const homeRef = useRef(null);
  const scrollTohome = () => {
    addAction();
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const aboutRef = useRef(null);
  const scrollToAbout = () => {
    addAction();
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const projectRef = useRef(null);
  const scrollToproject = () => {
    addAction();
    projectRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const contactRef = useRef(null);
  const scrollTocontact = () => {
    addAction();
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  //this scroll used for inner contectand project
  const scrollToAbouts = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollTohomes = () => {
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToprojects = () => {
    projectRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollTocontacts = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    AOS.init();
  }, []);
const skills = [
  'Angular',
  'React',
  'TypeScript',
  'JavaScript',
  'HTML5',
  'CSS3',
  'SCSS',
  'Golang',
  'Node.js',
  'Flutter',
  'MongoDB',
  'MySQL',
  'REST APIs',
  'Git'
]; 
const newSkills =[
  "n8n Automation"
]; return (
    <>
      <nav>
        <div className="logo">
          <img src={icon} alt="" />
          <p>Umapathi</p>
        </div>
        <div className='innermenu'>
          <div className="theme-toggle" onClick={() => setDark(d => !d)}>
            <i className="fa-solid fa-sun"></i>
            <div className={`toggle-track ${dark ? 'on' : ''}`}>
              <div className="toggle-thumb"></div>
            </div>
            <i className="fa-solid fa-moon"></i>
          </div>
          <ul className='menu'>
            <li onClick={scrollTohomes}><Link to={"/"}>Home</Link></li>
            <li onClick={scrollToAbouts}>About</li>
            <li onClick={scrollToprojects}>Projects</li>
            <li onClick={scrollTocontacts}>Contects</li>
          </ul>
          <i class="fa-solid fa-bars" onClick={addAction}></i>
        </div>
      </nav>
      <ul className={`phone_menu ${manuAction ? "active" : "disable"}`}>
        <li onClick={scrollTohome} className="want"><Link to={"/"}>Home</Link></li>
        <li onClick={scrollToAbout}>About</li>
        <li onClick={scrollToproject}>Projects</li>
        <li onClick={scrollTocontact}>Contects</li>
      </ul>
      <Toaster richColors />
      <div className="slidone" ref={homeRef}>
        <div className="socialmedias">
          <a href="https://www.linkedin.com/in/umapathi2004/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
          <a href="https://github.com/Umapathi2004" target="_blank"><i class="fa-brands fa-github"></i></a>
          <a href="https://www.instagram.com/umapathi1014/?igsh=ZGUzMzM3NWJiOQ%3D%3D" target="_blank"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://x.com/umapathi1014" target="_blank"><i class="fa-brands fa-twitter"></i></a>
          <a href="https://wa.me/917094350136" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
        </div>
       <div className="intro">
  <h1>Hey, I'm Umapathi</h1>
<p>
  Software Engineer with 1 year of real-world experience building production-ready applications.
</p>
  <button onClick={scrollToprojects}>Projects</button>
</div>
      </div>
      <div className="slidtwo" ref={aboutRef}>
        <div className="heading">
          <h2>About me</h2>
          <div className="userdefined_line"></div>
        </div>
        <span>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</span>
        <div className="me-skill">
        <div className="known_me">
  <div className="heading">Get to know me!</div>

  <div className="content">
    <p>
      I'm a <b>Software Engineer</b> with 1 year of experience building real-world, production-ready applications. I work on developing scalable and user-focused solutions that contribute to the success of the overall product.
    </p>

    <p>
      I enjoy continuously learning and improving my skills, and I'm always open to opportunities where I can contribute, grow, and take on new challenges.
    </p>

    <p>
      Feel free to connect with me on <a href="https://www.linkedin.com/in/umapathi2004/" target="_blank">LinkedIn</a> or reach out if you have an opportunity that fits my experience.
    </p>
  </div>

  <button onClick={scrollTocontacts}>Contact</button>
</div>
          <div className="skills">
            <div className="heading">My Skills</div>
            <ul>
              {skills.map((skill, index) => (<li key={index}>{skill}</li>))}
            </ul>
            <br/>
             <div className="heading">New Learning Skills</div>
            <ul>
              {newSkills.map((skill, index) => (<li key={index}>{skill}</li>))}
            </ul>
          </div>
          </div>
         
      </div>
      <div className="slidthree" ref={projectRef}>
        <div className="heading">
          <h2>PROJECTS</h2>
          <div className="userdefined_line"></div>
        </div>
        <span>Here you will find some of the personal and clients projects that I created with each project containing its own case study</span>
        <div className="container">{
          Projects.map((project) => (
            <div className="projects">
              <img src={project.img} alt="" data-aos="fade-right" data-aos-delay="50" />
              <div className="projects_detials" data-aos="fade-left" data-aos-delay="50">
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
      <div className="slidfour" ref={contactRef}>
        <div className="heading">
          <h2>CONTACT</h2>
          <div className="userdefined_line"></div>
        </div>
        <span>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</span>
        <form className='messageForm' onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Enter Your Name' required id='name' />
          <label htmlFor="mail">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Enter Your Email' required id='mail' />
          <label htmlFor="message">Message</label>
          <textarea placeholder='Enter Your Message' name="message" value={formData.message} onChange={handleChange} required id='message'></textarea>
          <button type="submit" disabled={submitting}>{submitting ? <i class="fa-solid fa-hourglass fa-spin"></i> : 'Submit'}</button>
        </form>
      </div>
      <footer >
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
  <p>Software Engineer building real-world, production-ready applications.</p>
  <p>Focused on scalable and user-centric solutions.</p>
</div>
        </div>
<div className="copyright">
  © {new Date().getFullYear()} Made by <Link to={"/"}>Umapathi</Link>
</div>      </footer>
    </>
  )
}
