import { useEffect, useState } from "react";
import { getTopics } from "../components/utils";
import { Articles } from "./Articles";

export const Topics = () => {
	const [topics, setTopics] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [chosen, setChosen] = useState(false);
	const [topic, setTopic] = useState();

	useEffect(() => {
		getTopics().then((data) => {
			setIsLoading(false);
			setTopics(data.topics);
		});
	}, []);
	if (isLoading) {
		return <section className="loading-screen">Loading...</section>;
	}
	return (
		<>
			<div className="topic-grid">
				{topics.map((topic) => {
					return (
						<div
							key={topic.slug}
							onClick={() => {
								setChosen(true);
								setTopic(topic.slug);
							}}
						>
							<p>
								{topic.slug} </p>
								<cite>
									<q>{topic.description}</q>
								</cite>
							
						</div>
					);
				})}
        <div 
							onClick={() => {
								setChosen(true);
								setTopic(null);
							}}
						> See All Articles</div>
			</div>
			{chosen ? <Articles topic={topic} /> : null}
		</>
	);
};
// add sorting by topic to the articles
