// import {useFetch} from '../../../hooks/useFetch'
import { useState } from 'react'
import IsLoading from '../../../components/IsLoading'
import { useFetch } from '../../../hooks/useFetch'
import {useForm} from '../../../hooks/useForm'
import {Cards} from '../components/Cards'
import {NoPages} from '../../ episodes/components/NoPages'
import {usePages} from '../../../hooks/usePages'
import { NotFound } from '../../../components/NotFound'

export const Form = () => {
    const [querys, setQuery]=useState({
        name:'',
        alive:'',
        species:''
    }) 
    const initialState ={
        name:'',
        species:''
    }
    const {onChangeChapter,chracter,species} = useForm(initialState)

    const[alive,setAlive]=useState("")
    const onChangeAlive=({target})=>{
        setAlive(target.value)
    }
    const querysValues=(e)=>{
        e.preventDefault()
        setQuery({
            name:chracter,
            alive:alive,
            species:species
        })
    }
    const {page,onChangePage,nextPage,previousPage} = usePages()
    const {capitulo,isLoading} =useFetch(`https://rickandmortyapi.com/api/character/?name=${querys.name}&status=${querys.alive}&species=${querys.species}&page=${page}`,querys.name)
    
  return (
    <div className='mt-4'>
        <form className='d-flex justify-content-center gap-3'>
            <div className='d-flex flex-column'>
                <span>Name</span>
                <input 
                    className='input-group form-control'
                    type="text"
                    name="name"
                    value={chracter}
                    onChange={onChangeChapter}
                    placeholder="Character"
                />
            </div>
            <div className='d-flex flex-column'>
                <span>Species</span>
                <input 
                    className='form-control'
                    type="text" 
                    placeholder='Species'
                    name='species'
                    value={species}
                    onChange={onChangeChapter}
                    />
            </div>
            <div className='d-flex flex-column'>
                <span>Status</span>
                <select name="alive" id="alive" className='form-select' onChange={onChangeAlive}>
                    <option value="all">All</option>
                    <option value="alive">Alive</option>
                    <option value="dead">Dead</option>
                    <option value="unknow">Unknow</option>
                </select>
            </div>
            <input type="submit" style={{width:'80px',height:'40px',marginTop:'23px'}} className='btn btn-outline-light' value="Search" onClick={querysValues}/>
        </form>
        {
            isLoading 
            ?<IsLoading/>
            :
            <>
                {
                    capitulo['error']
                    ?<NotFound value='CHARACTER'/>
                    :
                    <>
                        <Cards data={capitulo['results']}/>
                        <NoPages pages={capitulo['info']['pages']} onChangePage={onChangePage} nextPage={nextPage} previousPage={previousPage}/>
                    </>
                }
            </>
        }
    </div>
  )
}
