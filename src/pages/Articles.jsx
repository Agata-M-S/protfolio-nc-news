import { useEffect, useState } from "react";
import { getAllArticles } from "../components/utils";
import { ArticleCard } from "../components/ArticleCard";
import ReactPaginate from "react-paginate";
import { SortArticles } from "../components/sortArticles";
import { Pagination } from "../components/Pagination";
export const Articles = ({ topic }) => {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [sortBy, setSortBy] = useState("");
	const [order, setOrder] = useState("DESC");
	const [total, setTotal] = useState(0);
	const [itemsPerPage] = useState(10);
	const [apiErr, setApiErr] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		getAllArticles(page, topic, sortBy, order)
			.then((data) => {
				setTotal(data.totalCount);
				setArticles(data.articles);
				setIsLoading(false);
			})
			.catch((err) => {
				setIsLoading(false);
				if (!err.response) setApiErr(err.message);
				setIsLoading(false);
				setApiErr(err.response.data.msg);
			});
	}, [page, topic, sortBy, order]);

	if (isLoading) {
		return <section className="loading-screen">results are loading</section>;
	} else if (apiErr) {
		return <Error message={apiErr} />;
	} else
		return (
			<>
				<div>
					<SortArticles sortBy={sortBy} order={order} setSortBy={setSortBy} setOrder={setOrder} />
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
				<Pagination
					itemsPerPage={itemsPerPage}
					currentPage={page}
					setCurrentPage={setPage}
					total={total}
				/>
			</>
		);
};
