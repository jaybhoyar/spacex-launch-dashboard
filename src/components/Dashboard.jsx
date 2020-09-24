import React from "react";

import FilterByTimeline from "./FilterByTimeline";
import FilterByDate from "./FilterByDate";
import FilterByStatus from "./FilterByStatus";
import LaunchList from "./LaunchList";

function Dashboard() {
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
