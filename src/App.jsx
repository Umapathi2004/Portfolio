import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { CaseStudy } from './CaseStudy'

export const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' exact element={<Home/>}/>
    <Route path='/CaseStudy' element={<CaseStudy/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
