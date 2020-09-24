import React from "react";
import { Dropdown, Form } from "semantic-ui-react";

const launchTimelines = [
	{
		key: "All Launches",
		text: "All ",
		value: "All",
	},
	{
		key: "Upcoming",
		text: "Upcoming Launches",
		value: "Upcoming",
	},
	{
		key: "Past",
		text: "Past Launches",
		value: "Past",
	},
];

function Dashboard() {
	return (
		<>
			<div className="dashboard-container">
				<div className="filters-container">
					<div className="timeline-filter">
						<Form>
							<Form.Field className="text-align-center">
								<label className="filter-name-label">
									Launch Timeline
								</label>
								<Dropdown
									placeholder="Select Launch Timeline"
									fluid
									selection
									options={launchTimelines}
								/>
							</Form.Field>
						</Form>
					</div>
					<div className="multiple-filters">
						<div className="date-filter">
							<div className="date start-date"></div>
							<div className="date end-date"></div>
						</div>
						<div className="status-filter"></div>
					</div>
				</div>
				<div className="table-container"></div>
			</div>
		</>
	);
}

export default Dashboard;
