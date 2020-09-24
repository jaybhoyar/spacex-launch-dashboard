import React from "react";
import { Dropdown } from "semantic-ui-react";

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

function FilterByStatus() {
	return (
		<div className="status-filter">
			<p className="filter-name-label text-align-center">Launch Status</p>
			<Dropdown
				placeholder="Select Launch Status"
				fluid
				selection
				options={launchStatuses}
			/>
		</div>
	);
}

export default FilterByStatus;
