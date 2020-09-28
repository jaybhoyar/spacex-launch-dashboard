/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import FilterByTimeline from "./FilterByTimeline";
import FilterByDate from "./FilterByDate";
import FilterByStatus from "./FilterByStatus";
import LaunchList from "./LaunchList";

import { generateSearchTerm } from "../utils/index";

function Dashboard(props) {
	const [launches, setlaunches] = useState([]);

	const [timeline, setTimeline] = useState("");
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [status, setStatus] = useState("");
	const [activePage, setActivePage] = useState(1);
	const [launchCount, setLaunchCount] = useState("");
	const [isLoading, setIsLoading] = useState(Boolean);

	const searchTerm = props.location.pathname + props.location.search;
	const getLaunches = async () => {
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
		setlaunches([]);
		getLaunches(searchTerm);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchTerm]);

	useEffect(() => {
		const term = generateSearchTerm(
			timeline,
			startDate,
			endDate,
			status,
			activePage
		);
		props.history.push(term);
	}, [timeline, startDate, endDate, status, activePage, props.history]);

	useEffect(() => {
		let word = props.location.pathname.substring(1);
		setTimeline(word);
		// let mainTerm = props.location.search.substring(1);
		// let arr = mainTerm.split("&");
		// console.log(arr);
		// var urlStatus;
		// var urlStartDate;
		// var urlEndDate;
		// if (arr.length === 5) {
		// 	urlStatus = arr[4].split("=")[1];
		// 	urlStartDate = arr[0].split("=")[1];
		// 	urlEndDate = arr[1].split("=")[1];
		// 	setStartDate(urlStartDate);
		// 	setEndDate(urlEndDate);
		// 	setStatus(urlStatus);
		// 	console.log(urlStatus, urlStartDate, urlEndDate);
		// } else if (arr.length === 4) {
		// 	urlStartDate = arr[0].split("=")[1];
		// 	urlEndDate = arr[1].split("=")[1];
		// 	setStartDate(urlStartDate);
		// 	setEndDate(urlEndDate);
		// }
	}, []);
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
				<LaunchList
					isLoading={isLoading}
					launches={launches}
					activePage={activePage}
					setActivePage={setActivePage}
					launchCount={launchCount}
				/>
			</div>
		</>
	);
}

export default withRouter(Dashboard);
