import './styles/principalChacters.css'

export const PrincipalChacters = () => {
  return (
    <>
    <div className='text-center mt-3'>
        <h2 className='pencipal chacter'>Rick Sanchez</h2>
        <div className='row mt-2'>
            <img src="https://www.nacionflix.com/__export/1657911336768/sites/debate/img/2021/07/20/rick4_2.jpg_1339198940.jpg" className='col-lg-4 rounded-5' alt="rick" />
            <div className='d-flex flex-column align-items-center col-lg-8'>
              <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio expedita quas placeat labore sed nemo sit aut exercitationem libero rem totam nulla quasi aliquam voluptatibus, sequi autem hic ab! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quidem vero nihil quaerat dolores praesentium! Mollitia eveniet ducimus quae eius quaerat animi reiciendis laboriosam corporis tenetur sint, harum assumenda nisi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum delectus quaerat dignissimos sed cum qui exercitationem aut, iure excepturi corporis architecto ex quia omnis assumenda beatae iusto possimus dolor obcaecati.</p>
              <button className='btn'>View more</button>
            </div>
        </div>
        <h2 className='mt-5'>Morty Smith</h2>
        <div className='row'>
            <div className='d-flex flex-column align-items-center col-lg-8'>
              <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio expedita quas placeat labore sed nemo sit aut exercitationem libero rem totam nulla quasi aliquam voluptatibus, sequi autem hic ab! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quidem vero nihil quaerat dolores praesentium! Mollitia eveniet ducimus quae eius quaerat animi reiciendis laboriosam corporis tenetur sint, harum assumenda nisi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum delectus quaerat dignissimos sed cum qui exercitationem aut, iure excepturi corporis architecto ex quia omnis assumenda beatae iusto possimus dolor obcaecati.</p>
              <button className='btn'>View more</button>
            </div>
            <img src="https://www.gamingverdict.com/wp-content/uploads/2021/08/rick-and-morty-adult-swim-cartoon-morty-smith-wallpaper.jpg" className='col-lg-4 rounded-5' alt="rick" />
        </div>
    </div>
    </>
  )
}
