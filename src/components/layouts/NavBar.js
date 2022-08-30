import React from "react";
import PropTytes from "prop-types";

const NavBar = ({icon,title}) => {
	return (
		<nav className="navbar bg-primary">
			<h1>
				<i className={icon}></i>
				<span className="p"> {title} </span>
			</h1>
			<ul>
				<li>
					<a href="/about">About</a>
				</li>
				<li>
					<a href="/">Home</a>
				</li>
			</ul>
		</nav>
	);
};

NavBar.defaultProps = {
	title: " Github Finder",
	icon: "fab fa-github",
};
NavBar.propTypes = {
	title: PropTytes.string.isRequired,
	icon: PropTytes.string.isRequired,
};

export default NavBar;
