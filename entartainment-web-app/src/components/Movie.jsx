import React from 'react'
import {ReactComponent as MovieIcon} from "../assets/icon-category-movie.svg"
import {ReactComponent as Series} from "../assets/icon-category-tv.svg"
import {ReactComponent as BookmarkEmpty} from "../assets/icon-bookmark-empty.svg"
import {ReactComponent as BookmarkFull} from "../assets/icon-bookmark-full.svg"
import {ReactComponent as Play} from "../assets/icon-play.svg"
import "../styles/_movie.scss"
import { useState } from 'react'

function Movie({movie}) {
  const [bookmarked, setBookmarked] = useState(movie.isBookmarked)
  // const [opa, setOpa]= useState(false)
  return (
    <div className="movie_container">
      <div className="movie_container-img">

      <img alt="img" className="movie_container-img" id='img' src={movie.thumbnail.regular.large.substring(1)}/>
      <div className="hover">

      <div className="play" >
      <Play></Play>
    <p>Play</p>
      </div>
      </div>
      </div>
      <div className="bookmark" onClick={()=>bookmarked ===true? setBookmarked(false): setBookmarked(true)}>
        {
          bookmarked ?
          <BookmarkFull className="full"></BookmarkFull>:
          <BookmarkEmpty></BookmarkEmpty>
        }
            </div>
      <div className="movie_container-texts">
      <div className="top" >
            <div className="year">{movie.year}</div>
            <div className="circle"></div>
            <div className="category">{movie.category==="Movie"? <MovieIcon></MovieIcon>:<Series></Series>}{movie.category}</div>
            <div className="circle"></div>
            <div className="rating">{movie.rating}</div>
            </div>
            <div className="bottom">
              <div className="title">{movie.title}</div>
            </div>
      </div>
    </div>
  )
}

export default Movie