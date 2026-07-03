import React from "react";

const OrderPolicy = () => {
  return (
    <div className="bg-[#faf9f7] min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-12">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#0c0c0b]">
            Order Policy
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
              By placing an order through our website or WhatsApp, you agree to
              the following Order Policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0e0d0d] mb-3">
              Order Placement
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                Customers can place product enquiries and orders through our
                website or WhatsApp.
              </li>
              <li>
                All orders are subject to product availability and confirmation
                by our team.
              </li>
              <li>
                An order will be considered confirmed only after communication
                and confirmation from PIA KIDS DREAM.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#070706] mb-3">
              Product Availability
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                All products displayed on the website are subject to
                availability.
              </li>
              <li>
                In rare cases, if a product becomes unavailable after enquiry,
                we will inform the customer accordingly.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#10100f] mb-3">
              Product Information
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                We make every effort to display product images, colors, and
                descriptions accurately.
              </li>
              <li>
                Actual product colors may vary slightly due to screen settings,
                lighting conditions, and device displays.
              </li>
              <li>
                Minor variations in color, design, or texture may occur.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0d0d0c] mb-3">
              Pricing
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>All prices are displayed in Indian Rupees (INR).</li>
              <li>Prices are subject to change without prior notice.</li>
              <li>
                Applicable taxes, shipping charges, or additional charges (if
                any) will be communicated before final order confirmation.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#080807] mb-3">
              Payment
            </h2>

            <p className="mb-3">
              We currently accept payments through:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>UPI</li>
              <li>Net Banking</li>
            </ul>

            <p className="mt-4">
              Order processing will begin only after payment confirmation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0d0c0b] mb-3">
              Order Cancellation
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>Orders may be cancelled only before dispatch.</li>
              <li>
                Once an order has been processed or shipped, cancellation
                requests may not be accepted.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0b0a09] mb-3">
              Customer Responsibility
            </h2>

            <p className="mb-3">
              Customers are responsible for providing accurate:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Name</li>
              <li>Contact Number</li>
              <li>Delivery Address</li>
              <li>Order Information</li>
            </ul>

            <p className="mt-4">
              PIA KIDS DREAM shall not be responsible for delays or delivery
              issues caused by incorrect information provided by the customer.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0e0d0b] mb-3">
              Right to Refuse Orders
            </h2>

            <p>
              PIA KIDS DREAM reserves the right to refuse, cancel, or limit any
              order at its sole discretion due to product unavailability,
              incorrect pricing, suspicious activity, or any other valid reason.
            </p>
          </div>

          <div className="bg-[#fff2ff] border border-[#E7D0B2] rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-[#080706] mb-4">
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

export default OrderPolicy;