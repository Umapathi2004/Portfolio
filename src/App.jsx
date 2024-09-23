import {React,useState} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { CaseStudy } from './CaseStudy'

export const App = () => {
    const [first, setfirst] = useState(0)
    window.onscroll=()=>{
    var windowscoll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (windowscoll / height) *100;
    setfirst(scrolled);
    };
  return (
    <>
    <div className="scroll">
      <div className="scrollsection" style={{width:`${first}%`}}></div>
    </div>
    <BrowserRouter>
    <Routes>
    <Route path='/' exact element={<Home/>}/>
    <Route path='/CaseStudy' element={<CaseStudy/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
