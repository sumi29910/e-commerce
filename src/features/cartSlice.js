import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const item = action.payload;
			const existing = state.items.find(
				(i) =>
					i.id === item.id &&
					i.selectedSize === item.selectedSize &&
					i.selectedColor === item.selectedColor
			);
			if (existing) {
				existing.quantity += 1;
			} else {
				state.items.push({ ...item, quantity: 1 });
			}
		},
		removeFromCart: (state, action) => {
			const { id, selectedSize, selectedColor } = action.payload;
			state.items = state.items.filter(
				(i) =>
					!(i.id === id &&
						i.selectedSize === selectedSize &&
						i.selectedColor === selectedColor)
			);
		},
		incrementQuantity: (state, action) => {
			const { id, selectedSize, selectedColor } = action.payload;
			const item = state.items.find(
				(i) =>
					i.id === id &&
					i.selectedSize === selectedSize &&
					i.selectedColor === selectedColor
			);
			if (item) item.quantity += 1;
		},
		decrementQuantity: (state, action) => {
			const { id, selectedSize, selectedColor } = action.payload;
			const item = state.items.find(
				(i) =>
					i.id === id &&
					i.selectedSize === selectedSize &&
					i.selectedColor === selectedColor
			);
			if (item) {
				item.quantity -= 1;
				if (item.quantity <= 0) {
					state.items = state.items.filter(
						(i) =>
							!(
								i.id === id &&
								i.selectedSize === selectedSize &&
								i.selectedColor === selectedColor
							)
					);
				}
			}
		},
		clearCart: (state) => {
			state.items = [];
		},
	},
});

export const {
	addToCart,
	removeFromCart,
	incrementQuantity,
	decrementQuantity,
	clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
