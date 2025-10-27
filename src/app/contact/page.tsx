"use client";

import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-[93vh] bg-black text-white flex items-center justify-center py-6 px-3 mt-10 overflow-hidden">
      <div className="max-w-sm w-full bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-3">Contact Us</h1>
        <p className="text-gray-400 text-center mb-6 text-xs">
          Have any questions or feedback? Drop us a message below.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div>
            <label className="block text-xs mb-1 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-2 py-1.5 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gray-500 text-xs"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-xs mb-1 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-2 py-1.5 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gray-500 text-xs"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-xs mb-1 font-semibold">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={3}
              className="w-full px-2 py-1.5 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-teal-500 text-xs"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-gray-600 hover:bg-gray-700 transition-colors px-3 py-1.5 rounded-md font-bold text-white mt-2 text-xs"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
