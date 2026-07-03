// Footer.jsx

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white text-black border-t border-purple-100">

      {/* SOFT GLOW */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-200/40 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-fuchsia-100/50 blur-3xl rounded-full"></div>

      {/* TOP LINE */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>

      {/* MAIN */}
      <div className="relative max-w-7xl mx-auto px-6 py-20">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-14">

          {/* BRAND */}
          <div>

            <h2 className="text-4xl font-light tracking-wide text-black">
              Piakids.
            </h2>

            <div className="w-14 h-[2px] bg-purple-500 mt-4 mb-5"></div>

            <p className="text-sm leading-7 text-black/70">
              Discover timeless fashion collections designed
              with elegance, comfort and premium styling for
              every modern wardrobe.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-11 h-11 border border-purple-100 bg-white shadow-sm flex items-center justify-center hover:bg-purple-600 hover:text-white hover:-translate-y-1 duration-500"
              >
                <FaFacebookF size={14} />
              </a>

              <a
                href="https://www.instagram.com/pia_kids_dream/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 border border-purple-100 bg-white shadow-sm flex items-center justify-center hover:bg-purple-600 hover:text-white hover:-translate-y-1 duration-500"
              >
                <FaInstagram size={14} />
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 border border-purple-100 bg-white shadow-sm flex items-center justify-center hover:bg-purple-600 hover:text-white hover:-translate-y-1 duration-500"
              >
                <FaYoutube size={16} />
              </a>

            </div>
          </div>

          {/* LINKS */}
          <div>

            <h3 className="text-lg font-semibold mb-6 text-black">
              Quick Links
            </h3>

            <ul className="space-y-4 text-sm text-black/70">

              <li>
                <Link
                  to="/"
                  className="hover:text-purple-600 duration-300 hover:pl-1 inline-block"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-purple-600 duration-300 hover:pl-1 inline-block"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/collections"
                  className="hover:text-purple-600 duration-300 hover:pl-1 inline-block"
                >
                  Collections
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-purple-600 duration-300 hover:pl-1 inline-block"
                >
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* SERVICES */}
          <div>

            <h3 className="text-lg font-semibold mb-6 text-black">
              Services
            </h3>

            <ul className="space-y-4 text-sm text-black/70">

              <li>
                <Link
                  to="/about"
                  className="hover:text-purple-600 duration-300 hover:pl-1 inline-block"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/delivery-information"
                  className="hover:text-purple-600 duration-300 hover:pl-1 inline-block"
                >
                  Delivery Information
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-purple-600 duration-300 hover:pl-1 inline-block"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms-conditions"
                  className="hover:text-purple-600 duration-300 hover:pl-1 inline-block"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/order-policy"
                  className="hover:text-purple-600 duration-300 hover:pl-1 inline-block"
                >
                  Order Policy
                </Link>
              </li>

            </ul>
          </div>

          {/* NEWSLETTER */}
          {/* ADDRESS + MAP */}
          <div>

            {/* ADDRESS + MAP */}
            <div>

              <h3 className="text-lg font-semibold mb-6 text-black">
                Visit Our Store
              </h3>

              <p className="text-sm text-black/70 leading-8 mb-5">
                PIA KIDS DREAM <br />
                Veneziano Mall2006, GF-10, <br />
                Udhana - Magdalla Rd, <br />
                Vesu, Surat, Gujarat 395007 <br />
                Phone: 090549 81808
              </p>

              {/* MAP */}
              <div className="overflow-hidden border border-purple-100 shadow-sm h-52">

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1106.2733982413133!2d72.77630189181373!3d21.150593869852507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d9aafb80159%3A0x6f0cbfd4ace8ab78!2sPIA%20KIDS%20DREAM!5e0!3m2!1sen!2sin!4v1779774965229!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

              </div>

            </div>

          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-purple-100 mt-16 pt-7 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-black/50">
            © 2026 Piakids. All rights reserved.
          </p>
          <p className="text-sm text-black/50">
            Crafted with ❤️ by{" "}
            <a
              href="https://www.bimfrox.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-purple-500 hover:text-purple-600 transition-colors duration-300"
            >
              Bimfrox
            </a>
          </p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;