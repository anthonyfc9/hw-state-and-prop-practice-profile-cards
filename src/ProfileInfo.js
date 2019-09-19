import React from 'react';
import squad from './squad';
class ProfileInfo extends React.Component{
  render(){
    return(
      <div className="profile-row">
        <div className="dp" id="dp">
          <div className="dp-arc-outer"></div>
          <div className="dp-arc-inner"></div>
          <img
            src="https://i.imgur.com/dnQRSAd.jpg"
            alt="Blksheep"
          />
        </div>
        <div className="desc" id="desc">
          <h1>{this.props.personId}</h1>
          <p>{this.props.age}</p>
          <p>{this.props.eyes}</p>
        </div>
      </div>
    )
  }
}

export default ProfileInfo;
