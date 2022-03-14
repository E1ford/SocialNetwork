import React from 'react';
import styles from './ball.module.css';
import baall from './logica';

const Ball = () => {
  let [status, setStatus] = React.useState(true);
  let refCanva = React.useRef(null);
  let startedGame = () => {
    status &&
      baall(refCanva.current, 2, -2, () => {
        setStatus(true);
      });
    setStatus(false);
  };
  let startedGameCheat = () => {
    status &&
      baall(refCanva.current, 1, 1, () => {
        setStatus(true);
      });
    setStatus(false);
  };
  let stopGame = () => {
    // status && baall(refCanva.current,1,1,()=>{setStatus(true)})
    // setStatus(false)
  };
  return (
    <div className={styles.News}>
      <canvas
        ref={refCanva}
        className={styles.canva}
        id="myCanvas"
        width="480"
        height="320"></canvas>
      <div className={styles.buttonStart}>
        <div onClick={stopGame} className={styles.stop}>
          | |
        </div>
        <div onClick={startedGame} className={styles.start}>
          старт
        </div>
        <div onClick={startedGameCheat} className={styles.cheat}>
          чит
        </div>
      </div>
    </div>
  );
};
export default Ball;
