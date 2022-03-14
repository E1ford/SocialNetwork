import React from 'react';
import styles from './Games.module.css';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import Ball from './ball/ball';

const Games = () => {
  return (
    <div className={styles.News}>
      <Ball />
    </div>
  );
};
export default compose(withAuthRedirect)(Games);
