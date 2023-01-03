import React, { useState } from 'react'
import "../styles/_movieSlide.scss"
import {ReactComponent as Movie} from "../assets/icon-category-movie.svg"
import {ReactComponent as Series} from "../assets/icon-category-tv.svg"
import {ReactComponent as BookmarkEmpty} from "../assets/icon-bookmark-empty.svg"
import {ReactComponent as BookmarkFull} from "../assets/icon-bookmark-full.svg"
import {ReactComponent as Play} from "../assets/icon-play.svg"

// import logo from "../../public/assets/thumbnails/beyond-earth/"
function MovieSlide({data, type}) {
  
  const [bookmarked, setBookmarked] = useState(data.isBookmarked)
    if (type==="slide"){
      return(
        <div className="movieSlide_container" style={{backgroundImage:`url(${(data.thumbnail.trending.large).substring(1)})`}}>
          <div className="hover">

          <div className="play" >
      <Play></Play>
    <p>Play</p>
      </div>
          </div>
          <div className="movieSlide_container-left">
            <div className="top">
            <div className="year">{data.year}</div>
            <div className="circle"></div>
            <div className="category">{data.category==="Movie"? <Movie></Movie>:<Series></Series>}{data.category}</div>
            <div className="circle"></div>
            <div className="rating">{data.rating}</div>
            </div>
            <div className="bottom">
              <div className="title">{data.title}</div>
            </div>
          </div>
          <div className="movie_container-right">
            <div className="bookmark" onClick={()=>bookmarked ===true? setBookmarked(false): setBookmarked(true)}>
              {
                bookmarked ? 
                <BookmarkFull className="full"></BookmarkFull> :
              <BookmarkEmpty></BookmarkEmpty>
              }
            </div>
          </div>
        </div>


      )

    }
}

export default MovieSlide