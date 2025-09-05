import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../features/productsSlice";
import ProductCard from "../components/ProductCard"; // adjust path if needed
import productsData from "../data/products.json"; // your product JSON

const Products = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products.items);
	const [category, setCategory] = useState("all");

	useEffect(() => {
		// Initialize products in Redux
		dispatch(setProducts(productsData));
	}, [dispatch]);

	const filteredProducts =
		category === "all"
			? products
			: products.filter((p) => p.category === category);

	const categories = ["all", "mens", "womens"];

	return (
		<div className="container mx-auto px-4 py-16">
			<h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>

			{/* Category Filter */}
			<div className="flex justify-center mb-8 space-x-4 flex-wrap">
				{categories.map((cat) => (
					<button
						key={cat}
						onClick={() => setCategory(cat)}
						className={`px-4 py-2 rounded font-semibold transition-colors cursor-pointer ${category === cat
								? "bg-blue-600 text-white"
								: "bg-gray-200 text-gray-800 hover:bg-gray-300"
							}`}
					>
						{cat.charAt(0).toUpperCase() + cat.slice(1)}
					</button>
				))}
			</div>
			{/* Products Grid */}
			{filteredProducts.length > 0 ? (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
					{filteredProducts.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			) : (
				<p className="text-center text-gray-500 text-lg">
					No products found in this category.
				</p>
			)}
		</div>
	);
};

export default Products;
