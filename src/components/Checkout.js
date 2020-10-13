import React from 'react';
import { useStateValue } from '../StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import CurrencyFormat from 'react-currency-format';

function Checkout({ id, title, image, price, rating }) {
	const [{ basket }] = useStateValue();
	console.log(id, title, image, price, rating);

	return (
		<div className="checkout">
			<div className="checkout-left">
				<img
					className="checkout-ad"
					src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img20/SWP/CapOne/CapitalOne_DesktopHero_061620.jpg"
					alt=""
				/>
				{basket?.length === 0 ? (
					<div>
						<h2> Your shopping cart is empty.</h2>
						<p>
							You have no items in your basket. To buy one or more items, click
							"Add to basket" next to the item.
						</p>
					</div>
				) : (
					<div>
						<h2 className="checkout-title">Your Shopping Cart</h2>
						{/* List out all the of the Checkout Products */}
						{basket?.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				)}
			</div>
			{basket.length > 0 && (
				<div className="className-right">
					<Subtotal />
				</div>
			)}
		</div>
	);
}

export default Checkout;
