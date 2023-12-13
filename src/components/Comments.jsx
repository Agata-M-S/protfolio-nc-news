import { useEffect, useState } from "react";
import { formatDate, getCommentsByArticleId } from "./utils";
import { BiChat, BiChevronsDown, BiChevronsUp } from "react-icons/bi";
import { Box } from "./Box";
import {} from "react-icons/bi";

export const Comments = ({ article_id }) => {
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
  const [errorClass, setErrorClass] = useState('hidden')

	useEffect(() => {
    setErrorClass('hidden')
		setIsLoading(true);
		getCommentsByArticleId(article_id).then((data) => {
			setComments(data.comments);
			setIsLoading(false);
		}).catch(()=>{
      setIsLoading(false)
      setErrorClass('show')
    });
	}, []);
	if (isLoading) {
		return <section className="loading-screen">results are loading</section>;
	}
	return (
		<ul>
      <p className={errorClass}>Can't load comments</p>
			{comments.map((comment) => {
				return (
					<li key={comment.comment_id}>
						<Box>
							<span style={{ alignSelf: "flex-start" }}>
								{formatDate(comment.created_at)}
							</span>
							<div>
								<BiChat /> {comment.author} says:
							</div>
							<p>{comment.body}</p>
							<div>
								<BiChevronsUp />
								<span>{comment.votes}</span>
								<BiChevronsDown />
							</div>
						</Box>
					</li>
				);
			})}
		</ul>
	);
};
