import React from "react";
import { withRouter } from "react-router";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

function App(props) {
	return (
		<div className="App" id="fonts">
			<Navbar />
			<div className="main-container">
				<Dashboard props={props} />
			</div>
		</div>
	);
}

export default withRouter(App);
