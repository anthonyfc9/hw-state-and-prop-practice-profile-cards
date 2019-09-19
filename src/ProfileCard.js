import React from 'react';
import ProfileInfo from './ProfileInfo'
import squad from './squad'

class ProfileCard extends React.Component{
constructor(){
super();



}


  render(){
    return(
      <div className="id-card-wrapper">
        <div className="id-card">
          <ProfileInfo personId={this.props.personName}  age={this.props.personAge} eyes={this.props.personEye}/>
        </div>
      </div>
      )
  }
}

export default ProfileCard;
