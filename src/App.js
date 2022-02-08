import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';
import MessagesContainer from './components/Messages/MessagesConteiner';
import FindUsersContainer from './components/FindUsers/FindUsersConteiner';






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

                        <Route exact path="/Profile/:userId?" render={()=> 
                        <ProfileContainer />}/>

                        <Route  path="/Messages" render={()=> 
                        <MessagesContainer/>}/>
                        
                        <Route path="/News" render={()=> 
                        <News/>}/>

                        <Route path="/Music" render={()=> 
                        <Music/>}/>
                        <Route path="/FindUsers" render={()=> 
                        <FindUsersContainer/>}/>

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