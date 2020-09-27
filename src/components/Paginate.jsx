import React from "react";
import { Pagination } from "semantic-ui-react";

function Paginate({ activePage, setActivePage, launchCount }) {
	const handlePageChange = (e, { activePage }) => {
		setActivePage(activePage);
	};
	return (
		<>
			{launchCount > 10 ? (
				<div className="pagination-container">
					<Pagination
						boundaryRange={1}
						size="tiny"
						siblingRange={1}
						totalPages={Math.ceil(launchCount / 10)}
						onPageChange={handlePageChange}
						activePage={activePage}
						firstItem={null}
						prevItem={null}
						nextItem={null}
					/>
				</div>
			) : (
				""
			)}
		</>
	);
}

export default Paginate;
