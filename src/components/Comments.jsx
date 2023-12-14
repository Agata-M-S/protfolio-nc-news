import { useEffect, useState } from "react";
import { formatDate, getCommentsByArticleId } from "./utils";
import { BiChat, BiChevronsDown, BiChevronsUp } from "react-icons/bi";
import { Box } from "./Box";
import { CommentAdder } from "./CommentAdder";
import { DeleteComment } from "./DeleteComment";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext.jsx";

export const Comments = ({ article_id }) => {
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [errorClass, setErrorClass] = useState("hidden");
	const { user } = useContext(UserContext);

	useEffect(() => {
		setErrorClass("hidden");
		getCommentsByArticleId(article_id)
			.then((data) => {
				setComments(data.comments);
				setIsLoading(false);
			})
			.catch(() => {
				setIsLoading(false);
				setErrorClass("show");
			});
	}, [comments]);

	if (isLoading) {
		return <section className="loading-screen">comments are loading</section>;
	}

	return (
		<>
			<CommentAdder
				article_id={article_id}
				comments={comments}
				setComments={setComments}
			/>
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
								{user === comment.author ? (
									<DeleteComment comment_id={comment.comment_id} />
								) : null}
							</Box>
						</li>
					);
				})}
			</ul>
		</>
	);
};
