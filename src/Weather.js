import React, { Component } from "react";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ""
    };
  }

  componentDidMount() {
    console.log("componentDidMount", this.state.city);

    this.setState({
      city: "update"
    })

    // console.log(this.state.city);

    // const url = `https://api.openweathermap.org/data/2.5/forecast?q=London&APPID=885c24dac664de0bc9186f32747cf51a`;

    // const city = this.state.city;

    // const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=885c24dac664de0bc9186f32747cf51a`;

    // https://api.openweathermap.org/data/2.5/forecast?q=London&APPID=885c24dac664de0bc9186f32747cf51a

    // .then(data => {
    //     let result = [];
    //     let res_currency;
    //     let res_rate;
    //     for (let currencyCode in data.rates) {
    //       result.push([currencyCode, data.rates[currencyCode]]);

    //       if (currencyCode.toUpperCase() === "CAD") {
    //         res_currency = currencyCode.toUpperCase();
    //         res_rate = data.rates[currencyCode];
    //       }
    //     }

    // fetch(url)
    //   .then(res => res.json())
    //   .then(data => {
    //     let result = [];

    //     console.log(data);

    //   });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });

    console.log('handleChange')

    let city = e.target.name;
    // city = "Toronto";

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=885c24dac664de0bc9186f32747cf51a`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        let result = [];
        let res_city;

        console.log(data.city.name);

        console.log(data);
      });
  };

  render() {
    console.log('render')
    return (
      <div>
        Weather: {this.state.city}
        {/* <input onClick={this.handleChange} value={this.state.text} /> */}
        <input
          onChange={this.handleChange}
          value={this.state.city}
          name="city"
        />
      </div>
    );
  }
}

export default Weather;
