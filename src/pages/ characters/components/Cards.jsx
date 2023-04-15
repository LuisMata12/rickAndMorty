import { NotFound } from '../../../components/NotFound'
import '../styles/card.css'

export const Cards = ({data=[]}) => {
  return (
    <>
    {
        !data['error']
        ?
    <div className='cards-2 mt-5'>
        {
            data.map(caracter=>{
                return(
                    <div className='row container-card' key={caracter['id']}>
                    <div className='img-container col-4'>
                        <img className='imgCharacter' src={caracter['image']} alt="rick" />
                    </div>
                    <div className="information col-8">
                        <h1 className='name'>{caracter['name']}</h1>
                        <div className='status'>
                            <div className={caracter['status']}></div>
                            <span>{caracter['status']} - {caracter['species']}</span>
                        </div>
                        <span className='location'>Last know location:</span>
                        <br />
                        <span className='locationAnswere'>{caracter['location']['name']}</span>
                        <br />
                        <span className='location'>Origin:</span>
                        <br />
                        <span className='locationAnswere'>{caracter['location']['name']}</span>
                    </div>
                </div>
                )
            })
        }
    </div>
    :<NotFound value='Character'/>
    }
    </>
  )
}
