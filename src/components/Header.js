import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../StateProvider';

function Header() {
	const [{ basket }] = useStateValue();

	console.log(basket);

	return (
		<nav className="header">
			{/* logo on the left -> img */}
			<Link to="/">
				<img
					className="header-logo"
					src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt=""
				/>
			</Link>
			{/* Search Box */}
			<div className="header-search">
				<input type="text" className="header-searchInput" />
				<SearchIcon className="header-searchIcon" />
			</div>
			{/* 3 Links */}
			<div className="header-nav">
				{/* 1st link */}
				<Link to="/login" className="header-link">
					<div className="header-option">
						<span className="header-option1">Hello Steve,</span>
						<span className="header-option2">Sign In</span>
					</div>
				</Link>
				{/* 2nd link */}
				<Link to="/login" className="header-link">
					<div className="header-option">
						<span className="header-option1">Returns</span>
						<span className="header-option2">& Orders</span>
					</div>
				</Link>
				{/* 3rd link */}
				<Link to="/login" className="header-link">
					<div className="header-option">
						<span className="header-option1">Your</span>
						<span className="header-option2">Prime</span>
					</div>
				</Link>
				{/* 4th link */}
				<Link to="/checkout" className="header-link">
					<div className="header-optionBasket">
						{/* Shopping basket icon */}
						<ShoppingBasketIcon />
						{/* Number of items in the basket */}
						<span className="header-option2" className="header-basketCount">
							{basket?.length}
						</span>
					</div>
				</Link>
			</div>
			{/* Basket icon with the number */}
		</nav>
	);
}

export default Header;
