import { useContext, useEffect } from "react";
import { useState } from "react";
import { postComment } from "./utils.js";
import { UserContext } from "../contexts/userContext.jsx";
import { Error } from "./Error.jsx";

export const CommentAdder = ({ article_id, setComments }) => {
	const [input, setInput] = useState("");
	const { user } = useContext(UserContext);
	const [apiErr, setApiErr] = useState(null);
  const [isDisabled, setIsDisabled] =useState(false)

	const handleSubmit = (event) => {
		event.preventDefault();
    
		if (!user) {
			console.log("no user");
			Promise.reject({
				status: 400,
				msg: "you need to be logged in to post a comment",
			});
		} else if (!input) {
			console.log("no input");
			Promise.reject({ status: 400, msg: "'you can't post an empty comment" });
		} else {
      setIsDisabled(true)
			postComment(article_id, user, input)
				.then((res) => {
					setInput("");
					setComments((currComments) => {
						const newComment = {
							author: res.comment.author,
							body: res.comment.body,
							created_at: res.comment.created_at,
							votes: res.comment.votes,
						};
            setIsDisabled(false)
						return [newComment, ...currComments];
					});
				})
				.catch((err) => {
					setApiErr(err.response.msg);
					console.log(err.response.status, "<<<<<");
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
					{apiErr ? <Error message={apiErr} /> : null}
					<br />
					<button disabled={isDisabled}
						onClick={(e) => {
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
