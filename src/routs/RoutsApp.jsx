import React from 'react'
import {Route, Routes } from "react-router-dom";
import { Characters } from '../pages/ characters/Characters';
import { Home } from '../pages/home/Home';
export const RoutsApp = () => {
  return (
    <>
      <h1>hello</h1>
      <Routes>
          <Route path='/characters' element={<Characters/>}/>
          <Route path='/home' element={<Home/>}/>
      </Routes>
    </>
  )
}
