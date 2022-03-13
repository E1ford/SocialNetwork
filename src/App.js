import React from 'react';
import HeaderContainer from './components/HeaderContainer/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import Games from './components/Games/Games';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';
import MessagesContainer from './components/Messages/MessagesConteiner';
import FindUsersContainer from './components/FindUsers/FindUsersConteiner';
import Login from './components/Login/Login';




const App =()=>{
return(
    <BrowserRouter>
        <div className="Wrapper">
            <div className="head">
                <HeaderContainer/>
                <div className="content container">
                    <div className="navigation">
                            <Navbar/>
                    </div>
                    <div className="contant_midl">

                        <Route exact path="/SocialNetwork/profile/:userId?" render={()=> 
                        <ProfileContainer />}/>

                        <Route  path="/SocialNetwork/messages" render={()=> 
                        <MessagesContainer/>}/>
                        
                        <Route path="/SocialNetwork/games" render={()=> 
                        <Games/>}/>

                        <Route path="/SocialNetwork/music" render={()=> 
                        <Music/>}/>
                        <Route path="/SocialNetwork/findUsers" render={()=> 
                        <FindUsersContainer/>}/>

                        <Route path="/SocialNetwork/settings" render={()=> 
                        <Settings/>}/>

                        <Route path="/SocialNetwork/login" render={()=> 
                        <Login/>}/>
                    </div>
                </div>
            </div>
        </div>
    </BrowserRouter>
    )
}
export default App;