import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';






const App =(props)=>{
return(
    <BrowserRouter>
        <div className="Wrapper">
            <div className="head">
                <Header/>
                <div className="content container">
                    <div className="navigation">
                            <Navbar/>
                    </div>
                    <div className="contant_midl">

                        <Route path="/Profile" render={()=> 
                        <Profile 
                        posts={props.store._state.profile.posts} 
                        newValue={props.store._state.profile.newValue}
                        dispatch={props.dispatch}
                        />}/>

                        <Route path="/messages" render={()=> 
                        <Messages 
                            newValueMessages={props.store._state.messages.newValueMessages}
                            dispatch={props.dispatch}
                            users={props.store.getState().messages.userData}
                            dialogs={props.store.getState().messages.dialogData}
                        />}/>
                        
                        <Route path="/News" render={()=> 
                        <News/>}/>

                        <Route path="/Music" render={()=> 
                        <Music/>}/>

                        <Route path="/Settings" render={()=> 
                        <Settings/>}/>
                        
                    </div>
                </div>
            </div>
        </div>
    </BrowserRouter>
    )
}
export default App;