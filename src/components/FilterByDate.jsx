import React from "react";
import { Form } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function FilterByDate() {
	return (
		<div className="date-filter">
			<Form>
				<Form.Group>
					<Form.Field className="text-align-center">
						<label className="filter-name-label">Start Date</label>
						<DatePicker
							selectsStart
							isClearable
							showYearDropdown
							dateFormat="yyyy/MM/dd"
							placeholderText="Start Date"
						/>
					</Form.Field>
					<Form.Field className="text-align-center">
						<label className="filter-name-label">End Date</label>
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
	);
}

export default FilterByDate;
