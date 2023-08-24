import { React, Component } from 'react';
import Navbar from '../components/Navbar';
import AccessForm from '../components/AccessForm';
import '../assets/styles/Home.css';

class Home extends Component {
  render(){
    return (
      <div className='index-container flex-center'>
        <Navbar />
        <div className='index-landing-view flex-center'>
          <AccessForm />
        </div>
      </div>
    );
  }
}
export default Home;
