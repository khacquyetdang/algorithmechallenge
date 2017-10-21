import React, {
  Component
} from 'react';
import './App.css';
import binaryGap from './binaryGap';

//binaryGap(9);
class App extends Component {
  componentDidMount() {
    console.log("component Did mount");
    binaryGap(9);
  }
  render() {
    return (<div className="App">
      Hello world
      </div>
    );
  }
}

export default App;