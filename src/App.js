import React, { Component } from 'react';

import ScrollableAnchor from "react-scrollable-anchor";

import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Directions from "./components/Directions";
import Projects from "./components/Projects";

import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SiteDrawer/SiteDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
class App extends Component {
	state = {
		drawerOpen: false
	}

	sidebarToggle = () => {
		this.setState((prevState) => {
			this.setState({ drawerOpen: !prevState.drawerOpen });
		})
	}

	onDrawerClick = () => {
		this.setState({ drawerOpen: false });
	}

	render() {
		var backdrop;

		if (this.state.drawerOpen) {
			backdrop = <Backdrop onDrawerClick={this.onDrawerClick} />;
		}
		return (
			<div className="appContainer">
				<Toolbar sidebarToggle={this.sidebarToggle} />
				<SideDrawer visible={this.state.drawerOpen} />
				{backdrop}

				<Header />
				<a href='#About'>About</a>
				<a href='#Directions'>Directions</a>
				<a href='#Footer'>Footer</a>
				<a href='#Projects'>Projects</a>
				<Layout>
					<ScrollableAnchor id={'About'}>
						<About />
					</ScrollableAnchor>
					<ScrollableAnchor id={'Directions'}>
						<Directions />
					</ScrollableAnchor>
					<ScrollableAnchor id={'Projects'}>
						<Projects />
					</ScrollableAnchor>
					<ScrollableAnchor id={'Footer'}>
						<Footer />
					</ScrollableAnchor>
				</Layout>
			</div>
		);
	}
}

export default App;
