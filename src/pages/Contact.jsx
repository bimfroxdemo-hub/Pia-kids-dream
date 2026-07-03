import { useState } from "react";
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "919054981808";

    const text = `🌸 NEW CONTACT MESSAGE 🌸

👤 Name: ${form.name}

📧 Email: ${form.email}

📞 Phone: ${form.phone}

📝 Message:
${form.message}`;

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-[#fff8fb] pt-24 md:pt-28 pb-16 px-4 md:px-10 overflow-hidden">
<Helmet>
  <title>Contact Pia Kids Dream | Kidswear Brand Support & Enquiry</title>

  <meta
    name="description"
    content="Contact Pia Kids Dream for premium kidswear orders, custom outfits, birthday dresses and enquiries. Reach us via WhatsApp, phone or email for quick support."
  />

  <meta
    name="keywords"
    content="contact Pia Kids Dream, kidswear contact India, kids dress enquiry, custom kids outfits, Priya Mahapatra contact, kids clothing store Surat"
  />

  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta property="og:title" content="Contact Pia Kids Dream | Kidswear Brand" />

  <meta
    property="og:description"
    content="Get in touch with Pia Kids Dream for premium kidswear, custom designs and quick WhatsApp support."
  />

  <meta property="og:type" content="website" />

  <meta property="og:image" content="https://yourdomain.com/contact-preview.jpg" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Contact Pia Kids Dream" />
  <meta
    name="twitter:description"
    content="Reach Pia Kids Dream for premium kidswear orders and support."
  />
  <meta name="twitter:image" content="https://yourdomain.com/contact-preview.jpg" />
</Helmet>
      {/* HEADER */}
      <div className="text-center mb-14">

        <p className="uppercase tracking-[6px] text-[11px] text-purple-400">
          Contact Us
        </p>

        <h1 className="text-3xl md:text-5xl font-light text-[#111] mt-3">
          Let’s Connect
        </h1>

        <div className="w-20 h-[1px] bg-purple-300 mx-auto mt-5"></div>

      </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 md:gap-10">

        {/* LEFT FORM */}
        <div className="bg-white border border-purple-100 shadow-sm p-6 md:p-10">

          <p className="uppercase tracking-[5px] text-[10px] text-purple-400 mb-3">
            Send Message
          </p>

          <h2 className="text-2xl md:text-3xl font-light text-[#111] mb-8">
            We’d love to hear from you
          </h2>

          <form onSubmit={handleSubmit}>

            {/* NAME */}
            <div className="mb-5">

              <label className="text-xs uppercase tracking-[3px] text-gray-400">
                Your Name
              </label>

              <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="
                  w-full
                  border-b
                  border-purple-100
                  bg-transparent
                  py-4
                  text-sm
                  outline-none
                  focus:border-purple-500
                  transition
                "
              />

            </div>
            {/* PHONE */}
            <div className="mb-5">

              <label className="text-xs uppercase tracking-[3px] text-gray-400">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
                className="
      w-full
      border-b
      border-purple-100
      bg-transparent
      py-4
      text-sm
      outline-none
      focus:border-purple-500
      transition
    "
              />

            </div>
            {/* EMAIL */}
            <div className="mb-5">

              <label className="text-xs uppercase tracking-[3px] text-gray-400">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="
                  w-full
                  border-b
                  border-purple-100
                  bg-transparent
                  py-4
                  text-sm
                  outline-none
                  focus:border-purple-500
                  transition
                "
              />

            </div>

            {/* MESSAGE */}
            <div className="mb-8">

              <label className="text-xs uppercase tracking-[3px] text-gray-400">
                Message
              </label>

              <textarea
                rows="5"
                name="message"
                onChange={handleChange}
                placeholder="Write your message..."
                required
                className="
                  w-full
                  border-b
                  border-purple-100
                  bg-transparent
                  py-4
                  text-sm
                  outline-none
                  resize-none
                  focus:border-purple-500
                  transition
                "
              ></textarea>

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="
                w-full
                bg-purple-500
                hover:bg-purple-600
                text-white
                py-4
                text-sm
                tracking-wide
                transition-all duration-300
                shadow-lg shadow-purple-100
                flex items-center justify-center gap-3
              "
            >
              <FaWhatsapp size={18} />
              SEND ON WHATSAPP
            </button>

          </form>

        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-6">

          {/* INFO BOX */}
          <div className="bg-white border border-purple-100 shadow-sm p-6 md:p-10">

            <p className="uppercase tracking-[5px] text-[10px] text-purple-400 mb-3">
              Contact Details
            </p>

            <h2 className="text-2xl md:text-3xl font-light text-[#111] mb-10">
              Reach Us
            </h2>

            <div className="space-y-8">

              {/* ADDRESS */}
              <div className="flex gap-4">

                <FaMapMarkerAlt className="text-purple-500 mt-1" size={18} />

                <div>
                  <p className="text-xs uppercase tracking-[3px] text-gray-400 mb-2">
                    Address
                  </p>

                <p className="text-gray-600 text-sm md:text-base leading-7">
  Veneziano Mall 2006,
  <br />
  Shop No-10,
  <br />
  Udhana - Magdalla Rd,
  <br />
  Vesu, Surat, Gujarat 395007
</p>
                </div>

              </div>

              {/* PHONE */}
              <div className="flex gap-4">

                <FaPhoneAlt className="text-purple-500 mt-1" size={16} />

                <div>
                  <p className="text-xs uppercase tracking-[3px] text-gray-400 mb-2">
                    Phone
                  </p>

                  <p className="text-gray-600 text-sm md:text-base">
                    +91 90549 81808
                  </p>
                </div>

              </div>

              {/* EMAIL */}
              <div className="flex gap-4">

                <FaEnvelope className="text-purple-500 mt-1" size={16} />

                <div>
                  <p className="text-xs uppercase tracking-[3px] text-gray-400 mb-2">
                    Email
                  </p>

                  <p className="text-gray-600 text-sm md:text-base">
                    piakidsdream@gmail.com
                  </p>
                </div>

              </div>

              {/* HOURS */}
              <div className="flex gap-4">

                <FaClock className="text-purple-500 mt-1" size={16} />

                <div>
                  <p className="text-xs uppercase tracking-[3px] text-gray-400 mb-2">
                    Working Hours
                  </p>

                  <p className="text-gray-600 text-sm md:text-base leading-7">
                    Monday – Saturday
                    <br />
                    10:00 AM – 8:00 PM
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* SUPPORT CARD */}
          <div className="bg-purple-500 text-white p-8 shadow-xl">

            <p className="uppercase tracking-[5px] text-[10px] opacity-70 mb-3">
              Quick Support
            </p>

            <h3 className="text-2xl font-light leading-snug">
              We usually reply
              <br />
              within a few hours
            </h3>

          </div>

        </div>

      </div>

      {/* MAP */}
      <div className="max-w-7xl mx-auto mt-10">

        <div className="bg-white border border-purple-100 shadow-sm overflow-hidden p-2">

          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1106.2733982413133!2d72.77630189181373!3d21.150593869852507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d9aafb80159%3A0x6f0cbfd4ace8ab78!2sPIA%20KIDS%20DREAM!5e0!3m2!1sen!2sin!4v1779774965229!5m2!1sen!2sin"
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>

      </div>

    </div>
  );
}