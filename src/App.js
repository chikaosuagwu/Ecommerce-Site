import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import RoutesPath from './routes/RoutesPath';

function App() {
  return (
    <div className="App">
      <Header />
      <RoutesPath />
      <Footer />
    </div>
  );
}

export default App;
