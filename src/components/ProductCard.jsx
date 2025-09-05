import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [selectedSize, setSelectedSize] = useState("");
	const [selectedColor, setSelectedColor] = useState("");

	useEffect(() => {
		if (product?.sizes?.length) setSelectedSize(product.sizes[0]);
		if (product?.colors?.length) setSelectedColor(product.colors[0]);
	}, [product]);

	const handleAddToCart = () => {
		dispatch(addToCart({ ...product, selectedSize, selectedColor }));
	};

	const handleBuyNow = () => {
		// Add product to cart (optional) and go to checkout
		dispatch(addToCart({ ...product, selectedSize, selectedColor }));
		navigate("/checkout", { state: { product, selectedSize, selectedColor } });
	};

	if (!product) return null;

	return (
		<div className="bg-white text-gray-900 rounded-lg shadow hover:shadow-lg transition overflow-hidden">
			<img
				src={product.image}
				alt={product.name}
				className="w-full h-48 object-cover"
			/>
			<div className="p-4">
				<h2 className="font-semibold text-lg mb-2">{product.name}</h2>
				<p className="font-bold text-blue-600 mb-2">${product.price}</p>

				{/* Sizes */}
				<div className="flex gap-2 mb-2 flex-wrap">
					{product.sizes?.map((size) => (
						<button
							key={size}
							onClick={() => setSelectedSize(size)}
							className={`border px-2 py-1 rounded text-sm ${selectedSize === size ? "bg-blue-600 text-white" : "cursor-pointer"
								}`}
						>
							{size}
						</button>
					))}
				</div>

				{/* Colors */}
				<div className="flex gap-2 mb-4 flex-wrap">
					{product.colors?.map((color) => (
						<button
							key={color}
							onClick={() => setSelectedColor(color)}
							className={`w-6 h-6 rounded-full border ${selectedColor === color ? "ring-2 ring-blue-600" : "cursor-pointer"
								}`}
							style={{ backgroundColor: color.toLowerCase() }}
							title={color}
						/>
					))}
				</div>

				<div className="flex gap-2">
					<button
						onClick={handleAddToCart}
						className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition flex-1"
					>
						Add to Cart
					</button>
					<button
						onClick={handleBuyNow}
						className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition flex-1"
					>
						Buy Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
