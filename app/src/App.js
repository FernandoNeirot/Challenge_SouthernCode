import React from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import RoutesList from './routes/RoutesList';

function App() {
  return (
    <React.Fragment>
    <ToastContainer/>
      <RoutesList />
    </React.Fragment>
  );
}

export default App;
