import { Route, Routes } from 'react-router-dom';
import { Component } from 'react';
import Home from './pages/Home';
import './assets/styles/App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
      </div>
    );
  }
}
export default App;
