import {React,useState,useRef} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { CaseStudy } from './CaseStudy'

export const App = () => {
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
    <>
    <div className="scroll">
      <div className="scrollsection" style={{width:`${first}%`}}></div>
    </div>
    <div ref={TopDiv}></div>
    <BrowserRouter>
    <Routes>
    <Route path='/' exact element={<Home/>}/>
    <Route path='/CaseStudy' element={<CaseStudy/>}/>
    </Routes>
    </BrowserRouter>
    <div className="ToTop" onClick={ScrollToTop} style={{display:`${scrollHeight?"flex":"none"}`}}>
    <i class="fa-solid fa-caret-up"></i>
    </div>
    </>
  )
}
