import { useState } from "react";
import { deleteCommentById } from "./utils";
import { Error } from "./Error.jsx";

export const DeleteComment = ({
	children,
	comment_id,
	setReload,

}) => {
	const [isDisabled, setIsDisabled] = useState(false);
	const [buttonText, setButtonText] = useState("Delete");
	const [apiErr, setApiErr] = useState(null);
	return (
		<>
			{children}
			{apiErr ? <Error message={apiErr.msg} /> : null}
			<button
				disabled={isDisabled}
				onClick={() => {
					setIsDisabled(true);
					setButtonText("Deleting...please wait");
					setReload(true);
					deleteCommentById(comment_id).catch((err) => {
						setApiErr({ msg: "something went wrong" });
						setIsDisabled(false);
						setButtonText("Delete");
					});
				}}
			>
				{buttonText}
			</button>
		</>
	);
};
