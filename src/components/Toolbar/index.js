import React from 'react'
import NavBar from './styles'
import { Link } from 'react-router-dom'

const Toolbar = () => {
  let pathname = window.location.pathname,
    home = '/',
    players = '/players'

  if (pathname === players) {
    return (
      <NavBar>
        <div className="topnav">
          <Link to={home}>Home</Link>
          <Link to={players} className="active">
            Players
          </Link>
        </div>
      </NavBar>
    )
  } else {
    return (
      <NavBar>
        <div className="topnav">
          <Link to={home} className="active">
            Home
          </Link>
          <Link to={players}>Players</Link>
        </div>
      </NavBar>
    )
  }
}

export default Toolbar
