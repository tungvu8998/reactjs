import React from 'react';
import './App.css';
import BaseProvider from './components/context/BaseProvider';
import HomePape from './components/HomePage';
import { Link, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  const abc = [1, 2, 3, 4];
  console.log(abc.map(v => v + ": thang"))

  return (
    <BaseProvider>
      <Outlet />
    </BaseProvider>

  );
}

export default App;
