import React, { useState, useEffect } from "react";
import axios from "axios";

import FilterByTimeline from "./FilterByTimeline";
import FilterByDate from "./FilterByDate";
import FilterByStatus from "./FilterByStatus";
import LaunchList from "./LaunchList";
import { generateSearchTerm } from "../utils/index";

function Dashboard() {
	const [launches, setlaunches] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [timeline, setTimeline] = useState("");
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);

	const getLaunches = async () => {
		try {
			const res = await axios.get(
				`https://api.spacexdata.com/v3/launches${searchTerm}`
			);
			setlaunches(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getLaunches();
	}, [searchTerm]);

	useEffect(() => {
		generateSearchTerm({ timeline, startDate, endDate, setSearchTerm });
	}, [timeline, startDate, endDate]);

	return (
		<>
			<div className="dashboard-container">
				<div className="filters-container">
					<FilterByTimeline setTimeline={setTimeline} />
					<div className="multiple-filters">
						<FilterByDate
							startDate={startDate}
							endDate={endDate}
							setStartDate={setStartDate}
							setEndDate={setEndDate}
						/>
						<FilterByStatus />
					</div>
				</div>
				<LaunchList launches={launches} />
			</div>
		</>
	);
}

export default Dashboard;
