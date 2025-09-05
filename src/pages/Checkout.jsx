import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Checkout = () => {
	const { state } = useLocation();
	const { product } = state || {};

	const [selectedSize, setSelectedSize] = useState("");
	const [selectedColor, setSelectedColor] = useState("");
	const [quantity, setQuantity] = useState(1);

	useEffect(() => {
		if (product) {
			setSelectedSize(state?.selectedSize || product.sizes[0]);
			setSelectedColor(state?.selectedColor || product.colors[0]);
		}
	}, [product, state]);

	if (!product) return <p>No product selected.</p>;

	const increment = () => setQuantity((q) => q + 1);
	const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

	return (
		<div className="container mx-auto px-4 py-16">
			<h1 className="text-3xl font-bold mb-8">Checkout</h1>
			<div className="flex flex-col md:flex-row gap-8">
				<img
					src={product.image}
					alt={product.name}
					className="w-64 h-64 object-cover rounded"
				/>
				<div className="flex-1">
					<h2 className="text-xl font-semibold mb-2">{product.name}</h2>
					<p className="mb-2 font-bold text-blue-600">
						Price: ${product.price} x {quantity} = ${product.price * quantity}
					</p>

					{/* Size selector */}
					<div className="mb-4">
						<p className="font-semibold mb-1">Select Size:</p>
						<div className="flex gap-2 flex-wrap">
							{product.sizes.map((size) => (
								<button
									key={size}
									onClick={() => setSelectedSize(size)}
									className={`border px-3 py-1 rounded ${selectedSize === size ? "bg-blue-600 text-white" : "cursor-pointer"
										}`}
								>
									{size}
								</button>
							))}
						</div>
					</div>

					{/* Color selector */}
					<div className="mb-4">
						<p className="font-semibold mb-1">Select Color:</p>
						<div className="flex gap-2 flex-wrap">
							{product.colors.map((color) => (
								<button
									key={color}
									onClick={() => setSelectedColor(color)}
									className={`w-8 h-8 rounded-full border ${selectedColor === color ? "ring-2 ring-blue-600" : "cursor-pointer"
										}`}
									style={{ backgroundColor: color.toLowerCase() }}
									title={color}
								/>
							))}
						</div>
					</div>

					{/* Quantity selector */}
					<div className="mb-4 flex items-center gap-4">
						<p className="font-semibold">Quantity:</p>
						<button
							onClick={decrement}
							className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
						>
							-
						</button>
						<span className="px-2">{quantity}</span>
						<button
							onClick={increment}
							className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
						>
							+
						</button>
					</div>

					<button className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
						Confirm & Pay
					</button>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
