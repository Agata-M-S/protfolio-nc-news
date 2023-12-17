import { useEffect, useState } from "react";

export const Pagination = ({
	currentPage,
	itemsPerPage,
	setCurrentPage,
	total,
}) => {
	const [numPages, setNumPages] = useState(Math.ceil(total / itemsPerPage));
	useEffect(() => {
		setNumPages(Math.ceil(total / itemsPerPage));
	}, [total]);

	const pageNumbers = [...Array(numPages + 1).keys()].slice(1);
	const nextPage = () => {
		if (currentPage !== numPages) setCurrentPage(currentPage + 1);
	};

	const prevPage = () => {
		if (currentPage !== 1) setCurrentPage(currentPage - 1);
	};

	return (
		<>
			<div className="pagination">
				<p
					className={`page-item ${currentPage === 1 ? "hidden" : ""} `}
					onClick={prevPage}
				>
					{"<Previous"}
				</p>
				{pageNumbers.map((pgNumber) => (
					<p
						key={pgNumber}
						className={`page-item ${currentPage == pgNumber ? "active" : ""} `}
						onClick={() => {
							setCurrentPage(pgNumber);
						}}
					>
						{pgNumber}
					</p>
				))}
				<p
					className={`page-item ${currentPage === numPages ? "hidden" : ""} `}
					onClick={nextPage}
				>
					{"Next >"}
				</p>
			</div>
		</>
	);
};
