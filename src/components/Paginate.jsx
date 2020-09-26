import React from "react";
import { Pagination } from "semantic-ui-react";

function Paginate() {
	return (
		<div className="pagination-container">
			<Pagination
				boundaryRange={1}
				activePage={1}
				size="tiny"
				siblingRange={1}
				totalPages={10}
				firstItem={null}
				lastItem={null}
				prevItem={null}
				nextItem={null}
			/>
		</div>
	);
}

export default Paginate;
