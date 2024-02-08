import React from 'react';
import './App.scss';
import Header from '../components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from '../routers/Home/Home';

function App() {
  return (
    <div className="App">
    	<Header/>
		<Routes>
			<Route path={"/"} element={<Home/>}/>
		</Routes>
    </div>
  );
}

export default App;
