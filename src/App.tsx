import React, { useState } from 'react';
import { UserProvider } from './context/user';
import { IUser } from './interfaces'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
;
import ProtectedRoute from './components/auth/protectedRoute';
import Register from './views/auth/register';
import Login from './views/auth/login';
import Home from './views/home';
import Landing from './views/landing';
import Profile from './views/profile';

function App() {
  
  const [user, setUser] = useState<IUser>({
    logged: false, // Set to true to fake login.
    name: "£500 Loot Box",
    id: "500-500-500-500"
  });
  



  
  return (
    <UserProvider value={{ user, setUser }}>
      <Router>



        <Switch>

          <Route exact path="/">
            {/* Switch landing page to dashboard page based on if they are logged in! */}
            {
              user.logged ? (
                /* What they see if logged in*/
                <Home />
              ) : (
                /* What the see if not logged in */
                <Landing />
              )
            }
          </Route>

          {/* Public routes */}
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          
          {/* Any routes that need to be protected via a login should look like below */}
          <ProtectedRoute path="/profile">
            <Profile />
          </ProtectedRoute>


        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
