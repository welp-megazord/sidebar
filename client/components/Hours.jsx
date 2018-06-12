import React, { Component } from 'react';
import styles from './Hours.css';
import moment from 'moment';

export default class Hours extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    const hours = this.props.hours;
    const today = moment().format('ddd');
    const isOpen1 = this.props.isOpen1;
    const isOpen2 = this.props.isOpen2;
    const early = this.props.early;

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
                day !== today ?
                  ''
                  :
                  isOpen1 ?
                    <span className={styles.open}>Open now</span>
                    :
                    early ?
                      <span className={styles.closed}>Closed now</span>
                      :
                      isOpen2 ?
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