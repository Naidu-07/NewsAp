import React from 'react'
import img from '../Assets/news.avif'

export default function Newsitem({title,description,src,url}) {
  return (
    <div className="card bg-dark text-light d-inline-block px-2 py-2 mx-3" style={{maxWidth:"400px"}}>
  <img src={src?src : img } style={{height:"200px",width:"325px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={url} className="btn btn-primary">Read More...</a>
  </div>
</div>
  )
}
