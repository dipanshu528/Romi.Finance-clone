import React from 'react'
import '../style/footer.css';
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src="../images/logo.png" alt="" />
        <h1>Romi Finance</h1>
      </div>

      <div className="footer-sicial-link-block">
          <a href="https://twitter.com/zomi.finance"><img src="https://zomi.finance/static/media/ic_twitter.9f35b403.svg" alt="" /> </a>
          <a href="https://zomifinance.medium.com/"><img src="https://zomi.finance/static/media/ic_medium.f6051b2e.svg" alt="" /> </a>
          <a href="https://github.com/zomi"><img src="https://zomi.finance/static/media/ic_github.dbd4de8a.svg" alt="" /> </a>
          <a href="https://t.me/zomichat"><img src="https://zomi.finance/static/media/ic_telegram.af1a4a66.svg" alt="" /> </a>
          <a href="https://discord.com/invite/senshilabs"><img src="https://zomi.finance/static/media/ic_discord.be4d716c.svg" alt="" /> </a>
      </div>

      <div className="footer-link">
        <a href="/">Terms and Condition</a>
        <a href="/">Referral Term</a>
        <a href="/">Media Kit</a>
      </div>
    </div>
  )
}

export default Footer
