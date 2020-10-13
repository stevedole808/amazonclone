import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from '../StateProvider';

const CheckoutProduct = ({ id, title, image, price, rating }) => {
	const [{ basket }, dispatch] = useStateValue();

	const removeFromBasket = () => {
		// remove from the basket...
		dispatch({
			type: 'REMOVE_FROM_BASKET',
			id: id,
		});
	};

	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct-image" src={image} alt="" />
			<div className="checkoutProduct-info">
				<p className="checkoutProduct-title">{title}</p>
				<p classNam="checkout-price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutProduct-rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>⭐</p>
						))}
				</div>
				<button onClick={removeFromBasket}>Remove from basket</button>
			</div>
		</div>
	);
};

export default CheckoutProduct;
