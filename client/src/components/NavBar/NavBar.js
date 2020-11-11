import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className="nav-extended black">
      <div className="nav-wrapper" id="navWrapper">
        <div className="brand-logo" id="nav"><Link to="/">Storyinator</Link></div>
      </div>
      <div className="nav-content">
        <ul className="tabs tabs-transparent">
          <li className="tab left"><Link to="/"><i className="fas fa-home"></i></Link></li>
          <li className="tab"><Link to="/Selection">Character Selection</Link></li>
          <li className="tab"><Link to="/spam">Work in Progress</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar