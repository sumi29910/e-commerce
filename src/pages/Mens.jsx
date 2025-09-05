import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../features/productsSlice";
import ProductCard from "../components/ProductCard";
import productsData from "../data/products.json";

const Mens = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products.items);
	const [mensProducts, setMensProducts] = useState([]);

	useEffect(() => {
		dispatch(setProducts(productsData));
	}, [dispatch]);

	useEffect(() => {
		setMensProducts(products.filter((p) => p.category === "mens"));
	}, [products]);

	return (
		<div className="container mx-auto px-4 py-16">
			<h1 className="text-3xl font-bold mb-8 text-center">Mens Collection</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
				{mensProducts.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};

export default Mens;
