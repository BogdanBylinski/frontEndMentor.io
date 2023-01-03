import React from 'react'
import data from "../data/data.json"
import Movie from './Movie'
import "../styles/_movieList.scss"

function MoviesList({header}) {
  return (
    <div className="moviesList_container">
        <h1 className="header">{header}</h1>
        <div className="movieList_container-movies">

        {
            data.map((e,index)=><Movie movie={e} key={index} ></Movie>)
        }
        </div>
    </div>
  )
}

export default MoviesList