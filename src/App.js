import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Nav from './components/Nav/Nav';


const App = (props) => {

  return (
      
      <div className='app-wraper'>
        <Header />
        <Nav state={props.state.NavPage} />
        <MainContent state={props.state} store={props.store} />
      </div>
  );
};

export default App;
