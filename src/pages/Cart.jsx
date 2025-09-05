import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
	removeFromCart,
	clearCart,
	incrementQuantity,
	decrementQuantity,
} from "../features/cartSlice";

const Cart = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart.items);

	const totalPrice = cartItems.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);

	if (cartItems.length === 0) {
		return (
			<div className="container mx-auto px-4 py-16 text-center">
				<h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
				<p className="text-gray-600">Add some products to your cart!</p>
			</div>
		);
	}

	return (
		<div className="container mx-auto px-4 py-16">
			<h2 className="text-3xl font-bold mb-8 text-center">Your Cart</h2>

			<div className="space-y-4">
				{cartItems.map((item, index) => (
					<div
						key={index}
						className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded shadow"
					>
						<div className="flex items-center space-x-4">
							<img
								src={item.image}
								alt={item.name}
								className="w-20 h-20 object-cover rounded"
							/>
							<div>
								<h3 className="font-semibold">{item.name}</h3>
								<p className="text-gray-600">
									Size: {item.selectedSize} | Color: {item.selectedColor}
								</p>
								<p className="text-blue-600 font-bold">${item.price}</p>
							</div>
						</div>

						<div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-2 sm:mt-0">
							{/* Quantity controls */}
							<div className="flex items-center space-x-2">
								<button
									onClick={() =>
										dispatch(
											decrementQuantity({
												id: item.id,
												selectedSize: item.selectedSize,
												selectedColor: item.selectedColor,
											})
										)
									}
									className="bg-gray-300 text-gray-800 px-2 py-1 rounded hover:bg-gray-400 transition"
								>
									-
								</button>
								<p>{item.quantity}</p>
								<button
									onClick={() =>
										dispatch(
											incrementQuantity({
												id: item.id,
												selectedSize: item.selectedSize,
												selectedColor: item.selectedColor,
											})
										)
									}
									className="bg-gray-300 text-gray-800 px-2 py-1 rounded hover:bg-gray-400 transition"
								>
									+
								</button>
							</div>

							{/* Remove Button */}
							<button
								onClick={() =>
									dispatch(
										removeFromCart({
											id: item.id,
											selectedSize: item.selectedSize,
											selectedColor: item.selectedColor,
										})
									)
								}
								className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
							>
								Remove
							</button>

							{/* Buy Now Button */}
							<Link
								to="/checkout"
								state={{ product: item }}
								className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
							>
								Buy Now
							</Link>
						</div>
					</div>
				))}
			</div>

			<div className="mt-8 text-right">
				<h3 className="text-xl font-bold">
					Total: <span className="text-blue-600">${totalPrice}</span>
				</h3>
				<button
					onClick={() => dispatch(clearCart())}
					className="mt-4 bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900 transition"
				>
					Clear Cart
				</button>
			</div>
		</div>
	);
};

export default Cart;
