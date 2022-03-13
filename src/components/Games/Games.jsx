import React from 'react';
import styles from './Games.module.css';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import baall from './logica';


const Games = () =>{
    let [status,setStatus] = React.useState(true)
    let refCanva = React.useRef(null)
    let startedGame =()=>{
        status && baall(refCanva.current,2,-2,()=>{setStatus(true)});
        setStatus(false)
    }
    let startedGameCheat =()=>{
        status && baall(refCanva.current,1,1,()=>{setStatus(true)})
        setStatus(false)
    }
    return( <div className={styles.News}>
                <canvas ref={refCanva} className={styles.canva} id="myCanvas" width="480" height="320">
                </canvas>
                <div onClick={startedGame} className={styles.start}>старт</div>
                <div onClick={startedGameCheat} className={styles.cheat}>чит</div>
            </div>
            )
}
// export default compose(withAuthRedirect)(Games);
export default Games
