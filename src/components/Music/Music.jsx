import React from 'react';
import styles from './Music.module.css';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';

const Music = () => {
  return <div className={styles.Music}></div>;
};

export default compose(withAuthRedirect)(Music);
