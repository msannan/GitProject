import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	const activeStyle = { color: '#F15B2A' };
	return (
		<nav>
			<NavLink to='/' activeStyle={activeStyle} exact>
				Login
			</NavLink>
			{' | '}
			<NavLink to='/SignupForm' activeStyle={activeStyle}>
				Signup
			</NavLink>
		</nav>
	);
};

export default Header;
