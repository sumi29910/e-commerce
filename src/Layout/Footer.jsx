
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-gray-300 py-12">
			<div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
				{/* About */}
				<div>
					<h3 className="text-white text-lg font-bold mb-4">ShopMate</h3>
					<p className="text-sm">
						Your one-stop shop for electronics, fashion, home essentials, and more.
					</p>
				</div>

				{/* Quick Links */}
				<div>
					<h4 className="text-white font-semibold mb-4">Quick Links</h4>
					<ul className="space-y-2">
						<li><Link to="/" className="hover:text-white">Home</Link></li>
						<li><Link to="/products" className="hover:text-white">Products</Link></li>
						<li><Link to="/mens" className="hover:text-white">Mens</Link></li>
						<li><Link to="/womens" className="hover:text-white">Womens</Link></li>
						<li><Link to="/contact" className="hover:text-white">Contact</Link></li>
					</ul>
				</div>

				{/* Customer Service */}
				<div>
					<h4 className="text-white font-semibold mb-4">Customer Service</h4>
					<ul className="space-y-2 text-sm">
						<li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
						<li><Link to="/returns" className="hover:text-white">Returns</Link></li>
						<li><Link to="/shipping" className="hover:text-white">Shipping</Link></li>
						<li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
					</ul>
				</div>

				{/* Social Media */}
				<div>
					<h4 className="text-white font-semibold mb-4">Follow Us</h4>
					<div className="flex space-x-4 text-xl">
						<a href="#" className="hover:text-white"><FaFacebook /></a>
						<a href="#" className="hover:text-white"><FaTwitter /></a>
						<a href="#" className="hover:text-white"><FaInstagram /></a>
						<a href="#" className="hover:text-white"><FaLinkedin /></a>
					</div>
				</div>
			</div>

			<div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
				© {new Date().getFullYear()} ShopMate. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
