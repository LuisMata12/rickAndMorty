import React from 'react'
import { useState } from 'react'
import { useEpisodes } from '../ characters/hooks/useEpisodes'
import IsLoading from '../../components/IsLoading'
import { useFetch } from '../../hooks/useFetch'
import { useForm } from '../../hooks/useForm'
import { EpisodesCards } from './components/EpisodesCards'

export const Episodes = () => {
    const [querys,setQuerys]=useState({
        episode:'',
    })
    const initialState ={
        episode:''
    }
    const searchEpisode =(e)=>{
        e.preventDefault()
        setQuerys({
            episode:episode
        })
    }

    const {episode,onChangeEpisode}=useEpisodes(initialState)
    const {capitulo,isLoading,}=useFetch(`https://rickandmortyapi.com/api/episode/?name=${querys.episode}`)
  return (
    <div className='container mt-3'>
        <form className='d-flex justify-content-center gap-3'>
            <div className='d-flex flex-column'>
                <input 
                    className='input-group form-control'
                    type="text"
                    name="episode"
                    placeholder="Search"
                    value={episode}
                    onChange={onChangeEpisode}
                />
            </div>
            <input type="submit" style={{width:'80px',height:'40px'}} className='btn btn-outline-light' value="Search" onClick={searchEpisode}/>
        </form>
        {
            (!isLoading)
            ?<EpisodesCards data={capitulo['results']}/>
            :<IsLoading/>
        }
    </div>
  )
}
