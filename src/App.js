import React from 'react';
import './Css/style.css';
import Front from './Components/Front';
import Mainchat from './Components/Mainchat';
import Login from './Components/Login';
import { useStateValue } from './Components/StateProvider';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {

  const [{ user },] = useStateValue(null);
  // const [user] = useState(false)

  // setUser(user);

  return (
    <div className="app">

      {!user ? (
        <Login />
      ) : (
          <div className="app__content">
            <Router>
              <Switch>
                {/* <Front /> */}

                <Route exact path='/'>
                  <Front />

                </Route>

                <Route path='/rooms/:roomId'>
                  <Mainchat />

                </Route>
              </Switch>
            </Router>
          </div>)}
    </div>
  );
}

export default App;
