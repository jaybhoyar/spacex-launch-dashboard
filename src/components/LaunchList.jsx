import React, { useState } from "react";
import { Table } from "semantic-ui-react";
import Modal from "./Modal";

function LaunchList({ launches }) {
	const [ModalIsOpen, setModalIsOpen] = useState(false);
	const [launchDetails, setLaunchDetails] = useState({});
	const handleClose = () => setModalIsOpen(false);
	// const handleShow = () => setModalIsOpen(true);
	const handleEvents = (launch) => {
		setModalIsOpen(true);
		setLaunchDetails(launch);
	};

	return (
		<>
			{ModalIsOpen ? (
				<Modal
					modalStatus={ModalIsOpen}
					handleClose={handleClose}
					launchDetails={launchDetails}
				/>
			) : (
				<div className="table-container">
					<Table celled color="blue">
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>Flight No.</Table.HeaderCell>
								<Table.HeaderCell>Mission</Table.HeaderCell>
								<Table.HeaderCell>Orbit</Table.HeaderCell>
								<Table.HeaderCell>Rocket</Table.HeaderCell>
								<Table.HeaderCell>Location</Table.HeaderCell>
								<Table.HeaderCell>Date</Table.HeaderCell>
								<Table.HeaderCell>Status</Table.HeaderCell>
							</Table.Row>
						</Table.Header>

						<Table.Body>
							{launches.map((launch) => {
								return (
									<Table.Row
										onClick={() => handleEvents("Flight")}
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
											{launch.launch_site.site_name}
										</Table.Cell>
										<Table.Cell>
											{launch.launch_date_utc}
										</Table.Cell>
										<Table.Cell>
											{launch.launch_success
												? "true"
												: "false"}
										</Table.Cell>
									</Table.Row>
								);
							})}
						</Table.Body>
					</Table>
				</div>
			)}
		</>
	);
}

export default LaunchList;
