import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Cart from '../pages/Cart';
import Mens from "../pages/Mens";
import Womens from "../pages/Womens";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";

export default function AppRoutes() {

	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/products' element={<Products />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/contact' element={<Contact />} />

				<Route path='/mens' element={<Mens />} />
				<Route path='/womens' element={<Womens />} />
				<Route path="/checkout" element={<Checkout />} />
				{/* Add more routes here as needed */}
				{/* 404 */}
				<Route path="*" element={<h1 className="text-center mt-20">Page Not Found</h1>} />
			</Route>
		</Routes>
	)
}

