import { Link } from "react-router-dom";
export const Footer = () => {
	return (
		<footer className="footer">
			<Link to={"/"}>
						<p
					onClick={() => {
						const relElem = document.getElementById("about-me");
						relElem.scrollIntoView;
						relElem.scrollIntoView({ behavior: "smooth" });
					}}
				>
					About me
				</p>
			</Link>
		</footer>
	);
};
