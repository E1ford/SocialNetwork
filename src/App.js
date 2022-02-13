import React from 'react';
import HeaderContainer from './components/HeaderContainer/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';
import MessagesContainer from './components/Messages/MessagesConteiner';
import FindUsersContainer from './components/FindUsers/FindUsersConteiner';






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

                        <Route exact path="/profile/:userId?" render={()=> 
                        <ProfileContainer />}/>

                        <Route  path="/messages" render={()=> 
                        <MessagesContainer/>}/>
                        
                        <Route path="/news" render={()=> 
                        <News/>}/>

                        <Route path="/music" render={()=> 
                        <Music/>}/>
                        <Route path="/findUsers" render={()=> 
                        <FindUsersContainer/>}/>

                        <Route path="/settings" render={()=> 
                        <Settings/>}/>
                    </div>
                </div>
            </div>
        </div>
    </BrowserRouter>
    )
}
export default App;