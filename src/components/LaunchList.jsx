import React from "react";
import { Table } from "semantic-ui-react";

function LaunchList({ getModalDetails }) {
	return (
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
					<Table.Row onClick={() => getModalDetails("flight no 4")}>
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
	);
}

export default LaunchList;
