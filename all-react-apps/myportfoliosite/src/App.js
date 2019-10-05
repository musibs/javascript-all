import React from 'react';
import './App.css';
import Welcome from './components/Welcome';

function App() {
  return (
   <div>
      <Welcome name="Somnath" />
    <Welcome name="Musib" />
    <Welcome name="John" />
    <Welcome name="Doe" />
   </div>
  );
}

export default App;
