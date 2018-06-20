import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ScrollableAnchor from "react-scrollable-anchor";

import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Directions from "./components/Directions";
import Projects from "./components/Projects";
class App extends Component {
	render() {
		return (
			<div className="appContainer">
				<Header/>
				<a href='#About'>About</a>
				<a href='#Directions'>Directions</a>
				<a href='#Footer'>Footer</a>
				<a href='#Projects'>Projects</a>
				<Layout>
					<ScrollableAnchor id={'About'}>
						<About/>
					</ScrollableAnchor>
					<ScrollableAnchor id={'Directions'}>
						<Directions/>
					</ScrollableAnchor>
					<ScrollableAnchor id={'Projects'}>
						<Projects/>
					</ScrollableAnchor>
					<ScrollableAnchor id={'Footer'}>
						<Footer/>
					</ScrollableAnchor>
				</Layout>
			</div>
		);
	}
}

export default App;
