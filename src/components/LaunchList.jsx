import React, { useState } from "react";
import { Table } from "semantic-ui-react";
import Modal from "./Modal";

function LaunchList() {
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
								<Table.HeaderCell>Header</Table.HeaderCell>
								<Table.HeaderCell>Header</Table.HeaderCell>
								<Table.HeaderCell>Header</Table.HeaderCell>
								<Table.HeaderCell>Header</Table.HeaderCell>
								<Table.HeaderCell>Header</Table.HeaderCell>
								<Table.HeaderCell>Header</Table.HeaderCell>
								<Table.HeaderCell>Header</Table.HeaderCell>
								<Table.HeaderCell>Header</Table.HeaderCell>
								<Table.HeaderCell>Header</Table.HeaderCell>
							</Table.Row>
						</Table.Header>

						<Table.Body>
							<Table.Row onClick={() => handleEvents("Flight")}>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table>
				</div>
			)}
		</>
	);
}

export default LaunchList;
