import '../styles/episodesCards.css'

export const EpisodesCards = ({data=[]}) => {
  return (
    <div className='grid-episodes'>
        {
            data.map(episode=>{
                return(
                    <div key={episode['name']} className='episode-container'>
                      <div className='episode_buer'>
                        <h2 className='episode_name'>{episode['name']}</h2>
                        <div>
                          <span className='key'>Id:</span><span className='results'>{episode['name']}</span>
                        </div>
                        <div>
                        <span className='key'>Air date:</span><span className='results'>{episode['air_date']}</span>
                        </div>
                        <div>
                          <span className='key'>Episode:</span><span className='results'>{episode['episode']}</span>
                        </div>
                        <div>
                          <span className='key'>Created:</span><span className='results'>{episode['created']}</span>
                        </div>
                      </div>
                    </div>
                )
            })
        }
    </div>
  )
}
