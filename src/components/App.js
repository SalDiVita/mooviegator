import React, { Component} from 'react';
import Navbar from './Nav/Navbar'
import MovieList from './MovieList';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import MovieDetails from './MovieDetails';
import LoginArea from './LoginArea'



class App extends Component {
  state = { message: 'Mooviegtor' }
  render() {
    return (
      <BrowserRouter>    
        <div>
        
          <Navbar 
          />
          <div className="container">
            <Route path="/" exact={true} component={Home} />
            <Route path="/movies" component={MovieList} />
            <Route path="/details" component={MovieDetails} />
            <Route path="/login-area" component={LoginArea} />
          </div>
          
        </div>
      </BrowserRouter>
    );
  }
}



export default App;