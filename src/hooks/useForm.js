import { useState } from "react"


export const useForm = (initialState) => {
    const [newChapter, setNewChapter] = useState(initialState)
    const onChangeChapter =({target})=>{
        const{value,name}=target
        setNewChapter({
            ...newChapter,
            [name]:value
        })
    }
  return{
    chracter:newChapter.name,
    onChangeChapter
  }
}
