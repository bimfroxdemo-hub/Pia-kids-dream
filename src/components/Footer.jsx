// Footer.jsx
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import footervideo from "../assets/video.mp4"; // 👈 apna video yaha rakho

function Footer() {
  return (
    <footer className="relative text-white overflow-hidden">

      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={footervideo} type="video/mp4" />
      </video>

      {/* 🔥 Dark Overlay (important for readability) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 grid md:grid-cols-4 gap-8">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">STYLE.</h2>
          <p>
            Discover premium collections and services. Your style, your way.
          </p>
          <div className="flex mt-4 space-x-4">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/explore">Explore</Link></li>
            <li><Link to="/collections">Collections</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li><Link to="/membership">Membership</Link></li>
            <li><Link to="/custom-orders">Custom Orders</Link></li>
            <li><Link to="/gift-cards">Gift Cards</Link></li>
            <li><Link to="/support">Support</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p>Email: support@bimfrox.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: Ahmedabad, India</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative mt-10 border-t border-white/40 pt-4 text-center text-sm">
        © 2026 Aksharcollection. All rights reserved <br />
        Made by <span className="font-bold">Bimfrox.</span>
      </div>
    </footer>
  );
}

export default Footer;