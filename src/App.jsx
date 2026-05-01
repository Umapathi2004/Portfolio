import {React,useState,useRef,createContext,useContext} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { CaseStudy } from './CaseStudy'
import { NotFound } from './NotFound'

export const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const App = () => {
    const [dark, setDark] = useState(false);
    const [first, setfirst] = useState(0);
    const TopDiv = useRef(null);
    const [scrollHeight, SetScrollHeight] = useState(false);
    window.onscroll=()=>{
    var windowscoll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (windowscoll / height) *100;
    setfirst(scrolled);
    SetScrollHeight(scrolled>=10?true:false);
    };
    const ScrollToTop =()=> {
      TopDiv.current.scrollIntoView({ behavior: 'smooth' });
    }
  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
    <div className={dark ? 'dark-mode' : ''}>
    <div className="scroll">
      <div className="scrollsection" style={{width:`${first}%`}}></div>
      <div className="theme-toggle" onClick={() => setDark(d => !d)}>
        <i className={dark ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}></i>
      </div>
    </div>
    <div ref={TopDiv}></div>
    <BrowserRouter>
    <Routes>
    <Route path='/' exact element={<Home/>}/>
    <Route path='/CaseStudy' element={<CaseStudy/>}/>
    <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    <div className="ToTop" onClick={ScrollToTop} style={{display:`${scrollHeight?"flex":"none"}`}}>
    <i class="fa-solid fa-caret-up"></i>
    </div>
    </div>
    </ThemeContext.Provider>
  )
}
