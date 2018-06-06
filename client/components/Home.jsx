import React, { Component } from 'react';
import Details from './Details.jsx';
import Hours from './Hours.jsx';
import Misc from './Misc.jsx';
import axios from 'axios';

export default class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      details: {},
      hours: {},
      misc: {}
    }
  }

  componentDidMount() {
    //random search on refresh
    
    this.addRestaurants();
    
  }

  addRestaurants() {
    const e = Math.floor(Math.random() * 100 + 1);
    // axios.post('/api/restaurants')
    //   .then((data) => {
        this.getDetails(e);
        this.getHours(e);
        this.getMisc(e);
      // })
      // .catch((err) => console.log('err from post ', err))

      console.log('searching for id ', e)
  }

  getDetails(e) {
    axios('/api/details', {params: { rid: e }})
      .then(details => {
        delete details.data[0].id;
        delete details.data[0].rid;
        this.setState({ details: details.data[0] })
      })
      .catch(err => {
        console.log('failed /api/details get ', err);
      })
  }

  getHours(e) {
    axios('/api/hours', {params : { rid: e }})
      .then(hours => {
        delete hours.data[0].id;
        delete hours.data[0].rid
        this.setState({ hours: hours.data[0] })
      })
      .catch(err => {
        console.log('failed to load /api/hours ', err)
      })
  }

  getMisc(e) {
    axios('/api/misc', {params: { rid: e }})
      .then(misc => {
        delete misc.data[0].id;
        delete misc.data[0].rid;
        this.setState({ misc: misc.data[0] })
      })
      .catch(err => {
        console.log('failed /api/misc get ', err);
      })
  }

  render() {
    return(
      <div>
        <div>
          <Details details={this.state.details} hours={this.state.hours}/>
        </div>
        <div>
          <Hours hours={this.state.hours}/>
        </div>
        <div>
          <Misc misc={this.state.misc}/>
        </div>
      </div>
    )
  }
}
