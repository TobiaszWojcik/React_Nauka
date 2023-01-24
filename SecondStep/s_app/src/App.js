
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import TaskList from './components/TaskList';
import Nav from './components/Nav';
import React from 'react';




function App(props) {

  return (
    <React.StrictMode>
    <Header title="My tasks"/>
    <section>
    <TaskList/>
    </section>
    </React.StrictMode>
  )
}

export default App
