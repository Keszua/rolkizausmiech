import React from 'react';
//import '../css/style.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';



function App() {
  return (
    <Router>
      <div className="app">
        <header className="App-header">
          {<Header/>}
        </header>

        <main>
          <aside>
            {<Navigation/>}
          </aside>
          <section className="page">
            <Page/>
          </section>
        </main>
        
        <footer> {<Footer/>} </footer>
      </div>
    </Router>
  );
}

export default App;
