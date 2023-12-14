import { deleteCommentById } from "./utils";

export const DeleteComment = ({ children, comment_id }) => {
	return (
		<>
			{children}
			<button
				onClick={() => {
					deleteCommentById(comment_id);
					console.log(comment_id);
				}}
			>
				delete
			</button>
		</>
	);
};
