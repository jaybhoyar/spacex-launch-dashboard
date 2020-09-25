import React, { useState } from "react";
import { Table } from "semantic-ui-react";

import Modal from "./Modal";
import { getStatusLabel, getFormattedDate } from "../utils/index";

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
				""
			)}

			<div className="table-container">
				<Table celled color="black" textAlign="center">
					<Table.Header className="table-heading">
						<Table.Row>
							<Table.HeaderCell>Flight No.</Table.HeaderCell>
							<Table.HeaderCell className="table-heading">
								Mission
							</Table.HeaderCell>
							<Table.HeaderCell>Orbit</Table.HeaderCell>
							<Table.HeaderCell>Rocket</Table.HeaderCell>
							<Table.HeaderCell>Location</Table.HeaderCell>
							<Table.HeaderCell>lauched (UTC)</Table.HeaderCell>
							<Table.HeaderCell>Status</Table.HeaderCell>
						</Table.Row>
					</Table.Header>

					<Table.Body>
						{launches.map((launch) => {
							return (
								<Table.Row
									key={launch.flight_number}
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
										{getFormattedDate(launch.launch_date)}
									</Table.Cell>
									<Table.Cell>
										{getStatusLabel(launch.launch_success)}
									</Table.Cell>
								</Table.Row>
							);
						})}
					</Table.Body>
				</Table>
			</div>
		</>
	);
}

export default LaunchList;
