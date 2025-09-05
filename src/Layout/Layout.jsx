import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
	return (
		<div>
			<Navbar />
			<div className="container mx-auto px-4 py-8">
				<Outlet />
			</div>
			<Footer />
		</div>
	)
}

