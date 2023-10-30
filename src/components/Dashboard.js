import React from 'react'
import "../style/dashboard.css";
import Footer from './Footer';
const Dashboard = () => {
  return (
    <div className='block'>
    <div className='dashboard'>
      <div className="section-title-content">
        <div className="page-title">Stats</div>
        <div className="page-description">
        Ethereum Total Stats start from 06 Jan 2022. <br />
For detailed stats:
        </div>
      </div>

<div className="dashboard-card">

  <div className="dashboard-app-card">
  <div className="app-card-title">Overview</div>
          <div className="app-card-divider"></div>
          <div className="app-card-content">
  <div className="app-card-row">
              <div className="label">AUM</div>
              <div className="value">$34</div>
            </div>
            <div className="app-card-row">
              <div className="label">$ZLP Pool</div>
              <div className="value">$34</div>
            </div>
            <div className="app-card-row">
              <div className="label">24h Volume</div>
              <div className="value">$0</div>
            </div>
            <div className="app-card-row">
              <div className="label">Long Positions</div>
              <div className="value">$0</div>
            </div>
            <div className="app-card-row">
              <div className="label">Short Positions</div>
              <div className="value">$0</div>
            </div>
  </div>
  </div>
 
 <div className="dashboard-app-card">
 <div className="app-card-title">Total Stats</div>
          <div className="app-card-divider"></div>
          <div className="app-card-content">
          <div className="app-card-row">
              <div className="label">Total Fees</div>
              <div className="value">$0</div>
            </div>
            <div className="app-card-row">
              <div className="label">Total Volume</div>
              <div className="value">$0</div>
            </div>
            <div className="app-card-row">
              <div className="label">Floor Price Fund</div>
              <div className="value">$627,186</div>
            </div>
          </div>
 </div>

</div>

      <div className="section-title-content">
        <div className="page-title">Tokens</div>
        <div className="page-description">
        Platform and $ZLP index tokens.
        </div>
      </div>

<div className="dashboard-token">

  <div className="dashboard-token-card">

    <div className="stats-block">
 <div className="dashboard-token-title">
  <img src="images/token1.png" alt="" />
  $ZOMI</div>
          <div className="app-card-divider"></div>
          <div className="app-card-content">
          <div className="app-card-row">
              <div className="label">Price</div>
              <div className="value">$0.00</div>
            </div>
            <div className="app-card-row">
              <div className="label">Supply</div>
              <div className="value">10,000 $ZOMI</div>
            </div>
            
            <div className="app-card-row">
              <div className="label">Total Staked</div>
              <div className="value">$0</div>
            </div>
            <div className="app-card-row">
              <div className="label">Market Cap</div>
              <div className="value">$10</div>
            </div>
          </div>
 </div>
 <div className="stats-piechart">
  <span>Distribution</span>
</div>

 </div>
 
 <div className="dashboard-token-card">
    
    <div className="stats-block">
 <div className="dashboard-token-title"> <img src="images/token2.png" alt="" />$ZOMI</div>
          <div className="app-card-divider"></div>
          <div className="app-card-content">
          <div className="app-card-row">
              <div className="label">Price</div>
              <div className="value">$0.00</div>
            </div>
            <div className="app-card-row">
              <div className="label">Supply</div>
              <div className="value">10,000 $ZOMI</div>
            </div>
            
            <div className="app-card-row">
              <div className="label">Total Staked</div>
              <div className="value">$0</div>
            </div>
            <div className="app-card-row">
              <div className="label">Market Cap</div>
              <div className="value">$10</div>
            </div>
            <div className="app-card-row">
              <div className="label">Stablecoin Percentage</div>
              <div className="value">49.50%</div>
            </div>
          </div>
 </div>

 <div className="stats-piechart">
<span>$ZPL Pool</span>
</div>

 </div>

</div>


<div className="token-table-block">
<div className="app-card-title">$ZLP Index Composition</div>
          <div className="app-card-divider"></div>
<div className="token-table">
  <table>
    <thead>
      <tr>
        <th>TOKEN</th>
        <th>PRICE</th>
        <th>POOL</th>
        <th>WEGHT</th>
        <th>UTILIZATION</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className='col1'>
            <div className="app-card-title-icon">
              <img src="https://zomi.finance/static/media/ic_eth_40.5e255508.svg" alt="" />
            </div>
            <div className="app-card-title-text">
            <h3>Ethereum</h3> 
            </div>
            <h6> ETH</h6>
        </td>
        <td className='table-value'>$1,787.00</td>
        <td className='table-value'>$19</td>
        <td className='table-value'>50.49% / 25.00%</td>
        <td className='table-value'>0.00%</td>
      </tr>
      <tr>
        <td className='col1'>
            <div className="app-card-title-icon">
              <img src="https://zomi.finance/static/media/ic_wbtc_40.8330ef8d.svg" alt="" />
            </div>
            <div className="app-card-title-text">
            <h3>Wrapped Bitcoin</h3>
            </div>
<h6>WBTC</h6>
          </td>
        <td className='table-value'>$34,101.07</td>
        <td className='table-value'>$0</td>
        <td className='table-value'>0.00% / 25.00%</td>
        <td className='table-value'>0.00%</td>
      </tr>
      <tr>
        <td className='col1'>
        
            <div className="app-card-title-icon">
              <img src="https://zomi.finance/static/media/ic_ape_40.53ac41f3.svg" alt="" />
            </div>
            <div className="app-card-title-text">
            <h3>ApeCoin</h3> 
            </div>
            <h6>APE</h6>
         
        </td>
        <td className='table-value'>$1.37</td>
        <td className='table-value'>$0</td>
        <td className='table-value'>0.00% / 25.00%</td>
        <td className='table-value'>0.00%</td>
      </tr>
      <tr>
        <td className='col1'>
        
            <div className="app-card-title-icon">
              <img src="https://zomi.finance/static/media/ic_usdc_40.27f415ba.svg" alt="" />
            </div>
            <div className="app-card-title-text">
              <h3>USD Coin</h3>
            </div>
         <h6>USDC</h6>
        </td>
        <td className='table-value'>$1.00</td>
        <td className='table-value'>$14</td>
        <td className='table-value'>0.00% / 25.00%</td>
        <td className='table-value'>0.00%</td>
      </tr>
    </tbody>
  </table>
</div>
</div>



      
    </div>
    <Footer/>
    </div>
     )
}

export default Dashboard
