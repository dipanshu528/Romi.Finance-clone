import React from "react";
import "../style/earn.css";
import Footer from './Footer';

const Earn = () => {
  return (
    <div className="block">
    <div className="earn">
      <div className="section-title-content">
        <div className="page-title">Earn</div>
        <div className="page-description">
          Stake $ZOMI and $ZLP to earn rewards.
        </div>
      </div>

      <div className="stake-card1">
        <div className="app-card-stake">
          <div className="app-card-title">$ZOMI</div>
          <div className="app-card-divider"></div>
          <div className="app-card-content">
            <div className="app-card-row">
              <div className="label">Price</div>
              <div className="value">$0.00</div>
            </div>
            <div className="app-card-row">
              <div className="label">Wallet</div>
              <div className="value">... $ZOMI ($...)</div>
            </div>
            <div className="app-card-row">
              <div className="label">Staked</div>
              <div className="value">... $ZOMI ($...)</div>
            </div>
            <div className="app-card-divider"></div>
            <div className="app-card-row">
              <div className="label">APR</div>
              <div className="value">...%</div>
            </div>
            <div className="app-card-row">
              <div className="label">Rewards</div>
              <div className="value">$...</div>
            </div>
            <div className="app-card-row">
              <div className="label">Multiplier Points APR</div>
              <div className="value">100.00%</div>
            </div>
            <div className="app-card-row">
              <div className="label">Boost Percentage</div>
              <div className="value">...%</div>
            </div>
            <div className="app-card-divider"></div>
            <div className="app-card-row">
              <div className="label">Total Staked</div>
              <div className="value">0 $ZOMI ($...)</div>
            </div>
            <div className="app-card-row">
              <div className="label">Total Price</div>
              <div className="value">10,000 $ZOMI ($10)</div>
            </div>
          </div>
          <div className="app-card-divider"></div>
          <button>Buy $ROMI</button>
        </div>

        <div className="app-card-stake">
          <div className="app-card-title">Total Rewards</div>
          <div className="app-card-divider"></div>
          <div className="app-card-content">
            <div className="app-card-row">
              <div className="label">ETH (WETH)</div>
              <div className="value">... ($...)</div>
            </div>
            <div className="app-card-row">
              <div className="label">$ROMI</div>
              <div className="value">... ($...)</div>
            </div>
            <div className="app-card-row">
              <div className="label">Escrowed $ZOMI</div>
              <div className="value">... ($...)</div>
            </div>
            <div className="app-card-row">
              <div className="label">Multiplier Points</div>
              <div className="value">... </div>
            </div>
            <div className="app-card-row">
              <div className="label">Staked Multiplier Points</div>
              <div className="value">... </div>
            </div>
            <div className="app-card-row">
              <div className="label">Total</div>
              <div className="value">$...</div>
            </div>
          </div>
          <div id="btn">
            <div className="app-card-divider"></div>
            <button>Connect Wallet</button>
          </div>
        </div>
      </div>

      <div className="stake-card2">
        <div className="app-card-stake">
          <div className="app-card-title">$ZLP (Ethereum)</div>
          <div className="app-card-divider"></div>
          <div className="app-card-content">
            <div className="app-card-row">
              <div className="label">Price</div>
              <div className="value">$...</div>
            </div>
            <div className="app-card-row">
              <div className="label">Wallet</div>
              <div className="value">... $ZLP ($...)</div>
            </div>
            <div className="app-card-row">
              <div className="label">Staked</div>
              <div className="value">... $ZLP ($...)</div>
            </div>
            <div className="app-card-divider"></div>
            <div className="app-card-row">
              <div className="label">APR</div>
              <div className="value">...%</div>
            </div>
            <div className="app-card-row">
              <div className="label">Rewards</div>
              <div className="value">$...</div>
            </div>
            <div className="app-card-divider"></div>
            <div className="app-card-row">
              <div className="label">Tatal Staked</div>
              <div className="value">... $ZLP ($...)</div>
            </div>
            <div className="app-card-row">
              <div className="label">Total Supply</div>
              <div className="value">... $ZLP ($...)</div>
            </div>
            <div className="app-card-divider"></div>
          </div>
          <button>Buy $ZPL</button>
          <button>Sell $ZPL</button>
        </div>

        <div className="app-card-stake">
          <div className="app-card-title">Escrowed $ZOMI</div>
          <div className="app-card-divider"></div>
          <div className="app-card-content">
            <div className="app-card-row">
              <div className="label">Price</div>
              <div className="value">$0.00</div>
            </div>
            <div className="app-card-row">
              <div className="label">Wallet</div>
              <div className="value">... esZOMI ($...)</div>
            </div>
            <div className="app-card-row">
              <div className="label">Staked</div>
              <div className="value">... esZOMI ($...)</div>
            </div>
            <div className="app-card-divider"></div>
            <div className="app-card-row">
              <div className="label">APR</div>
              <div className="value">...%</div>
            </div>
            <div className="app-card-row">
              <div className="label">Rewards</div>
              <div className="value">100.00%</div>
            </div>
            <div className="app-card-divider"></div>
            <div className="app-card-row">
              <div className="label">Tatal Staked</div>
              <div className="value">... esZOMI ($...)</div>
            </div>
            <div className="app-card-row">
              <div className="label">Total Supply</div>
              <div className="value">1,023,379 esZOMI ($1,052)</div>
            </div>
            <div className="app-card-divider"></div>
          </div>
          <button>Connect Wallet</button>
        </div>
      </div>

      <div className="section-title-content">
        <div className="page-title">Vest</div>
        <div className="page-description">
        Convert esZOMI tokens to $ZOMI tokens. <br />
Please read the vesting details before using the vaults.
        </div>
      </div>

<div className="stake-card3">

  <div className="app-card-stake">
  <div className="app-card-title">$ZOMI Vault</div>
          <div className="app-card-divider"></div>
          <div className="app-card-content">
          <div className="app-card-row">
              <div className="label">Staked Tokens</div>
              <div className="value">...</div>
            </div>
            <div className="app-card-row">
              <div className="label">Reserved for Vesting</div>
              <div className="value">0.00 / ...</div>
            </div>
            <div className="app-card-row">
              <div className="label">Vesting Status</div>
              <div className="value">0.0000 / 0.0000</div>
            </div>
            <div className="app-card-row">
              <div className="label">Claimable</div>
              <div className="value">0.0000 $ZOMI</div>
            </div>    
          </div>
          <div className="app-card-divider"></div>
          <button>Connect Wallet</button>
  </div>

  <div className="app-card-stake">
  <div className="app-card-title">$ZOMI Vault</div>
          <div className="app-card-divider"></div>
          <div className="app-card-content">
          <div className="app-card-row">
              <div className="label">Staked Tokens</div>
              <div className="value">... $ZLP</div>
            </div>
            <div className="app-card-row">
              <div className="label">Reserved for Vesting</div>
              <div className="value">0.00 / ...</div>
            </div>
            <div className="app-card-row">
              <div className="label">Vesting Status</div>
              <div className="value">0.0000 / 0.0000</div>
            </div>
            <div className="app-card-row">
              <div className="label">Claimable</div>
              <div className="value">0.0000 $ZOMI</div>
            </div>    
          </div>
          <div className="app-card-divider"></div>
          <button>Connect Wallet</button>
  </div>
</div>




    </div>
    <Footer/>
    </div>
  );
};

export default Earn;
