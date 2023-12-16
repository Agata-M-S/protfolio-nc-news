import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { formatDate, getArticleById, patchVotes } from "../components/utils";
import { LiaComments } from "react-icons/lia";
import { BiSolidUpvote, BiSolidDownvote } from "react-icons/bi";
import { Comments } from "../components/Comments";
import { Error } from "../components/Error";

export const SingleArticle = () => {
	const { article_id } = useParams();
	const [singleArticle, setSingleArticle] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [isClickedUp, setIsClickedUp] = useState(false);
	const [isClickedDown, setIsClickedDown] = useState(false);
	const [voteClassDown, setVoteClassDown] = useState("vote-icon-default");
	const [voteClassUp, setVoteClassUp] = useState("vote-icon-default");
	const [errorClass, setErrorClass] = useState("hidden");
	const [reload, setReload] = useState(false);
	const [apiErr, setApiErr] = useState(false);

	useEffect(() => {
		setReload(false);
		getArticleById(article_id)
			.then(({ article }) => {
				setSingleArticle(article);
				setIsLoading(false);
			})
			.catch((err) => {
				if (!err.response) setApiErr(err.message);
				setIsLoading(false);
				setApiErr(err.response.data.msg);
			});
	}, [reload]);

	if (isLoading) {
		return <section className="loading-screen">results are loading</section>;
	} else if (apiErr) {
		return <Error message={apiErr} />;
	} else
		return (
			<>
				<article>
					<img src={singleArticle.article_img_url} />
					<h1>{singleArticle.title}</h1>
					<div>
						<p>Topic: {singleArticle.topic}</p>
						<p> {formatDate(singleArticle.created_at)}</p>
					</div>
					<p>{singleArticle.body}</p>
					<BiSolidUpvote
						className={voteClassUp}
						onClick={() => {
							setErrorClass("hidden");
							if (!isClickedUp && !isClickedDown) {
								setVoteClassUp("vote-icon-clicked");
								setSingleArticle((currArticle) => {
									setIsClickedUp(true);
									return { ...currArticle, votes: currArticle.votes + 1 };
								});
								patchVotes(singleArticle.article_id, 1).catch((err) => {
									return setErrorClass(() => {
										setErrorClass("show");
									});
								});
							} else if (isClickedUp) {
								setVoteClassUp("vote-icon-default");
								setSingleArticle((currArticle) => {
									setIsClickedUp(false);
									return { ...currArticle, votes: currArticle.votes - 1 };
								});
								patchVotes(singleArticle.article_id, -1).catch((err) => {
									return setErrorClass(() => {
										setErrorClass("show");
									});
								});
							}
						}}
					/>
					<span>{singleArticle.votes}</span>
					<BiSolidDownvote
						className={voteClassDown}
						onClick={() => {
							setErrorClass("hidden");
							if (!isClickedDown && !isClickedUp) {
								setVoteClassDown("vote-icon-clicked");

								setSingleArticle((currArticle) => {
									setIsClickedDown(true);
									return { ...currArticle, votes: currArticle.votes - 1 };
								});
								patchVotes(singleArticle.article_id, -1).catch((err) => {
									return setErrorClass(() => {
										setErrorClass("show");
									});
								});
							} else if (isClickedDown) {
								setSingleArticle((currArticle) => {
									setVoteClassDown("vote-icon-default");
									setIsClickedDown(false);
									return { ...currArticle, votes: currArticle.votes + 1 };
								});
								patchVotes(singleArticle.article_id, +1).catch((err) => {
									return setErrorClass(() => {
										setErrorClass("show");
									});
								});
							}
						}}
					/>
					<br />
					<p className={errorClass}>couldn't update the votes</p>
					<LiaComments /> <span>{singleArticle.comment_count}</span>
				</article>
				<Comments
					article_id={article_id}
					setSingleArticle={setSingleArticle}
					singleArticle={singleArticle}
					setReload={setReload}
				/>
				<Link to={`/articles`}>
					<button>Back to articles</button>
				</Link>
			</>
		);
};
