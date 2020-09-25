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

const generateSearchTerm = ({}) => {};

export { getStatusLabel, getFormattedDate };
