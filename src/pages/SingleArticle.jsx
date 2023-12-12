import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { formatDate, getArticleById } from "../components/utils";
import { LiaComments } from "react-icons/lia";
import { BiSolidUpvote } from "react-icons/bi";

export const SingleArticle = () => {
	const { article_id } = useParams();
	const [singleArticle, setSingleArticle] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		setIsLoading(true);
		getArticleById(article_id).then(({ article }) => {
			setSingleArticle(article);
			setIsLoading(false);
		});
	}, []);
	if (isLoading) {
		return <section className="loading-screen">results are loading</section>;
	} else
		return (
			<>
				<article>
					<img src={singleArticle.article_img_url} />
					<h1>{singleArticle.title}</h1>
					<div>
						<p>Topic: {singleArticle.topic}</p>
						<time> {formatDate(singleArticle.created_at)}</time>
					</div>
					<p>{singleArticle.body}</p>
					<BiSolidUpvote />
					<span>{singleArticle.votes}</span>
					<br />
					<LiaComments /> <span>{singleArticle.comment_count}</span>
				</article>
				<button
					onClick={() => {
						navigate("/articles");
					}}
				>
					Back to articles
				</button>
			</>
		);
};
