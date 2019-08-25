import React, { Component } from "react";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ""
    };

    this.closeMenu = this.closeMenu.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount", this.state.city);

    this.setState({
      city: "update"
    });

    document.addEventListener("click", this.closeMenu);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });

    console.log("handleChange");

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

  closeMenu() {
    console.log("closeMenu");
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.closeMenu);
    console.log("componentWillUnmount");
    // clearInterval(this.timerID);
  }

  render() {
    console.log("render");
    return (
      <div>
        Weather: {this.state.city}
        {/* <input onClick={this.handleChange} value={this.state.text} /> */}
        <input
          onChange={this.handleChange}
          value={this.state.city}
          name="city"
        />
        <a
          href="javascript:void(0)"
          className="closebtn"
          onClick={this.closeMenu}
        >
          ×
        </a>
      </div>
    );
  }
}

export default Weather;
