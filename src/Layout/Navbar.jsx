import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => setIsOpen(!isOpen);

	// Get total number of items in cart dynamically
	const cartItems = useSelector((state) => state.cart.items);
	const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

	return (
		<nav className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
			<div className="container mx-auto px-4 flex justify-between items-center h-16">
				{/* Logo */}
				<Link to="/" className="text-2xl font-bold">
					ShopMate
				</Link>

				{/* Desktop Menu */}
				<div className="hidden md:flex space-x-6 items-center">
					<Link to="/" className="hover:text-gray-200">Home</Link>
					<Link to="/products" className="hover:text-gray-200">Products</Link>
					<Link to="/mens" className="hover:text-gray-200">Mens</Link>
					<Link to="/womens" className="hover:text-gray-200">Womens</Link>
					<Link to="/cart" className="hover:text-gray-200 flex items-center relative">
						<FaShoppingCart className="mr-1" />
						Cart
						{cartCount > 0 && (
							<span className="absolute -top-2 -right-3 bg-red-500 text-xs rounded-full px-1">
								{cartCount}
							</span>
						)}
					</Link>
					<Link to="/contact" className="hover:text-gray-200">Contact</Link>
				</div>

				{/* Mobile Menu Button */}
				<div className="md:hidden flex items-center">
					<button onClick={toggleMenu}>
						{isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="md:hidden bg-blue-700 px-4 pb-4">
					<Link to="/" className="block py-2 hover:text-gray-200">Home</Link>
					<Link to="/products" className="block py-2 hover:text-gray-200">Products</Link>
					<Link to="/mens" className="block py-2 hover:text-gray-200">Mens</Link>
					<Link to="/womens" className="block py-2 hover:text-gray-200">Womens</Link>
					<Link to="/cart" className="block py-2 hover:text-gray-200 relative">
						Cart
						{cartCount > 0 && (
							<span className="absolute top-2 right-4 bg-red-500 text-xs rounded-full px-1">
								{cartCount}
							</span>
						)}
					</Link>
					<Link to="/contact" className="block py-2 hover:text-gray-200">Contact</Link>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
