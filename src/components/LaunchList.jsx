import React, { useState } from "react";
import { Table, Loader } from "semantic-ui-react";

import Modal from "./Modal";
import Paginate from "./Paginate";
import { getStatusLabel, getFormattedDate } from "../utils/index";

function LaunchList({
	isLoading,
	launches,
	activePage,
	setActivePage,
	launchCount,
}) {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [launchDetails, setLaunchDetails] = useState({});
	const handleClose = () => setModalIsOpen(false);

	const handleEvents = (launch) => {
		setModalIsOpen(true);
		setLaunchDetails(launch);
	};

	return (
		<>
			{modalIsOpen ? (
				<Modal
					modalStatus={modalIsOpen}
					handleClose={handleClose}
					launchDetails={launchDetails}
				/>
			) : (
				""
			)}
			{!isLoading ? (
				<>
					<div className="table-container">
						<Table celled color="black" textAlign="center">
							<Table.Header>
								<Table.Row>
									<Table.HeaderCell className="table-heading-small">
										Flight No.
									</Table.HeaderCell>
									<Table.HeaderCell className="table-heading">
										Mission
									</Table.HeaderCell>
									<Table.HeaderCell>Orbit</Table.HeaderCell>
									<Table.HeaderCell>Rocket</Table.HeaderCell>
									<Table.HeaderCell>
										lauched (UTC)
									</Table.HeaderCell>
									<Table.HeaderCell>Status</Table.HeaderCell>
								</Table.Row>
							</Table.Header>

							<Table.Body>
								{launches.map((launch) => {
									return (
										<Table.Row
											key={launch.flight_number}
											onClick={() =>
												handleEvents(
													launch.mission_name
												)
											}
										>
											<Table.Cell>
												{launch.flight_number}
											</Table.Cell>
											<Table.Cell>
												{launch.mission_name}
											</Table.Cell>
											<Table.Cell>
												{
													launch.rocket.second_stage
														.payloads[0].orbit
												}
											</Table.Cell>
											<Table.Cell>
												{launch.rocket.rocket_name}
											</Table.Cell>

											<Table.Cell>
												{getFormattedDate(
													launch.launch_date_utc
												)}
											</Table.Cell>
											<Table.Cell>
												{getStatusLabel(
													launch.launch_success
												)}
											</Table.Cell>
										</Table.Row>
									);
								})}
							</Table.Body>
						</Table>
					</div>
					<Paginate
						activePage={activePage}
						setActivePage={setActivePage}
						launchCount={launchCount}
					/>
				</>
			) : (
				<div className="table-container">
					<Loader active inverted inline="centered" size="big" />
				</div>
			)}
		</>
	);
}

export default LaunchList;
