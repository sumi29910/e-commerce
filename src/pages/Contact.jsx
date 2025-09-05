
// src/pages/Contact.js
import React from "react";

const Contact = () => {
	return (
		<div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 flex items-center justify-center px-4 py-12">
			<div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8 md:p-12">
				<h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
					Contact Us
				</h1>
				<p className="text-center text-gray-600 mb-10">
					Have questions or need support? Fill out the form below and we’ll get back to you.
				</p>

				<form className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{/* Name */}
					<div className="flex flex-col">
						<label className="mb-2 text-gray-700 font-semibold">Name</label>
						<input
							type="text"
							placeholder="Your full name"
							className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
						/>
					</div>

					{/* Email */}
					<div className="flex flex-col">
						<label className="mb-2 text-gray-700 font-semibold">Email</label>
						<input
							type="email"
							placeholder="you@example.com"
							className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
						/>
					</div>

					{/* Subject */}
					<div className="flex flex-col md:col-span-2">
						<label className="mb-2 text-gray-700 font-semibold">Subject</label>
						<input
							type="text"
							placeholder="Enter subject"
							className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
						/>
					</div>

					{/* Message */}
					<div className="flex flex-col md:col-span-2">
						<label className="mb-2 text-gray-700 font-semibold">Message</label>
						<textarea
							rows="5"
							placeholder="Write your message..."
							className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
						></textarea>
					</div>

					{/* Submit Button */}
					<div className="md:col-span-2 flex justify-center">
						<button
							type="submit"
							className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition duration-200"
						>
							Send Message
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
