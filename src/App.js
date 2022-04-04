import React, {Component} from "react";
import axios from "axios";
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      userArray: []
    }
  }

  componentDidMount() {
    axios.get("https://randomuser.me/api?results=25")
      .then( res => {
          const userArray = res.data.results
          console.log(res)
          this.setState({ userArray })
      })
  }

  render() {
    <ol>{this.state.userArray.map((user, index) => {
      return (
        <UserCard key={index} name={user.name} location={user.location} gender={user.gender} />
      )
    })}</ol>
  }
}

export default App;
