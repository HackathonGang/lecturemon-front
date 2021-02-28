import React, { useEffect, useState } from 'react';
import { UserProvider } from './context/user';
import { IUser, IXp } from './interfaces'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
;
import ProtectedRoute from './components/auth/protectedRoute';
import Register from './views/auth/register';
import Login from './views/auth/login';
import Home from './views/home';
import Landing from './views/landing';
import Profile from './views/profile';
import { XpProvider } from './context/xp';
import Polls from './views/polls';
import Leaderboard from './views/leaderboard';
import axios from 'axios';
import Module from './views/module';
import Lecturer from './views/lecturer';

function App() {
  
  const [user, setUser] = useState<IUser>({
    logged: undefined, // Set to true to fake login.
    name: "£500 Loot Box",
    id: 500
  });

  const [xp, setXp] = useState<IXp>({
    current: 21, max: 145, quantifier: "xp", level: 0
  })


  

  useEffect(() => {
    
    axios.get("/api/ping").then(data => {
      setUser({
        logged: true,
        name: data.data.name,
        id: data.data.id
      })

      setXp({
        ...xp,
        current: data.data.xp
      })



    }).catch(err => setUser({logged: false}))

  }, [])

  
  return (
    <XpProvider value={{ xp, setXp }}>
      <UserProvider value={{ user, setUser }}>
        <Router>



          <Switch>

            <Route exact path="/">
              {/* Switch landing page to dashboard page based on if they are logged in! */}
              {
                user.logged === undefined &&
                <p>Loading</p>
              }
              {
                user.logged === true &&  (
                  /* What they see if logged in*/
                  <Home />
                ) 
              }
              { user.logged === false &&
                (
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

            <ProtectedRoute path="/poll/:id">
              <Polls />
            </ProtectedRoute>

            <ProtectedRoute path="/leaderboard">
              <Leaderboard />
            </ProtectedRoute>

            <ProtectedRoute path="/module/:id">
              <Module />
            </ProtectedRoute>

            <ProtectedRoute path="/lecturer/:id">
              <Lecturer />
            </ProtectedRoute>

            <Route>
              <div className="w-screen h-screen flex flex-col items-center justify-center">
                <h1 className="text-7xl mb-2">Error 404</h1>
                <p className="mb-2">The page you tried to access doesn't exist</p>
                <Link to="/" className="btn">Home</Link>
              </div>
            </Route>
          </Switch>
        </Router>
      </UserProvider>
    </XpProvider> 
  );
}

export default App;
