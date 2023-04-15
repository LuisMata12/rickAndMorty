import './styles/notFound.css'

export const NotFound = ({value=''}) => {
  return (
        <div className='d-flex justify-content-center align-items-center flex-column mt-5 not-Found'>
            <img src="https://www.formulatv.com/images/articulos/95000/n95324_zkoic12Y05JRz7v6FEBqgeNsxUP3am9L4-q.jpg" alt="morty sad" className='notfound-image'/>
            <h1 className='mt-3'>{value} NOT FOUND</h1>
        </div>
  )
}
