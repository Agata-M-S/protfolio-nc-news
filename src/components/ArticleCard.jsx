import { BiSolidUpvote } from "react-icons/bi";
import { LiaComments } from "react-icons/lia";

export const ArticleCard = ({ article }) => {

function formatDate(dateString){
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString([],options);
}


	return (
		<>
			<img src={article.article_img_url} />
			<h4>
				{article.title}
				<br />
			<span>	{formatDate(article.created_at)} </span>
			</h4>

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
