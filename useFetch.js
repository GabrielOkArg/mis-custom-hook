import { useEffect, useRef, useState } from 'react'



export const useFetch = (url) => {



    const [first, setfirst] = useState({ data: null, loading: true, error: null });
    const isMounted = useRef(true);

    useEffect(() => {
     
        return()=>{
            isMounted.current = false;
        }
    }, [])
    
    useEffect(()=>{
        setfirst({data:null,loading:true,error:null});
        fetch(url)
            .then(resp => resp.json())
            .then(data =>{
                   if (isMounted) {
                    setfirst({
                        loading:false,
                        error:null,
                        data
                    })
                   }                
            })
            .catch(()=>{
                setfirst({
                    data:null,
                    loading:false,
                    error:'No se pudo cargar la información'
                })
            });
    },[url])

    return first;
}
