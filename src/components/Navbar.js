import React from 'react';
import '../style/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
 

  return (
    <div className='nav-container'>
      <div className="app-header-logo">
        <img src="../images/logo.png" alt="" />
      <h2>Romi Finance</h2>
      </div>
      
      <div className="app-header-left">
      <nav id='navbar' >
        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/dashboard" >Dashboard</Link></li>
          <li><Link to="/nft" >NFT</Link></li>
          <li><Link to="/earn" >Earn</Link></li>        
          <li><Link to="/buy" >Buy</Link></li>
          <li><Link to="/refferrals" >Refferrals</Link></li>
          <li><Link to="/ecosystem" >Ecosystem</Link></li>
          <li><Link to="#" >About</Link></li>       
        </ul>
      </nav>
      </div>
    
    <div className="app-header-right">

<div className="app-header-trade-link">
Trade
  </div>
<button>
  <img src="https://zomi.finance/static/media/ic_wallet_24.a19a6758.svg" alt="" />
  <span>Connect Wallet</span>
</button>
    </div>

    
    </div>
  );
};

export default Navbar;

