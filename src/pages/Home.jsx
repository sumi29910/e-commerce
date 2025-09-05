import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";

const Home = () => {
	const products = useSelector((state) => state.products.items);

	// Featured products (first 4)
	const featuredProducts = products.slice(0, 4);

	return (
		<div className="bg-gray-50 min-h-screen">
			{/* Hero Section */}
			<section className="relative bg-blue-600 text-white py-24 px-4 text-center">
				<h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to ShopMate</h1>
				<p className="text-lg md:text-2xl mb-8">
					Find your perfect style. Trendy, classy & affordable.
				</p>
				<Link
					to="/products"
					className="bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition"
				>
					Shop Now
				</Link>
			</section>

			{/* Categories */}
			<section className="py-16 px-4 container mx-auto text-center">
				<h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
					<Link
						to="/mens"
						className="bg-gray-200 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
					>
						<img
							src="assets/products/b.jpg"
							alt="Mens"
							className="w-full h-48 object-cover"
						/>
						<h3 className="text-xl font-semibold py-4">Mens Collection</h3>
					</Link>

					<Link
						to="/womens"
						className="bg-gray-200 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
					>
						<img
							src="assets/products/d.webp"
							alt="Womens"
							className="w-full h-48 object-cover"
						/>
						<h3 className="text-xl font-semibold py-4">Womens Collection</h3>
					</Link>
				</div>
			</section>

			{/* Featured Products */}
			<section className="py-16 px-4 container mx-auto">
				<h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
					{featuredProducts.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</section>

			{/* Newsletter */}
			<section className="bg-blue-600 text-white py-16 px-4 text-center rounded-lg mx-4 md:mx-0">
				<h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
				<p className="mb-6">Get updates on latest products and exclusive offers</p>
				<form className="flex flex-col sm:flex-row justify-center gap-2">
					<input
						type="email"
						placeholder="Enter your email"
						className="px-4 py-2 rounded border border-white bg-white text-gray-900 placeholder-gray-500 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-yellow-400"
					/>
					<button
						type="submit"
						className="bg-yellow-400 text-blue-800 font-semibold px-6 py-2 rounded hover:bg-yellow-500 transition"
					>
						Subscribe
					</button>
				</form>
			</section>
		</div>
	);
};

export default Home;
