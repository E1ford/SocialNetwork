import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';
import MessagesContainer from './components/Messages/MessagesConteiner';






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

                        <Route exact path="/Profile" render={()=> 
                        <Profile />}/>

                        <Route  path="/Messages" render={()=> 
                        <MessagesContainer/>}/>
                        
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