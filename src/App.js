import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Portfolio from './pages/portfolio';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import NoMatch from './pages/NoMatch';
import Layout from './components/Layout';
import NavBar from './components/NavBar';
import JumboTron from './components/Jumbotron';

class App extends React.Component {
  render(){
    return (
       <React.Fragment>
         <NavBar />
         <JumboTron />
         <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
         </Layout>
       </React.Fragment>
    );
  }
}

export default App;
