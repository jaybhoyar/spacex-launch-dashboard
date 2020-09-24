import React from "react";
import { Dropdown, Form } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

const launchStatuses = [
	{
		key: "All Launches",
		text: "All ",
		value: "All",
	},
	{
		key: "Successful",
		text: "Successful",
		value: "Successful",
	},
	{
		key: "Failed",
		text: "Failed",
		value: "Failed",
	},
];
function Dashboard() {
	return (
		<>
			<div className="dashboard-container">
				<div className="filters-container">
					<div className="timeline-filter">
						<p className="filter-name-label text-align-center">
							Launch Timeline
						</p>
						<Dropdown
							placeholder="Select Launch Timeline"
							fluid
							selection
							options={launchTimelines}
						/>
					</div>
					<div className="multiple-filters">
						<div className="date-filter">
							<Form>
								<Form.Group>
									<Form.Field className="text-align-center">
										<label className="filter-name-label">
											Start Date
										</label>
										<DatePicker
											selectsStart
											isClearable
											showYearDropdown
											dateFormat="yyyy/MM/dd"
											placeholderText="Start Date"
										/>
									</Form.Field>
									<Form.Field className="text-align-center">
										<label className="filter-name-label">
											End Date
										</label>
										<DatePicker
											selectsStart
											isClearable
											showYearDropdown
											dateFormat="yyyy/MM/dd"
											placeholderText="End Date"
										/>
									</Form.Field>
								</Form.Group>
							</Form>
						</div>
						<div className="status-filter">
							<p className="filter-name-label text-align-center">
								Launch Status
							</p>
							<Dropdown
								placeholder="Select Launch Status"
								fluid
								selection
								options={launchStatuses}
							/>
						</div>
					</div>
				</div>
				<div className="table-container"></div>
			</div>
		</>
	);
}

export default Dashboard;
