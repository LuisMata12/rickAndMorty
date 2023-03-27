import { useEffect, useState } from "react";

export const useFetch = (url,valuePrevent='') => {

    
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
      if(valuePrevent.length>=2){
				getData()
			}
    }, [url])
    
    return{
        capitulo:capitulo.data,
        isLoading:capitulo.isLoading,
        hasError: capitulo.hasError
    }
}
