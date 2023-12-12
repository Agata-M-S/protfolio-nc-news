import { BiSolidUpvote } from "react-icons/bi";
import { LiaComments } from "react-icons/lia";

export const ArticleCard = ({ article }) => {

	return (
		<>
			<img src={article.article_img_url} />
			<h4>{article.title}</h4>
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
