import React from 'react'

export const Cards = ({capitulo,description,title}) => {
  return (
    <div className="card w-50">
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="#" className="btn btn-primary">{capitulo}</a>
        </div>
    </div>
  )
}
