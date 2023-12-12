import { useEffect, useState } from "react";
import { formatDate, getCommentsByArticleId } from "./utils";
import { LiaComments } from "react-icons/lia";
import {
	BiSolidUpvote,
	BiChat,
	BiChevronsDown,
	BiChevronsUp,
} from "react-icons/bi";
import { Box } from "./Box";
import {} from "react-icons/bi";

export const Comments = ({ article_id }) => {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		getCommentsByArticleId(article_id).then((data) => {
			setComments(data.comments);
		});
	}, []);

	return (
		<ul>
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
