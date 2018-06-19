import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ScrollableAnchor from "react-scrollable-anchor";

import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
	render() {
		return (
			<div>
				<a href='#section1'> Go to section 1 </a>
				<a href='#section2'> Go to section 2 </a>
				<Layout>
					<ScrollableAnchor id={'section1'}>
						<Header/>
					</ScrollableAnchor>

					<ScrollableAnchor id={'section2'}>
						<Footer/>
					</ScrollableAnchor>
				</Layout>
			</div>
		);
	}
}

export default App;
