export const initialState = {
	basket: [
		{
			id: '123456',
			title: 'PS4',
			price: 399.99,
			rating: 5,
			image:
				'https://portjefflibrary.org/wp-content/uploads/2015/11/ps4-png-ps4-png-900.png',
		},
	],
	user: null,
};

export const getBasketTotal = (basket) =>
	basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case 'ADD_TO_BASKET':
			// Logic for adding item to basket
			return {
				...state,
				basket: [...state.basket, action.item],
			};
			break;
		case 'REMOVE_FROM_BASKET':
			// Logic for Removing item from the basket

			// we cloned the basket
			let newBasket = [...state.basket];
			// here we check to see if product exists
			const index = state.basket.findIndex(
				(basketItem) => basketItem.id === action.id
			);
			if (index >= 0) {
				// item exists in basket, remove it...
				newBasket.splice(index, 1);
			} else {
				console.warn(
					`Can't remove the product (id: ${action.id}) as it's not empty`
				);
			}
			return { ...state, basket: newBasket };
			defult: return state;
	}
};

export default reducer;
