import React from 'react'
import "../style/buy.css";
import Footer from './Footer';
const Buy = () => {
  return (
    <div className='block'>
      <div className="buy">

      <div className="home-token-section">
    <div className="home-token-info">Buy $ZOMI or $ZLP</div>
    <div className="home-token-options">

<div className="home-token-option">
<div className="home-token-option-icon">
  <img src="../images/token1.png" alt="" /> <h2> $ZOMI</h2>
</div>
<div className="home-token-option-info">
  <div className="home-token-option-title"><p>$ZOMI is the utility and governance token. Accrues 30% of the platform's generated fees.</p></div>
  <div className="home-token-option-apr"><h4>Ethereum APR: 0.00%</h4></div>
  <div className="home-token-option-action">
    <button id='buy'>Buy</button>
    <button id='readmore'>Read more</button>
  </div>
</div>
</div>


<div className="home-token-option">
<div className="home-token-option-icon">
  <img src="../images/token2.png" alt="" /> <h2> $ZLP</h2> 
</div>
<div className="home-token-option-info">
  <div className="home-token-option-title"><p>$ZLP is the liquidity provider token. Accrues 70% of the platform's generated fees.</p></div>
  <div className="home-token-option-apr"><h4>Ethereum APR: 1,646,781,040.34%</h4></div>
  <div className="home-token-option-action">
    <button id='buy'>Buy</button>
    <button id='readmore'>Read more</button>
  </div>
</div>
</div>


    </div>
   </div>
      
      
      </div>



      <Footer/>
    </div>
  )
}

export default Buy
