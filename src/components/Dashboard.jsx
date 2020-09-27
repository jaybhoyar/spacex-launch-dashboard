import React, { useState, useEffect } from "react";
import axios from "axios";

import FilterByTimeline from "./FilterByTimeline";
import FilterByDate from "./FilterByDate";
import FilterByStatus from "./FilterByStatus";
import LaunchList from "./LaunchList";

import { generateSearchTerm } from "../utils/index";

function Dashboard() {
	const [launches, setlaunches] = useState([]);
	const [searchTerm, setSearchTerm] = useState(`?limit=10`);
	const [timeline, setTimeline] = useState("");
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [status, setStatus] = useState("");
	const [activePage, setActivePage] = useState(1);
	const [launchCount, setLaunchCount] = useState("");

	const getLaunches = async () => {
		try {
			const res = await axios.get(
				`https://api.spacexdata.com/v3/launches${searchTerm}`
			);
			setLaunchCount(res.headers["spacex-api-count"]);
			setlaunches(res.data);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getLaunches();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchTerm]);

	useEffect(() => {
		generateSearchTerm({
			timeline,
			startDate,
			endDate,
			status,
			setSearchTerm,
			activePage,
		});
	}, [timeline, startDate, endDate, status, activePage]);

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
						<FilterByStatus setStatus={setStatus} />
					</div>
				</div>
				<LaunchList
					launches={launches}
					activePage={activePage}
					setActivePage={setActivePage}
					launchCount={launchCount}
				/>
			</div>
		</>
	);
}

export default Dashboard;
