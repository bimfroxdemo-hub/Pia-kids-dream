import React from "react";

const TermsConditions = () => {
  return (
    <div className="bg-[#faf9f7] min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-12">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#080706]">
            Terms & Conditions
          </h1>

          <div className="w-24 h-1 bg-[#822cad] mx-auto mt-4 rounded-full"></div>

          <p className="mt-4 text-gray-600 font-medium">
            Last Updated: [18/06/2026]
          </p>
        </div>

        <div className="space-y-8 text-gray-700 leading-8">

          <div>
            <p>
              Welcome to <span className="font-semibold">PIA KIDS DREAM</span>.
              By accessing and using this website, you agree to comply with the
              following Terms & Conditions.
            </p>
          </div>

          {/* Website Usage */}

          <div>
            <h2 className="text-2xl font-semibold text-[#090808] mb-3">
              Website Usage
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                The content of this website is provided for general information
                and product showcase purposes.
              </li>

              <li>
                PIA KIDS DREAM reserves the right to modify, update, or remove
                any content on the website without prior notice.
              </li>

              <li>
                Unauthorized use of this website may result in legal action.
              </li>
            </ul>
          </div>

          {/* Product Information */}

          <div>
            <h2 className="text-2xl font-semibold text-[#090908] mb-3">
              Product Information
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                We strive to ensure that all product descriptions, images, and
                pricing are accurate.
              </li>

              <li>
                Actual product colors may vary slightly due to screen settings,
                lighting conditions, and device displays.
              </li>

              <li>All products are subject to availability.</li>
            </ul>
          </div>

          {/* Orders */}

          <div>
            <h2 className="text-2xl font-semibold text-[#0a0a09] mb-3">
              Orders
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                Orders and enquiries may be placed through our website or
                WhatsApp.
              </li>

              <li>
                Order confirmation is subject to product availability and
                approval by our team.
              </li>

              <li>
                PIA KIDS DREAM reserves the right to refuse or cancel any order
                without prior notice.
              </li>
            </ul>
          </div>

          {/* Pricing */}

          <div>
            <h2 className="text-2xl font-semibold text-[#0b0a09] mb-3">
              Pricing & Payments
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>All prices are displayed in Indian Rupees (INR).</li>

              <li>Prices may change without prior notice.</li>

              <li>
                Payments are accepted through approved payment methods
                communicated during order confirmation.
              </li>
            </ul>
          </div>

          {/* Intellectual Property */}

          <div>
            <h2 className="text-2xl font-semibold text-[#070606] mb-3">
              Intellectual Property
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                All website content including logos, images, graphics, text,
                and designs are the property of PIA KIDS DREAM.
              </li>

              <li>
                Copying, reproducing, or distributing any content without
                written permission is prohibited.
              </li>
            </ul>
          </div>

          {/* Limitation of Liability */}

          <div>
            <h2 className="text-2xl font-semibold text-[#080707] mb-3">
              Limitation of Liability
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                PIA KIDS DREAM shall not be liable for any direct, indirect,
                incidental, or consequential damages arising from the use of
                this website or purchase of products.
              </li>

              <li>
                We are not responsible for delays caused by courier services,
                natural events, or circumstances beyond our control.
              </li>
            </ul>
          </div>

          {/* Privacy */}

          <div>
            <h2 className="text-2xl font-semibold text-[#100f0e] mb-3">
              Privacy
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                Any information provided by customers will be handled in
                accordance with our Privacy Policy.
              </li>
            </ul>
          </div>

          {/* Changes */}

          <div>
            <h2 className="text-2xl font-semibold text-[#0a0a09] mb-3">
              Changes to Terms
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                PIA KIDS DREAM reserves the right to update these Terms &
                Conditions at any time without prior notice.
              </li>

              <li>
                Continued use of the website constitutes acceptance of any
                revised terms.
              </li>
            </ul>
          </div>

          {/* Governing Law */}

          <div>
            <h2 className="text-2xl font-semibold text-[#171615] mb-3">
              Governing Law
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                These Terms & Conditions shall be governed by the laws of India.
              </li>

              <li>
                Any disputes arising from the use of this website shall be
                subject to the jurisdiction of Surat, Gujarat courts.
              </li>
            </ul>
          </div>

          {/* Contact */}

          <div className="bg-[#fff2ff] border border-[#E7D0B2] rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-[#0b0a0a] mb-4">
              Contact Us
            </h2>

            <div className="space-y-3">
              <p>
                <span className="font-semibold">PIA KIDS DREAM</span>
              </p>

              <p>
                <span className="font-semibold">Phone:</span> +91 90549 81808
              </p>

              <p>
                <span className="font-semibold">Email:</span>{" "}
                piakidsdream@gmail.com
              </p>

              <p>
                <span className="font-semibold">Address:</span>
                 Veneziano Mall2006, Udhana - Magdalla Rd, Vesu, Surat, Gujarat 395007
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TermsConditions;