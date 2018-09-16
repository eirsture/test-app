import React, { Component } from 'react';
import Title from './components/Title';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        title: "Eirik",
        events: [],
      };
  }

componentDidMount() {
  axios.get("https://jowies.com/api/events")
    .then((response) => {
      this.setState({
        title: "success",
        events: response.data,
      });
    })
    .catch((error) => {
        this.setState({title: "error"});
    });
}

renderEvents() {
  return this.state.events.map((event) => {
    return (
      <div style={{}> 
      <h3>{event.title}</h3>
      <img style={{width: '950px', height: '285px'}}
        src={event.cover} />
        <h2>{event.description}</h2>
        </div>
    )
  });
}

  render() {
    return(
      <div className="App">
        <Title title={this.state.title} />
        {this.renderEvents()}
      </div>)

  }
}

export default App;
