import { useEffect, useState } from "react";
import { getAllArticles } from "../components/utils";
import { ArticleCard } from "../components/ArticleCard";
import ReactPaginate from "react-paginate";


export const Articles = () => {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [page, setPage] = useState(1);
	const [nextPage, setNextPage] = useState(2);
	const [previousPage, setPreviousPage] = useState(0);

	useEffect(() => {
		setIsLoading(true);

		getAllArticles(page).then(({ articles }) => {
			setNextPage(page + 1);
			setPreviousPage(page - 1);
			setArticles(articles);
			setIsLoading(false);
		});
	}, [page]);

	const handlePageClick = (e) => {
		console.log("click", e);
		if (!e.nextSelectedPage) {
			setIsLoading(true);
			setPage(1);
		}
		if (e.isNext && page < 4) {
			setIsLoading(true);
			setPage(nextPage);
		} else if (e.isNext && page != "number" && !e.nextSelectedPage) {
			setIsLoading(true);
			setPage(2);
		} else if (e.isNext && page === 4) {
			setPage(4);
		} else if (e.isPrevious && page > 1) {
			setIsLoading(true);
			setPage(previousPage);
		} else if (page) {
			setIsLoading(true);
			setPage(e.nextSelectedPage + 1);
		}
	};

	if (isLoading) {
		return <section className="loading-screen">results are loading</section>;
	} else
		return (
			<>
				<div>
					<ReactPaginate
						containerClassName="paginate"
						breakLabel="..."
						nextLabel="Next >"
						onClick={handlePageClick}
						previousLabel="< previous"
						renderOnZeroPageCount={null}
					/>
				</div>

				<article className="grid-container">
					{articles.map((article) => {
						return (
								<li key={article.article_id}>
									<ArticleCard article={article} />
								</li>
						);
					})}
				</article>
			</>
		);
};
