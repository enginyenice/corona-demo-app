import React, { Component } from 'react'
import Card from './Card'
import axios from "axios";
let olenSayisi = 0;
let iyilesenSayisi = 0;
let hastaSayisi = 0;
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
      .then(data => this.setState({ data: data.data.data }))
      .then(() => {
        this.state.data.forEach(element => {
          let item = element.countryStats;
          this.setState({olenSayisi, olenSayisi})
          this.setState({hastaSayisi, hastaSayisi})
          this.setState({iyilesenSayisi, iyilesenSayisi})
          olenSayisi += parseInt(item.deathCount);
          hastaSayisi += parseInt(item.confirmedCount);
          iyilesenSayisi += parseInt(item.recovryCount);
        });
      })
      .catch(err => {
        console.log(err);
        return null;
      });
  };
  render() {
    return (
      <div className="container-fluid">
        


        {this.state.data.length != 0 ? (
          <Card
          ulkeAdi="Dunya"
          hastaSayisi={hastaSayisi}
          iyilesenSayisi={iyilesenSayisi}
          olenSayisi={olenSayisi}
          ></Card>
          
          
          ) : (
            <>
            </>
          )}
        

        {this.state.data.length === 0 ? (
          <>
            <Card
              ulkeAdi="Yukleniyor"
              hastaSayisi="Yukleniyor"
              iyilesenSayisi="Yukleniyor"
              olenSayisi="Yukleniyor"
            />
            <Card
              ulkeAdi="Yukleniyor"
              hastaSayisi="Yukleniyor"
              iyilesenSayisi="Yukleniyor"
              olenSayisi="Yukleniyor"
            />
            <Card
              ulkeAdi="Yukleniyor"
              hastaSayisi="Yukleniyor"
              iyilesenSayisi="Yukleniyor"
              olenSayisi="Yukleniyor"
            />
            <Card
              ulkeAdi="Yukleniyor"
              hastaSayisi="Yukleniyor"
              iyilesenSayisi="Yukleniyor"
              olenSayisi="Yukleniyor"
            />
            <Card
              ulkeAdi="Yukleniyor"
              hastaSayisi="Yukleniyor"
              iyilesenSayisi="Yukleniyor"
              olenSayisi="Yukleniyor"
            />
            <Card
              ulkeAdi="Yukleniyor"
              hastaSayisi="Yukleniyor"
              iyilesenSayisi="Yukleniyor"
              olenSayisi="Yukleniyor"
            />
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
