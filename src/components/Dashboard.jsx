import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router";

import FilterByTimeline from "./FilterByTimeline";
import FilterByDate from "./FilterByDate";
import FilterByStatus from "./FilterByStatus";
import LaunchList from "./LaunchList";

import { generateSearchTerm, getParamsFromUrl } from "../utils/index";

function Dashboard({ props }) {
	let urlTimeline;
	var urlStatus;
	urlTimeline = props.location.pathname.substring(1) || "";
	const data = getParamsFromUrl(props.location.search);
	if (data !== undefined) {
		if (data.length === 3) {
			urlStatus = data[2];
		} else if (data.length === 1) {
			urlStatus = data[0];
		}
	}

	console.log(data);
	const [launches, setlaunches] = useState([]);
	const [timeline, setTimeline] = useState(urlTimeline || "");
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [status, setStatus] = useState(urlStatus);
	const [activePage, setActivePage] = useState(1);
	const [launchCount, setLaunchCount] = useState("");
	const [isLoading, setIsLoading] = useState(Boolean);

	const getLaunches = async (searchTerm) => {
		try {
			setIsLoading(true);
			const res = await axios.get(
				`https://api.spacexdata.com/v3/launches${searchTerm}`
			);
			setLaunchCount(res.headers["spacex-api-count"]);
			setlaunches(res.data);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		const term = generateSearchTerm(
			timeline,
			startDate,
			endDate,
			status,
			activePage
		);
		getLaunches(term);
		props.history.push(term);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [timeline, startDate, endDate, status, activePage]);

	return (
		<>
			<div className="dashboard-container">
				<div className="filters-container">
					<FilterByTimeline
						timeline={timeline}
						setTimeline={setTimeline}
					/>
					<div className="multiple-filters">
						<FilterByDate
							startDate={startDate}
							endDate={endDate}
							setStartDate={setStartDate}
							setEndDate={setEndDate}
						/>
						<FilterByStatus status={status} setStatus={setStatus} />
					</div>
				</div>
				{launches.length ? (
					<LaunchList
						isLoading={isLoading}
						launches={launches}
						activePage={activePage}
						setActivePage={setActivePage}
						launchCount={launchCount}
					/>
				) : (
					<div className="center-image">
						<img
							src="https://cdn3.vectorstock.com/i/1000x1000/60/27/rocket-missile-crashed-error-not-found-concept-vector-18916027.jpg"
							alt="404"
							width="600"
							height="500"
						/>
					</div>
				)}
			</div>
		</>
	);
}

export default withRouter(Dashboard);
