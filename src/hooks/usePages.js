import { useState } from "react"

export const usePages = () => {

    const [page,setPage]=useState(1);

    const onChangePage=(page)=>{
        setPage(page)
    }
    const nextPage =(allPages)=>{
      if(page>=allPages){
        return
      }
      setPage(page+1)
    }
    const previousPage = ()=>{
      if(page==1){
        return
      }
      setPage(page-1)
    }
    

  return {
    page,
    onChangePage,
    nextPage,
    previousPage
  }
}
