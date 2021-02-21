import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import "./styles/main.scss";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
