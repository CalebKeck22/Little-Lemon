import './App.css';
import React from 'react';
import { Header } from './Header';
import { Nav } from './Nav'
import { Main } from './Main';
import { Footer } from './Footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
