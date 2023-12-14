import { useContext } from "react";
import { useState } from "react";
import { postComment } from "./utils.js";
import { UserContext } from "../contexts/userContext.jsx";
import { Error } from "./Error.jsx";

export const CommentAdder = ({ article_id, setComments, setReload }) => {
	const [input, setInput] = useState("");
	const { user } = useContext(UserContext);
	const [apiErr, setApiErr] = useState(null);
	const [isDisabled, setIsDisabled] = useState(false);
	const [isPosting, setIsPosting] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!user) {
			Promise.reject({
				status: 400,
				msg: "you need to be logged in to post a comment",
			});
		} else if (!input) {
			Promise.reject({ status: 400, msg: "'you can't post an empty comment" });
		} else {
			setIsDisabled(true);
			setIsPosting(true);
			setReload(true);
			postComment(article_id, user, input)
				.then((res) => {
					setInput("");
					setIsPosting(false);
					setComments((currComments) => {
						const newComment = {
							author: res.comment.author,
							body: res.comment.body,
							created_at: res.comment.created_at,
							votes: res.comment.votes,
						};
						setIsDisabled(false);
						return [newComment, ...currComments];
					});
				})
				.catch((err) => {
					setApiErr(err.response.msg);
					setIsPosting(false);
					console.log(err.response, "<<<<<");
				});
		}
	};

	return (
		<div>
			<form id="comments" onSubmit={handleSubmit}>
				<label htmlFor="newComment">
					<textarea
						id="newComment"
						type="text"
						name="newComment"
						value={input}
						onChange={(e) => {
							setInput(e.target.value);
						}}
					/>
					{isPosting ? <p>posting your comment</p> : null}
					{apiErr ? <Error message={apiErr} /> : null}
					<br />
					<button
						disabled={isDisabled}
						onClick={() => {
							if (!user) {
								setApiErr("you need to be logged in to post a comment");
							} else if (!input) {
								setApiErr("you can't post an empty comment");
								console.log("no input");
							}
						}}
						onBlur={() => {
							setApiErr(null);
						}}
					>
						post comment
					</button>
				</label>
			</form>
		</div>
	);
};
