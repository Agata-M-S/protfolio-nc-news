import { useEffect, useState } from "react";
import { getAllArticles } from "../components/utils";
import { ArticleCard } from "../components/ArticleCard";
import ReactPaginate from "react-paginate";
import { SortArticles } from "../components/sortArticles";

export const Articles = ({ topic }) => {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [nextPage, setNextPage] = useState(2);
	const [previousPage, setPreviousPage] = useState(0);
  const [sortBy, setSortBy]=useState('')
  const [order, setOrder] =useState('DESC')
console.log(sortBy);
	useEffect(() => {
		getAllArticles(page, topic, sortBy, order)
			.then(({ articles }) => {
				setNextPage(page + 1);
				setPreviousPage(page - 1);
				setArticles(articles);
				setIsLoading(false);
			})
			.catch((e) => {
				setIsLoading(false);
				return (
					<section>
						<p className="show">Couldn't load the articles. Try again!</p>
					</section>
				);
			});
	}, [page, topic, sortBy, order]);

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
					<SortArticles  sortBy={sortBy} setSortBy={setSortBy} order={order} setOrder={setOrder}/>
				</div>
				<ReactPaginate
					containerClassName="paginate"
					breakLabel="..."
					nextLabel="Next >"
					onClick={handlePageClick}
					activeClassName="active"
					previousLabel="< previous"
					renderOnZeroPageCount={null}
				/>

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
