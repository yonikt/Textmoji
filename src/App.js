import React, { Component } from 'react';
import './App.css';
import Emoji from './components/Emoji';
const axios = require('axios')


class App extends Component {

  constructor(){
    super()
    this.state = { emoji: [] }
  }

  async getEmoji() {
    return axios.get("http://localhost:1344/emoji")
  }

  async componentDidMount() {
    const response = await this.getEmoji()
    this.setState({ emoji: response.data })
    console.log(this.state.emoji)
  }




  render() {
    return (
      <div className="App">
        <h1>Textmoji 🐧 </h1>
    
     <Emoji data={this.state.emoji}/>
    <div id="credits">Created By <a href= "https://github.com/yonikt"> Yoni Kiat</a></div>
     </div>
    )
  }
}

export default App;

