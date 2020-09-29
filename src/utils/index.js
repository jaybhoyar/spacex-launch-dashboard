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

const generateSearchTerm = (
	timeline,
	startDate,
	endDate,
	status,
	activePage
) => {
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
		const limit = 10;
		searchTerm.push(`limit=${limit}`);
		searchTerm.push(`offset=${(activePage - 1) * limit}`);
	}

	if (status === true) {
		searchTerm.push(`launch_success=${status}`);
	} else if (status === false) {
		searchTerm.push(`launch_success=false`);
	}
	searchTerm = searchTerm.join("&");
	if (timeline === "All") {
		return `/?${searchTerm}`;
	} else {
		return `/${timeline}?${searchTerm}`;
	}
};

const generateUrlParams = (term) => {
	let mainTerm = term.substring(1);
	let arr = mainTerm.split("&");

	if (arr.includes("launch_success=true")) {
		return true;
	} else if (arr.includes("launch_success=false")) {
		return false;
	}
	// if (arr.length === 5) {
	// 	urlStatus = arr[4].split("=")[1];
	// 	urlStartDate = arr[0].split("=")[1];
	// 	urlEndDate = arr[1].split("=")[1];
	// 	return [urlStartDate, urlEndDate, urlStatus];
	// } else if (arr.length === 4) {
	// 	urlStartDate = arr[0].split("=")[1];
	// 	urlEndDate = arr[1].split("=")[1];
	// 	return [urlStartDate, urlEndDate];
	// } else if (arr.length === 2) {
	// 	return [];
	// }
};

export {
	getStatusLabel,
	getFormattedDate,
	generateSearchTerm,
	generateUrlParams,
};
