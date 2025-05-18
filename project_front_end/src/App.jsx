
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import { Provider } from 'react-redux';
import store from './redux/store';
import Footer from './components/Footer';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <HomePage />
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
