import { useEffect, useState } from "react";
import { formatDate, getCommentsByArticleId } from "./utils";
import { BiChat, BiChevronsDown, BiChevronsUp } from "react-icons/bi";
import { Box } from "./Box";
import { CommentAdder } from "./CommentAdder";
import { DeleteComment } from "./DeleteComment";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext.jsx";
import { Pagination } from "./Pagination.jsx";

export const Comments = ({ article_id, setReload, total }) => {
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [errorClass, setErrorClass] = useState("hidden");
	const { user } = useContext(UserContext);
	const [itemsPerPage] = useState(3);
	const [page, setPage] = useState(1);

	useEffect(() => {
		setErrorClass("hidden");
		getCommentsByArticleId(article_id, page)
			.then((data) => {
				setComments(data.comments);
				setIsLoading(false);
			})
			.catch((e) => {
        console.log(e);
				setIsLoading(false);
				setErrorClass("show");
			});
	}, [page, total]);
	if (isLoading) {
		return <section className="loading-screen">comments are loading</section>;
	}
else
	return (
		<>
			<CommentAdder
				setReload={setReload}
				article_id={article_id}
				comments={comments}
				setComments={setComments}
				total={total}
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
									<DeleteComment
										comment_id={comment.comment_id}
										setReload={setReload}
									/>
								) : null}
							</Box>
						</li>
					);
				})}
			</ul>
			{total == 0 ? null:
      <Pagination
				itemsPerPage={itemsPerPage}
				currentPage={page}
				setCurrentPage={setPage}
				comments={comments}
				total={total}
			/>  }
		</>
	);
};
