import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<div className="home">
			<h2>Welcome</h2>
      <p>You can find some interesting articles <Link to={'/articles'}>here</Link> </p>
      
		</div>
	);
};
