import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
	return (
		<div className="home">
			<img
				className="home-img"
				src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
				alt=""
			/>
			{/* Product id, title, price, rating, image */}
			<div className="home-row">
				<Product
					id="123456"
					title="PS4"
					price={399.99}
					rating={5}
					image="https://portjefflibrary.org/wp-content/uploads/2015/11/ps4-png-ps4-png-900.png"
				/>
				<Product
					id="123456"
					title="PS4"
					price={399.99}
					rating={5}
					image="https://portjefflibrary.org/wp-content/uploads/2015/11/ps4-png-ps4-png-900.png"
				/>
			</div>
			<div className="home-row">
				<Product
					id="123756"
					title="PS4"
					price={399.99}
					rating={5}
					image="https://portjefflibrary.org/wp-content/uploads/2015/11/ps4-png-ps4-png-900.png"
				/>
				<Product
					id="122456"
					title="PS4"
					price={399.99}
					rating={5}
					image="https://portjefflibrary.org/wp-content/uploads/2015/11/ps4-png-ps4-png-900.png"
				/>
				<Product
					id="123459"
					title="PS4"
					price={399.99}
					rating={5}
					image="https://portjefflibrary.org/wp-content/uploads/2015/11/ps4-png-ps4-png-900.png"
				/>
			</div>
			<div className="home-row">
				<Product
					id="123436"
					title="PS4"
					price={399.99}
					rating={5}
					image="https://portjefflibrary.org/wp-content/uploads/2015/11/ps4-png-ps4-png-900.png"
				/>
			</div>
			{/* Product */}
		</div>
	);
}

export default Home;
