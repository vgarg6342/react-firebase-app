import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ToDo from './components/ToDo'
import ResponsiveDrawer  from './components/Side'
import './App.css';
import FrontPage from './components/FrontPage';
import Project from './components/Project'
import ProjectDis from './components/ProjectDis'



function App() {
  return (
    <Router>
    <div className="App">
    <ResponsiveDrawer/>
      <Switch>
      <Route path = '/' exact component ={FrontPage}/>
      <Route path = '/project'exact component= {Project}/>
      <Route path= "/:id" exact component = {ToDo}/>
      <Route path= "/project/:id" exact component= {ProjectDis}/>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
