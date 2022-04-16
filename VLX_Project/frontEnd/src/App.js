
import './App.css';
import MainMenu from './components/sections/MainMenu';

import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';




class App extends React.Component {
  render(){
  return (
    <div className='App'>
      
      <MainMenu/>
     
      
    </div>
    
  );
  }
}

export default App;
