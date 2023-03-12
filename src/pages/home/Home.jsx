import React, { useState } from 'react'
import { Cards } from '../../components/Cards';
import { useFetch } from '../../hooks/useFetch';
import { useForm } from '../../hooks/useForm';
import {Portada} from '../home/Portada'
import { FamiliaSmith } from './components/FamiliaSmith';
import {PrincipalChacters} from './components/PrincipalChacters'
import './styles/home.css'

export const Home = () => {
    // const [num, setNum]=useState(1)
    // const {capitulo,isLoading,hasError}=useFetch(`https://rickandmortyapi.com/api/episode/${num}`);
    // const initial = {
    //   numChapter:1
    // };
    
    // const {onChangeChapter,numChapter}=useForm(initial);
  
    // const getNewChapter =()=>{
    //   setNum(numChapter)
    // }
    // const next =()=>{
    //   setNum(num+1)
    // }
    // const after =()=>{
    //   setNum(num-1)
    // }
  return (
    <>
      <Portada/>
      <div className='container-fluid text-center'>
        <h1 className="autor">Sinopsis<span className='colorsub'> & info</span></h1>
        <div className='d-flex'>
          <p className='info'>Rick Sánchez es la definición exacta de "científico loco". Es alcohólico, es un genio, es irresponsable y está loco. Rick acaba de mudarse a casa de su hija Beth y allí recuerda que tiene un nieto llamado Morty. Sin preguntar a nadie, decide que va a obligarle a que le acompañe a todo tipo de aventuras para que el chico se vuelva inteligente como él y no se convierta en un idiota como Jerry, padre de Morty y yerno de Rick.

          Así, Rick y Morty comienzan a vivir aventuras intergalácticas a pesar de que la familia no quiere que lo sigan haciendo. Poco a poco tienen que intentar encontrar un equilibrio entre su vida familiar y sus viajes a través del espacio y por distintas realidades paralelas, algo que no es fácil para el pequeño Morty que es incapaz de tener una vida normal al margen de su abuelo.

          Justin Roiland (Hora de aventuras) es el encargado de dar voz a los dos personajes principales: Rick y Morty. Sarah Chalke (Scrubs) interpreta a Beth Smith, Chris Parnell (Archer) es Jerry y Spencer Grammer (Greek) es Summer Smith, la hermana mayor de Morty. En España, el reparto de doblaje está compuesto por Txema Moscoso, Rodri Martín, Héctor Indriago, Susana Damas y Sara Iglesias.
          Rick y Morty es una animación de ciencia ficción para adultos creada, producida y escrita por Justin Roiland (Hora de aventuras) y Dan Harmon (Community, Monster House) para Adult Swim. Justin Roiland's Solo Vanity Card Productions, Harmonious Claptrap y Williams Street son las empresas productoras junto a Starburns Industries (del año 2013 al 2014) y Rick and Morty, LLC. (de 2015 hasta el presente).
          </p>
        </div>
        {/* <h1 className='colorsub'>Personajes <span className='autor'>principales</span></h1> */}
        <div className='row personajesPincipales'>
          <h1 className='colorsub'>Personajes <span className='autor'>principales</span></h1>
          <PrincipalChacters/>
        </div>
        <FamiliaSmith/>
        {/* <hr />
        <div className="d-flex">
          <input 
            type="number" 
            className="form-control"
            name="numChapter"
            onChange={onChangeChapter}
            value={numChapter}
          />
          <button className="btn btn-outline-secondary ms-1" onClick={getNewChapter}>Episodio</button>
        </div>
        {
          (isLoading===false)&&<Cards title={capitulo.name} description={capitulo.created} capitulo={capitulo.id}/>
        }
        <button className="btn btn-primary" onClick={after}>after</button>
        <button className="btn btn-primary  ms-3" onClick={next}>next</button> */}
      </div>
    </>
  )
}
