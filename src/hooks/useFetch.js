import { useEffect, useState } from "react";

export const useFetch = (url) => {

    
    const [capitulo, setCapitulo]=useState({
        isLoading:true,
        data:null,
        hasError:null
    });
    const getData = async () =>{
        setCapitulo({
          ...capitulo,
          isLoading:true
        })
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data)
        setCapitulo({
            isLoading:false,
            data:data,
            hasError:false
        })
    }
    useEffect(() => {
      getData()
    }, [url])
    
    return{
        capitulo:capitulo.data,
        isLoading:capitulo.isLoading,
        hasError: capitulo.hasError
    }
}
