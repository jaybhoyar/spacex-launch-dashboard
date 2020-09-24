import React from "react";
import { Dropdown } from "semantic-ui-react";

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

function FilterByTimeline() {
	return (
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
	);
}

export default FilterByTimeline;
