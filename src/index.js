import store from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';




let render = (state)=>{
    ReactDOM.render( 
    <React.StrictMode >
        <App 
            store={store}
            dispatch={store.dispatch}
        />
    </React.StrictMode>,
    document.getElementById('root')
);}

store.subscribe(render);

render(store);
