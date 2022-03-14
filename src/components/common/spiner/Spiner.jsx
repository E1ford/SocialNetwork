import React from 'react';
import styles from './Spiner.module.css';
import duck from '../../../assets/images/spiner.gif';

const Spiner = (props) => {
  return (
    <div className={styles.wrapper}>
      <img src={duck} alt=""></img>
    </div>
  );
};

export default Spiner;
