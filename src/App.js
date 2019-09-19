import React from 'react';
import './App.css';
import ProfileCard from './ProfileCard'
import squad from './squad'
class App extends React.Component {
  constructor(){
    super();
    this.state = {
   personOne:squad[0]
    }
  }

renderProfiles=(arr)=>{
arr.map((obj)=>{
return(     <ProfileCard 
  personName={obj.name}
  personAge={obj.age}
  personEye={obj.eyeColor}
  />)

})
}


  render(){
    console.log(this.state.per1);
  return (

    <div className="App">
      

      {squad.map((obj)=>{
return(     <ProfileCard 
  personName={obj.name}
  personAge={obj.age}
  personEye={obj.eyeColor}
  />)

})}
    </div>
  );
}}

export default App;
