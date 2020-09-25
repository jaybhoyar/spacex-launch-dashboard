import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

function App() {
	return (
		<div className="App" id="fonts">
			<Navbar />
			<div className="main-container">
				<Dashboard />
			</div>
		</div>
	);
}

export default App;
