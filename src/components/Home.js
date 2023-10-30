import React from 'react'
import '../style/home.css';
import Footer from './Footer';
const Home = () => {
  return (
    <div className='block'>
    <div className='home-title-section'>
      <div className="home-title">
        <h1>Decentralized <br /> Perpetual Exchange</h1>
        <p>Trade BTC, ETH, AVAX and other top <br /> cryptocurrencies with up to 30x leverage <br /> directly from your wallet</p>
      <button>Launch Exchange</button>
      </div>

      <div className="home-info">
        <div className="home-info-block">
          <img src="https://zomi.finance/static/media/ic_trading.2c53815a.svg" alt="" />
          <div className="home-info-content">
            <h2>Total Trading Value</h2>
            <span>$0</span>
          </div>
        </div>

        <div className="home-info-block">
          <img src="https://zomi.finance/static/media/ic_stats.f0a18011.svg" alt="" />
          <div className="home-info-content">
            <h2>Open Interest</h2>
            <span>$0</span>
          </div>
        </div>

        <div className="home-info-block">
          <img src="https://zomi.finance/static/media/ic_totaluser.ae09b310.svg" alt="" />
          <div className="home-info-content">
            <h2>Total User</h2>
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  

{/* Home Benefit Section */}
<div className="home-benefits-section">
  <div className="home-benefit">
    <div className="home-benefit-icon">
      <img src="https://zomi.finance/static/media/ic_liquidity.505b3f30.svg" alt="" />
      <h2>Reduce Liquidation Risks</h2>
    </div>
    <div className="home-benefit-description">
      <p>An aggregate of high-quality price feeds determine when liquidations occur. This keeps positions safe from temporary wicks.</p>
    </div>
  </div>

  <div className="home-benefit">
    <div className="home-benefit-icon">
      <img src="https://zomi.finance/static/media/ic_cost.b4a729d3.svg" alt="" />
      <h2>Save on Costs</h2>
    </div>
    <div className="home-benefit-description">
      <p>Enter and exit positions with minimal spread and zero price impact. Get the optimal price without incurring additional costs.</p>
    </div>
  </div>

  <div className="home-benefit">
    <div className="home-benefit-icon">
      <img src="https://zomi.finance/static/media/ic_simpleswaps.2005009f.svg" alt="" />
      <h2>Simple Swaps</h2>
    </div>
    <div className="home-benefit-description">
      <p>Open positions through a simple swap interface. Conveniently swap from any supported asset into the position of your choice.</p>
    </div>
  </div>
</div>



{/* Home Token Card Section */}
   <div className="home-token-section">
    <div className="home-token-info">Two tokens create our ecosystem</div>
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
   
   
   <Footer/>
    </div>
  )
}

export default Home
