import React from 'react';
import HeaderContainer from './components/HeaderContainer/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import Games from './components/Games/Games';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { HashRouter, Route } from 'react-router-dom';
import MessagesContainer from './components/Messages/MessagesConteiner';
import FindUsersContainer from './components/FindUsers/FindUsersConteiner';
import Login from './components/Login/Login';

const App = () => {
  return (
    <HashRouter>
      <div className="Wrapper">
        <div className="head">
          <HeaderContainer />
          <div className="content container">
            <div className="navigation">
              <Navbar />
            </div>
            <div className="contant_midl">
              <Route exact path="/profile/:userId?" render={() => <ProfileContainer />} />

              <Route path="/messages" render={() => <MessagesContainer />} />

              <Route path="/games" render={() => <Games />} />

              <Route path="/music" render={() => <Music />} />
              <Route path="/findUsers" render={() => <FindUsersContainer />} />

              <Route path="/settings" render={() => <Settings />} />

              <Route path="/login" render={() => <Login />} />
            </div>
          </div>
        </div>
      </div>
    </HashRouter>
  );
};
export default App;
