import React from 'react';
import './App.scss';
import Header from '../components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from '../routers/Home/Home';
import About from '../routers/About/About';

function App() {
  return (
    <div className="App">
    	<Header/>
		<Routes>
			<Route path={"/"} element={<Home/>}/>
			<Route path={"/about"} element={<About/>}/>
		</Routes>
    </div>
  );
}

export default App;
