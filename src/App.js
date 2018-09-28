import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super(); //FB constructor should run before my constructor
    this.state = {
      name:'',
      pictureURL: '',
      friends: [{name: "Jam", pictureURL: 'http://http.cat/506'}],
    }
    this.updateName = this.updateName.bind(this);
    this.updatepictureURL = this.updatepictureURL.bind(this);
    this.addFriend = this.addFriend.bind(this);
  }
//input handler
updateName(event){
  // console.log(event.target.value);
  this.setState({
    name: event.target.value
  })
}; 
// could write this inline on 'onChange' (see below), we dont have to bind with inline 
//because of the arrow function
updatepictureURL(url){
  this.setState({
    pictureURL: url.target.value
  })
};
addFriend(){
  const newFriend = {name: this.state.name, pictureURL: this.state.pictureURL};
  const friendsCopy = this.state.friends.slice();
  friendsCopy.push(newFriend);
  this.setState({friends: friendsCopy});
  this.clearName()
  //this.state.friends.push();
  // don't munipulate state i.e. this.state.friends.push({name: this.state.name, pictureURL: this.state.pictureURL})
}
clearName(){
  this.setState({
    name: ""
  })
}
  render() {
    // const name = this.state.name;
    // const pictureURL = this.state.pictureURL;
    const {name, pictureURL, friends} = this.state;
    // console.log('this.state', this.state);
    return (
      <div>
        <div>
          Name: <input value={name} 
          onChange={event=>this.setState({name: event.target.value})}/>
          {name}
        </div>

        <div>
          Picture URL: <input value={pictureURL} 
          onChange={this.updatepictureURL} /> 
          {pictureURL}
        </div>
        <button onClick={this.addFriend}>Add friends</button>
        <div>Friends: {friends.map(friend => {
          return <div>
            Name: {friend.name} &nbsp; 
            Picture: <img src={friend.pictureURL}/>
          </div>
        })}</div>
      </div>
    );
  }
}

export default App;
