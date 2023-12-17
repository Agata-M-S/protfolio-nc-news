import { Link } from "react-router-dom";
export const Footer = () => {
	return (
		<footer className="footer">
			<Link to={"/"}>
						<p
					onClick={() => {
						const relElem = document.getElementById("about");
						relElem.scrollIntoView;
						relElem.scrollIntoView({ behavior: "smooth" });
					}}
				>
					About 
				</p>
			</Link>
		</footer>
	);
};
