import React, { Component } from 'react'
import Card from './Card'
import axios from "axios";
import Loader from "./Loader"



export default class App extends Component {
  state = {
    data: [],
    olenSayisi: Number(0),
    hastaSayisi: Number(0),
    iyilesenSayisi: Number(0)
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    let date = new Date();
    axios
      .get("https://cors-anywhere.herokuapp.com/https://corona.cbddo.gov.tr/Home/GetTotalData2?_=" + date.getTime())
      .then(data => this.setVirusData(data))
      .catch(err => {
        console.log(err);
        return null;
      });
  };
  setVirusData(data) {
    let olenSayisi = 0;
    let iyilesenSayisi = 0;
    let hastaSayisi = 0;
    this.setState({ data: data.data.data })
    let item = data.data.data;
    console.clear()
    item.forEach(element => {
      olenSayisi += element.countryStats.deathCount
      iyilesenSayisi += element.countryStats.recovryCount
      hastaSayisi += element.countryStats.confirmedCount
    });
    this.setState({ olenSayisi: olenSayisi })
    this.setState({ iyilesenSayisi: iyilesenSayisi })
    this.setState({ hastaSayisi: hastaSayisi })
  }


  render() {
    return (
      <div className="container-fluid">

        {this.state.data.length != 0 ? (
          <Card
            ulkeAdi="Dunya"
            hastaSayisi={this.state.hastaSayisi}
            iyilesenSayisi={this.state.iyilesenSayisi}
            olenSayisi={this.state.olenSayisi}
          />
        ) : (
            <>
            </>
          )}
        {this.state.data.length === 0 ? (
          <>
           <Loader />
           <Loader />
           <Loader />
           <Loader />
           <Loader />
           <Loader />
          </>
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
