import React, { useState } from "react";

import FilterByTimeline from "./FilterByTimeline";
import FilterByDate from "./FilterByDate";
import FilterByStatus from "./FilterByStatus";
import LaunchList from "./LaunchList";

function Dashboard() {
	// const [ModalIsOpen, setModalIsOpen] = useState(false);
	// const [launchDetails, setLaunchDetails] = useState({});
	// const handleClose = () => setModalIsOpen(false);
	// const handleShow = () => setModalIsOpen(true);
	// const modalDetails = (details) => setLaunchDetails(details);

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
				<LaunchList />
			</div>
		</>
	);
}

export default Dashboard;
