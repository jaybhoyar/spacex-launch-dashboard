import React from "react";
import { Button } from "semantic-ui-react";
import moment from "moment";

const getStatusLabel = (launch_success) => {
	if (launch_success === null) {
		return (
			<Button size="tiny" color="yellow">
				Upcoming
			</Button>
		);
	} else if (launch_success) {
		return (
			<Button positive size="tiny" color="yellow">
				Successful
			</Button>
		);
	} else {
		return (
			<Button negative size="tiny">
				Failed
			</Button>
		);
	}
};

const getFormattedDate = (utcDate) => {
	return moment(utcDate).utc().format("DD MMMM YYYY HH:mm");
};

const generateSearchTerm = ({
	timeline,
	startDate,
	endDate,
	status,
	setSearchTerm,
}) => {
	if (status === true) {
		setSearchTerm(`?launch_success=${status}`);
	} else if (status === false) {
		setSearchTerm(`?launch_success=${status}`);
	} else if (status === "All") {
		setSearchTerm(``);
	}
	if (timeline && !startDate && !endDate) {
		setSearchTerm(timeline);
	} else if (timeline && startDate && endDate) {
		setSearchTerm(`${timeline}?start=${startDate}&end=${endDate}`);
	} else if (endDate && !startDate) {
		setSearchTerm(`?start=2006-01-01&end=${endDate}`);
	} else if (startDate && !endDate) {
		setSearchTerm(`?start=${startDate}&end=2030-01-01`);
	}
};

export { getStatusLabel, getFormattedDate, generateSearchTerm };
