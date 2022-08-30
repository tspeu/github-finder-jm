import React from "react";
import PropTytes from "prop-types";
import { Link } from 'react-router-dom'

const NavBar = ({icon,title}) => {
	return (
		<nav className="navbar bg-primary">
			<h1>
				<i className={icon}></i>
				<span className="p"> {title} </span>
			</h1>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='about'>About</Link>
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
