import React, { Component } from 'react'
import axios from 'axios';
import Form from './components/Form';
import API_K from './config_keys';

const API_KEY = API_K;

export default class App extends Component {

  state = {
    temp: null
  }

  getWeather = (e) => {

    e.preventDefault();

    const city = e.target.elements.city.value;

    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    .then(res => {

      const weather = res.data;

      this.setState({
        temp: weather.main.temp
      })
    })

  }

  render() {
    return (
      <div>
        <Form getWeather={this.getWeather}/>
        {this.state.temp}
      </div>
    )
  }
}
