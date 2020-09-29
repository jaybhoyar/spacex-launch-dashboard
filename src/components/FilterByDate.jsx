import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function FilterByDate({ date, setDate }) {
	return (
		<div className="date-filter">
			<div className="text-align-center date-box">
				<p className="filter-name-label ">Start Date</p>
				<DatePicker
					value={date.startDate}
					selected={date.startDate}
					selectsStart
					isClearable
					dateFormat="yyyy/MM/dd"
					showYearDropdown
					showMonthDropdown
					onChange={(d) => {
						setDate({ startDate: d });
					}}
					placeholderText="Start Date"
				/>
			</div>
			<div className="text-align-center date-box">
				<p className="filter-name-label">End Date</p>
				<DatePicker
					value={date.endDate}
					selected={date.endDate}
					selectsStart
					isClearable
					dateFormat="yyyy/MM/dd"
					showYearDropdown
					showMonthDropdown
					onChange={(d) => {
						setDate({ endDate: d });
					}}
					placeholderText="End Date"
				/>
			</div>
		</div>
	);
}

export default FilterByDate;
