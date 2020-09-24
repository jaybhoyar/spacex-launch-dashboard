import React, { useState } from "react";

import FilterByTimeline from "./FilterByTimeline";
import FilterByDate from "./FilterByDate";
import FilterByStatus from "./FilterByStatus";
import LaunchList from "./LaunchList";
import Modal from "./Modal";

function Dashboard() {
	const [ModalIsOpen, setModalIsOpen] = useState(false);
	const [launchDetails, setLaunchDetails] = useState({});
	const handleClose = () => setModalIsOpen(false);
	const handleShow = () => setModalIsOpen(true);
	const modalDetails = (details) => setLaunchDetails(details);

	return (
		<>
			<button onClick={handleShow}>Open</button>
			{ModalIsOpen ? (
				<Modal
					modalStatus={ModalIsOpen}
					handleClose={handleClose}
					launchDetails={launchDetails}
				/>
			) : (
				<div className="dashboard-container">
					<div className="filters-container">
						<FilterByTimeline />
						<div className="multiple-filters">
							<FilterByDate />
							<FilterByStatus />
						</div>
					</div>
					<LaunchList getModalDetails={(x) => modalDetails(x)} />
				</div>
			)}
		</>
	);
}

export default Dashboard;
