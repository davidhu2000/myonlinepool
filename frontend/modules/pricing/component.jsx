import React from 'react';

class Pricing extends React.Component {

  render() {
    return (
      <div className="pricing">
        <div className="top-text">
          It&#39;s free to register and create an account
          with MyonlinePool.com but there is a modest fee to create a pool.
          <br />
          NFL Online Office Pool Pricing: The &quot;Full Season&quot; prices
          below include the entire 17 week NFL season plus playoffs and the Super Bowl.
        </div>
        <div className="rates">
          1 – 5 players = $9.95
          <br />
          6 – 15 players = $15.95
          <br />
          16 – 25 players = $25.95
          <br />
          26 – 45 players = $39.95
          <br />
          46 – 65 players = $59.95
          <br />
          66 – 85 players = $79.95
          <br />
          86 – 99 players = $95.95
          <br />
          100+ players = contact us…
        </div>
        <div className="bottom-text">
          Please Note: We are offering special pricing available ONLY during our 2017
          re-launch season.
          <br />
          NFL Super Bowl Squares Pool: All squares pools are priced at $19.95
        </div>
      </div>
    );
  }
}

export default Pricing;
