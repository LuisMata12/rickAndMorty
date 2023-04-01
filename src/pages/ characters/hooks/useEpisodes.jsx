import { useState } from "react"

export const useEpisodes = (initialValue) => {
    const [episode,setEpisode]=useState(initialValue)
    const onChangeEpisode=({target})=>{
        const{name,value}=target;
        setEpisode({
            ...episode,
            [name]:value
        })
    }
  return {
    onChangeEpisode,
    episode:episode.episode
  }
}
