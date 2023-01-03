import React from 'react'
import logo from "../assets/logo.svg"
import {ReactComponent as Home} from "../assets/icon-nav-home.svg";
import {ReactComponent as Movies} from "../assets/icon-nav-movies.svg";
import {ReactComponent as Tv} from "../assets/icon-nav-tv-series.svg";
import {ReactComponent as Bookmarks} from "../assets/icon-nav-bookmark.svg";
import avatar from "../assets/image-avatar.png";

function Navbar() {
  return (
    <div className="nav">
          <div className="nav-logo"><a href="."><img src={logo} alt="logo" /></a></div>
          <div className="nav_links">
            <div className="nav_links-link active"><a href="."><Home /></a></div>
            <div className="nav_links-link"><a href="."><Movies/> </a></div>
            <div className="nav_links-link"><a href="."><Tv/> </a></div>
            <div className="nav_links-link"><a href="."><Bookmarks/></a></div>
          </div>
          <div className="nav-avatar"><a href="."><img src={avatar} alt="avatar" /></a></div>
        </div>
  )
}

export default Navbar