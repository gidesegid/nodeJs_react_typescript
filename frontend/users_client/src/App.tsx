import * as React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import UsersInfo from './components/Users/UsersInfo'
import Details from './components/Details/Details'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import { NavigationBar } from './components/Navbar/Navbar';
const App:React.FC=props=>{
  return(
    <div className="home">
      <BrowserRouter>
        <React.Fragment>
          <Router>
            <NavigationBar />
          </Router>
        </React.Fragment>
        <Switch>
          <Route exact path="/" component={UsersInfo}></Route>
          <Route exact path="/:id/details" component={Details}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
export default App;