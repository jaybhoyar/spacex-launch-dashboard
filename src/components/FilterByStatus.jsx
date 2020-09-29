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
		value: true,
	},
	{
		key: "Failed",
		text: "Failed",
		value: false,
	},
];

function FilterByStatus({ status, setStatus }) {
	const handleChange = (e, { value }) => {
		setStatus(value);
	};
	return (
		<div className="status-filter">
			<p className="filter-name-label text-align-center">Launch Status</p>
			<Dropdown
				fluid
				selection
				value={status}
				options={launchStatuses}
				onChange={handleChange}
			/>
		</div>
	);
}

export default FilterByStatus;
