import React from 'react'
import { useLocation } from 'react-router-dom'

export const CaseStudy = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
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
    <div className="caseStudy_slide1">
        <h1></h1>
        <p></p>
        <a href=""></a>
    </div>
    </>
  )
}
