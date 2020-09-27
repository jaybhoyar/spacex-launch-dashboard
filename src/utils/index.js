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

// const dateValidator = (startDate, endDate) => {
// 	if (startDate && endDate) {
// 		if (!moment(startDate).isBefore(moment(endDate))) {
// 			return false;
// 		} else {
// 			return true;
// 		}
// 	}
// 	// return true;
// };

const generateSearchTerm = ({
	timeline,
	startDate,
	endDate,
	status,
	setSearchTerm,
	activePage,
}) => {
	let searchTerm = [];
	if (startDate) {
		startDate = moment(startDate).format("YYYY-MM-DD");
		searchTerm.push(`start=${startDate}`);
		if (!endDate) {
			searchTerm.push(`end=2030-01-01`);
		}
	}
	if (endDate) {
		endDate = moment(endDate).format("YYYY-MM-DD");
		searchTerm.push(`end=${endDate}`);
		if (!startDate) {
			searchTerm.push(`start=2002-05-06&`);
		}
	}
	if (activePage) {
		searchTerm.push(`limit=10`);
		searchTerm.push(`offset=${(activePage - 1) * 10}`);
	}

	if (status === true) {
		searchTerm.push(`launch_success=${status}`);
	} else if (status === false) {
		searchTerm.push(`launch_success=false`);
	}
	searchTerm = searchTerm.join("&");
	if (timeline !== "All") {
		console.log(timeline);
		setSearchTerm(`/${timeline}?${searchTerm}`);
	} else {
		setSearchTerm(`?${searchTerm}`);
	}
};

export { getStatusLabel, getFormattedDate, generateSearchTerm };
