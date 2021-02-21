import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function FilterByDate({ startDate, endDate, setStartDate, setEndDate }) {
	return (
		<div className="date-filter">
			<div className="text-align-center date-box">
				<p className="filter-name-label ">Start Date</p>
				<DatePicker
					selected={startDate}
					selectsStart
					isClearable
					dateFormat="yyyy/MM/dd"
					showYearDropdown
					showMonthDropdown
					onChange={(date) => setStartDate(date)}
					placeholderText="Start Date"
				/>
			</div>
			<div className="text-align-center date-box">
				<p className="filter-name-label">End Date</p>
				<DatePicker
					selected={endDate}
					selectsStart
					isClearable
					dateFormat="yyyy/MM/dd"
					showYearDropdown
					showMonthDropdown
					onChange={(date) => setEndDate(date)}
					placeholderText="End Date"
				/>
			</div>
		</div>
	);
}

export default FilterByDate;
