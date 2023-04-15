import React from 'react'
import { useState } from 'react'
import { useEpisodes } from '../ characters/hooks/useEpisodes'
import IsLoading from '../../components/IsLoading'
import { NotFound } from '../../components/NotFound'
import { useFetch } from '../../hooks/useFetch'
import { useForm } from '../../hooks/useForm'
import { usePages } from '../../hooks/usePages'
import { EpisodesCards } from './components/EpisodesCards'
import { NoPages } from './components/NoPages'

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
    const {page,onChangePage,nextPage,previousPage}=usePages();
    const {capitulo,isLoading,}=useFetch(`https://rickandmortyapi.com/api/episode/?name=${querys.episode}&page=${page}`)
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
            ?<>
                {
                    capitulo['error']
                    ?<NotFound value='EPISODE'/>
                    :<>
                        <EpisodesCards data={capitulo['results']}/>
                        <NoPages pages={capitulo['info']['pages']} onChangePage={onChangePage} nextPage={nextPage} previousPage={previousPage}/>
                    </>
                }
            </>
            :<IsLoading/>
        }
    </div>
  )
}
