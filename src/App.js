import React from 'react';
import './App.css';
import ContactUs from './components/email/email';
import Footer from './components/footer/footer';
import Profile from './components/profile/profile';
import Projects from './components/projects/projects';

function App() {
  return (
    <div className="app">
      <Profile />
      <Projects />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
