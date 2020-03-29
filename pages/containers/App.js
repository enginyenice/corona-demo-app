import React, { Component } from 'react'
import Card from './Card'
import axios from "axios";

export default class App extends Component {
  state = {
    data: [],
    olenSayisi: 0,
    iyilesenSayisi: 0,
    hastaSayisi: 0
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    let date = new Date();
    console.log(date.getTime())
    axios
      .get("https://cors-anywhere.herokuapp.com/https://corona.cbddo.gov.tr/Home/GetTotalData2?_=" + date.getTime())
      .then(data => this.setState({ data: data.data.data }))
      .catch(err => {
        console.log(err);
        return null;
      });
  };
  render() {
    return (
      <div className="container-fluid">
        {this.state.data.length === 0 ? (
          <div>Yükleniyor...</div>
        ) : (
            this.state.data.map((e, i) => {
              return <Card
                key={i}
                ulkeAdi={e.countryStats.name}
                hastaSayisi={e.countryStats.confirmedCount}
                iyilesenSayisi={e.countryStats.recovryCount}
                olenSayisi={e.countryStats.deathCount}
              />
            })
          )
        }
      </div>
    );
  }
}
