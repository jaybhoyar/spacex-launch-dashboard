import React from "react";
import { Dropdown } from "semantic-ui-react";

const launchTimelines = [
	{
		key: "All",
		text: "All Launches",
		value: "All",
	},
	{
		key: "Upcoming",
		text: "Upcoming Launches",
		value: "upcoming",
	},
	{
		key: "Past",
		text: "Past Launches",
		value: "past",
	},
];

function FilterByTimeline({ setTimeline }) {
	const handleChange = (e, { value }) => {
		setTimeline(value);
	};
	return (
		<div className="timeline-filter">
			<p className="filter-name-label text-align-center">
				Launch Timeline
			</p>
			<Dropdown
				fluid
				selection
				defaultValue="All"
				options={launchTimelines}
				onChange={handleChange}
			/>
		</div>
	);
}

export default FilterByTimeline;
