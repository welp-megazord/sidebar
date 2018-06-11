import React, { Component } from 'react';
import styles from './Misc.css';

const Misc = ({misc}) => (
      <div>
        <ul className={styles.list}>
          <li className={[styles.title, styles.height].join(' ')}>More business info</li>
          {Object.keys(misc).map((item, i) => (
            !misc[item] ?
              ''
              :
              <li key={i} className={styles.height}>{item.replace(/_/gi, ' ').replace(/Z/, '-')}<span className={styles.desc}>{'   '}{misc[item]}</span></li>
          ))}         
        </ul>
      </div>
)

export default Misc;