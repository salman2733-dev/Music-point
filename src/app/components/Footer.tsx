"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Footer = () => {
  const [year, setYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={cn("bg-black text-white py-12")}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Section */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xl font-bold">About Us</h4>
          <p className="text-gray-400 text-sm">
            We create amazing web experiences with modern technologies and innovative designs.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xl font-bold">Quick Links</h4>
          <ul className="flex flex-col gap-2 text-gray-400 text-sm">
            {["Home", "Services", "About", "Contact"].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-purple-400 transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xl font-bold">Contact</h4>
          <p className="text-gray-400 text-sm">Email: info@example.com</p>
          <p className="text-gray-400 text-sm">Phone: +1 234 567 890</p>
          <div className="flex gap-4 mt-2">
            {["Twitter", "LinkedIn", "GitHub"].map((social) => (
              <a key={social} href="#" className="hover:text-purple-400 transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        © {year} YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
