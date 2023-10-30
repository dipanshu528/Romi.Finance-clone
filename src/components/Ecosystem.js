import React from 'react'
import "../style/ecosystem.css";
import Footer from './Footer'

const Ecosystem = () => {
  return (
    <div className='block'>
      <div className="ecosystem">
      <div className="section-title-content">
        <div className="page-title">Telegram Groups</div>
        <div className="page-description">
        Community-led Telegram groups.
        </div>
      </div>

<div className="ecosystem-card">
    <div className="app-card">
    <div className="app-card-title">$ZOMI</div>
          <div className="app-card-divider"></div>
          <div className="app-card-content">
  <div className="app-card-row">
              <div className="label">Link</div>
              <div className="value">t.me</div>
            </div>
            <div className="app-card-row">
              <div className="label">About</div>
              <div className="value">Telegram Group</div>
            </div>

            </div>
    </div>
    
    <div className="app-card">
    <div className="app-card-title">$ZOMI</div>
          <div className="app-card-divider"></div>
          <div className="app-card-content">
  <div className="app-card-row">
              <div className="label">Link</div>
              <div className="value">t.me</div>
            </div>
            <div className="app-card-row">
              <div className="label">About</div>
              <div className="value">Telegram Announcements</div>
            </div>

            </div>
    </div>
</div>

      </div>

      <Footer/>
    </div>
  )
}

export default Ecosystem
