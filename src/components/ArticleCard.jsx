import { BiSolidUpvote } from "react-icons/bi";
import { LiaComments } from "react-icons/lia";
import { Link } from "react-router-dom";
import { formatDate } from "./utils";

export const ArticleCard = ({ article }) => {

	return (
		<>
			<Link to={`/articles/${article.article_id}` } article_id = {article.article_id}>
				<img src={article.article_img_url} />
				<h4>
					{article.title}
					<br />
					<span> {formatDate(article.created_at)} </span>
				</h4>
			</Link>

			<p>
				By:
				{article.author}
				<br />
				<LiaComments />
				<span>{article.comment_count} </span>
				<BiSolidUpvote />
				<span>{article.votes}</span>
			</p>
		</>
	);
};
