import React, { useState, useEffect } from "react";
import axios from "axios";

import FilterByTimeline from "./FilterByTimeline";
import FilterByDate from "./FilterByDate";
import FilterByStatus from "./FilterByStatus";
import LaunchList from "./LaunchList";

function Dashboard() {
	const [launches, setlaunches] = useState([]);
	const [searchFilter, setSearchFilter] = useState("");

	const getLaunches = async () => {
		try {
			const res = await axios.get(
				`https://api.spacexdata.com/v3/launches/`
			);
			// console.log(res.data);
			setlaunches(res.data);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getLaunches();
	}, []);

	return (
		<>
			<div className="dashboard-container">
				<div className="filters-container">
					<FilterByTimeline />
					<div className="multiple-filters">
						<FilterByDate />
						<FilterByStatus />
					</div>
				</div>
				<LaunchList launches={launches} />
			</div>
		</>
	);
}

export default Dashboard;
