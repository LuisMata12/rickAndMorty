// import {useFetch} from '../../../hooks/useFetch'
import { useState } from 'react'
import IsLoading from '../../../components/IsLoading'
import { useFetch } from '../../../hooks/useFetch'
import {useForm} from '../../../hooks/useForm'
import {Cards} from '../components/Cards'

export const Form = () => {
    const [querys, setQuery]=useState({
        name:'',
        alive:''
    }) 
    const initialState ={
        name:''
    }
    const {onChangeChapter,chracter} = useForm(initialState)

    const[alive,setAlive]=useState("")
    const onChangeAlive=({target})=>{
        setAlive(target.value)
    }
    const querysValues=(e)=>{
        e.preventDefault()
        setQuery({
            name:chracter,
            alive:alive
        })
    }
    const {capitulo,isLoading} =useFetch(`https://rickandmortyapi.com/api/character/?name=${querys.name}&status=${querys.alive}`,querys.name)
    
  return (
    <div className='mt-4'>
        <form className='d-flex gap-3'>
            <input 
                className='input-group'
                type="text"
                name="name"
                value={chracter}
                onChange={onChangeChapter}
                placeholder="Character"
             />
            <select name="alive" id="alive" className='form-select' onChange={onChangeAlive}>
                <option value="alive">alive</option>
                <option value="dead">dead</option>
                <option value="unknow">unknow</option>
            </select>
            <input type="submit" className='btn btn-primary' onClick={querysValues}/>
        </form>
        {
            isLoading
            ?<IsLoading/>
            :<Cards data={capitulo['results']}/>
        }
    </div>
  )
}
