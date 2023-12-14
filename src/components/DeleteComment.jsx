import { useState } from "react";
import { deleteCommentById } from "./utils";

export const DeleteComment = ({ children, comment_id }) => {
  const [isDisabled,setIsDisabled] = useState(false)
  const [buttonText, setButtonText] = useState('Delete')
	return (
		<>
			{children}
			<button disabled={isDisabled}
				onClick={() => {
          setIsDisabled(true)
          setButtonText('Deleting...please wait')
					deleteCommentById(comment_id);
          

				}}
			>
				{buttonText}
			</button>
		</>
	);
};
