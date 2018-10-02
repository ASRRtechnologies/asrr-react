import React, {Component} from 'react';
import Menu from './Components/Menu';
import Landing from './Components/Landing';
import Clients from './Components/Clients';
import './App.css';
import SimpleSlider from "./Components/Slider";

class App extends Component {
  render() {
    return (
      <div className="App">
	      <Menu/>
	      <Landing/>
	      <SimpleSlider/>
	      <Clients/>
      </div>
    );
  }
}

export default App;
