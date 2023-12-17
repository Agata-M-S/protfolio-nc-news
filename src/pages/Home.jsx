import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<div className="home">
			<h2>Welcome to Agata's Nc News</h2>
      <h3 id="about-me">About me </h3>
      <p>You can find some interesting articles <Link to={'/articles'}>here</Link> </p>
      Step into the digital realm where my coding journey unfolds. This website serves as a curated showcase of my learning voyage through the Northcoders bootcamp. It is a living testament to the knowledge gained, challenges conquered, and solutions crafted in my journey so far. 
      <br/>
      From the user-centric marvels of front-end development to the robust foundations of back-end architecture, 
      every line of code reflects my commitment to mastering the art of programming.
<br /> This website stands not only as a testament to my dedication and growth, encapsulating the essence of what I've learned so far but a passion for building the digital future. Come along, explore, and witness the evolution of a coder-in-the-making!

		</div>
	);
};
