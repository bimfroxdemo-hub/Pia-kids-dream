import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#faf9f7] min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-12">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#0e0c0a]">
            Privacy Policy
          </h1>

          <div className="w-24 h-1 bg-[#822cad] mx-auto mt-4 rounded-full"></div>

          <p className="mt-4 text-gray-600 font-medium">
            Last Updated: [18/06/2026]
          </p>
        </div>

        <div className="space-y-8 text-gray-700 leading-8">

          <div>
            <p>
              <span className="font-semibold">PIA KIDS DREAM</span> is
              committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, and safeguard the information you
              provide through our website and WhatsApp communication.
            </p>
          </div>

          {/* Information We Collect */}

          <div>
            <h2 className="text-2xl font-semibold text-[#0d0c0c] mb-3">
              Information We Collect
            </h2>

            <p className="mb-3">
              We may collect the following information:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Name</li>
              <li>Mobile Number</li>
              <li>Email Address</li>
              <li>Shipping Address</li>
              <li>Order Details</li>
              <li>
                Any information voluntarily shared by you through our website
                or WhatsApp
              </li>
            </ul>
          </div>

          {/* How We Use */}

          <div>
            <h2 className="text-2xl font-semibold text-[#0b0b0a] mb-3">
              How We Use Your Information
            </h2>

            <p className="mb-3">
              The information collected may be used to:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Process and manage customer orders</li>
              <li>
                Communicate order updates and delivery information
              </li>
              <li>
                Respond to customer enquiries and support requests
              </li>
              <li>Improve our products and services</li>
              <li>
                Send promotional offers, updates, and announcements
              </li>
              <li>Maintain internal business records</li>
            </ul>
          </div>

          {/* Security */}

          <div>
            <h2 className="text-2xl font-semibold text-[#0d0d0c] mb-3">
              Information Security
            </h2>

            <p>
              We are committed to ensuring that your personal information
              remains secure. Reasonable security measures are implemented to
              prevent unauthorized access, disclosure, or misuse of customer
              information.
            </p>
          </div>

          {/* Third Party */}

          <div>
            <h2 className="text-2xl font-semibold text-[#161514] mb-3">
              Third-Party Sharing
            </h2>

            <p>
              PIA KIDS DREAM does not sell, rent, or trade customer
              information to third parties.
            </p>

            <p className="mt-4">
              Information may only be shared with trusted service providers
              such as courier partners, payment service providers, or
              government authorities when legally required.
            </p>
          </div>

          {/* Promotional */}

          <div>
            <h2 className="text-2xl font-semibold text-[#0b0b0a] mb-3">
              Promotional Use
            </h2>

            <p>
              Customer reviews, feedback, testimonials, and product-related
              content voluntarily shared with PIA KIDS DREAM may be used for
              promotional and marketing purposes on our website and social
              media platforms.
            </p>
          </div>

          {/* External Links */}

          <div>
            <h2 className="text-2xl font-semibold text-[#0c0c0b] mb-3">
              External Links
            </h2>

            <p>
              Our website may contain links to third-party websites. We are
              not responsible for the privacy practices or content of such
              websites.
            </p>
          </div>

          {/* Changes */}

          <div>
            <h2 className="text-2xl font-semibold text-[#131312] mb-3">
              Changes to This Policy
            </h2>

            <p>
              PIA KIDS DREAM reserves the right to update or modify this
              Privacy Policy at any time without prior notice. Any changes
              will be published on this page.
            </p>
          </div>

          {/* Contact */}

          <div className="bg-[#fff2ff] border border-[#E7D0B2] rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-[#090909] mb-4">
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
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;