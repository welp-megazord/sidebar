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
    this.addRestaurants();
  }

  addRestaurants() {
    axios.post('/api/restaurants')
      .then((data) => {
        this.getDetails();
        this.getHours();
        this.getMisc();
      })
      .catch((err) => console.log('err from post ', err))
  }

  getDetails() {
    axios('/api/details', {params: { rid: 2 }})
      .then(details => {
        delete details.data[0].id;
        delete details.data[0].rid;
        this.setState({ details: details.data[0] })
      })
      .catch(err => {
        console.log('failed /api/details get ', err);
      })
  }

  getHours() {
    axios('/api/hours', {params : { rid: 1 }})
      .then(hours => {
        delete hours.data[0].id;
        delete hours.data[0].rid
        this.setState({ hours: hours.data[0] })
      })
      .catch(err => {
        console.log('failed to load /api/hours ', err)
      })
  }

  getMisc() {
    axios('/api/misc', {params: { rid: 2 }})
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
