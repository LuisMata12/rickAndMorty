import { Home } from "./pages/home/Home"
import './app.css'
import { Navbar } from "./components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Characters } from "./pages/ characters/Characters";
import { Chapters } from "./pages/chapters/Chapters";



function App() {
  return (
  <>
    <Navbar/>
    <BrowserRouter>
        <Routes>
            <Route path="/*" element={<Home/>}/>
            <Route path="/rickandmorty/" element={<Home/>}/>
            <Route path="/rickandmorty/characters" element={<Characters/>}/>
            <Route path="/rickandmorty/chapters" element={<Chapters/>}/>
        </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
