import { Home } from "./pages/home/Home"
import './app.css'
import { Navbar } from "./components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Characters } from "./pages/ characters/Characters";
import { Episodes } from "./pages/ episodes/Episodes";



function App() {
  return (
  <>
    <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path="/*" element={<Home/>}/>
            <Route path="/rickandmorty/" element={<Home/>}/>
            <Route path="/rickandmorty/characters" element={<Characters/>}/>
            <Route path="/rickandmorty/episodes" element={<Episodes/>}/>
        </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
