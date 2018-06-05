import React, { Component } from 'react';
import styles from './Hours.css';
import moment from 'moment';

export default class Hours extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  render() {
    const hours = this.props.hours;
    const now = moment().format('H') * 60 + moment().format('m') * 1;
    const min = (time) => {
      return time.slice(0,5).replace(/:/, '').trim().slice(2) * 1;
    }
    const oneTime = (time) => {
      return time.slice(10).trim();
    }
    const twoTimes = (time) => {
      return time.slice(-18).replace(/\n/, '').trim();
    }

    return (
      <div>
        <table className={styles.table}>
          <tr>
            <th className={styles.title}>Hours</th>
          </tr>
        {Object.keys(hours).map((day, i) => (
          <tr className={styles.row} key={i}>
            <td className={[styles.day, styles.td].join(' ')}>{day}</td>
            <td className={[styles.td, styles.td2].join(' ')}><pre className={[styles.font_times, styles.td].join(' ')}>{hours[day]}</pre></td>
            <td className={styles.td}>
              {
                day !== moment().format('ddd') ?
                  ''
                  :
                  now >= parseInt(hours[day]) * 60 + min(hours[day]) && now <= (parseInt(oneTime(hours[day])) + 12) * 60 + min(oneTime(hours[day])) ?
                    <span className={styles.open}>Open now</span>
                    :
                    hours[day].length < 25 ?
                      <span className={styles.closed}>Closed now</span>
                      :
                      now < (parseInt(twoTimes(hours[day])) + 12) * 60 + min(twoTimes(hours[day]))?
                        <span className={styles.closed}>Closed now</span>
                        :
                        now <= (parseInt(oneTime(twoTimes(hours[day]))) + 12) * 60 + min(oneTime(twoTimes(hours[day]))) ? 
                          <span className={styles.open}><br />Open now</span>
                          :
                          <span className={styles.closed}><br />Closed now</span>
                }
            </td>
          </tr>
        ))}
          <tr className={styles.heightUp}>
            <td colspan="2" className={styles.editBusiness}><i class="fas fa-ban"></i><span className={styles.editBusinessName}>Edit business info</span></td>
          </tr>
        </table>
      </div>
    )
  }
}