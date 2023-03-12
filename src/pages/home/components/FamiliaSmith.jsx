import './styles/familiaSmith.css'

export const FamiliaSmith = () => {
  return (
    <>
    <div>
        <h1 className='autor'>Family <span className='colorsub'>Smith</span></h1>
        <div className="row">
            <div className="card col-sm-12 col-md-6 lg-4 d-flex " style={{width: '13rem'}}>
                <img src="https://assets.mycast.io/characters/jerry-smith-1553329-normal.jpg?1614698965" className="card-img-top"  alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button href="#" className="btn btn-primary">view more</button>
                </div>
            </div>
            <div className="card col-sm-12 col-md-6 lg-4 d-flex " style={{width: '13rem'}}>
                <img src="https://static1.personality-database.com/profile_images/4f0cb8c46b8a4f3ba17c405e4245a65e.png" className="card-img-top"  alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button href="#" className="btn btn-primary">view more</button>
                </div>
            </div>
            <div className="card col-sm-12 col-md-6 lg-4 d-flex " style={{width: '13rem'}}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLZOduP1kiMbpCUtJZ8LOhADPSZZZm7Yu0aQ&usqp=CAU" className="card-img-top"  alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button href="#" className="btn btn-primary">view more</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
