import React from 'react';
import styles from './Settings.module.css';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';

const Settings = () => {
  return <div className={styles.Settings}></div>;
};

export default compose(withAuthRedirect)(Settings);
