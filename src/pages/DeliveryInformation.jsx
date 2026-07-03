import React from "react";

const DeliveryInformation = () => {
  return (
    <div className="bg-[#faf9f7] min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-12">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#100f0e]">
            Delivery Information
          </h1>

          <div className="w-24 h-1 bg-[#822cad] mx-auto mt-4 rounded-full"></div>

          <p className="mt-4 text-gray-600 font-medium">
            Last Updated: [18/06/2026]
          </p>
        </div>

        <div className="space-y-10 text-gray-700 leading-8">

          <div>
            <p>
              Welcome to <span className="font-semibold">PIA KIDS DREAM</span>.
              By placing an order through our website or WhatsApp, you agree
              to the following Delivery, Cancellation, Exchange, and Return
              Policy.
            </p>
          </div>

          {/* SHIPPING POLICY */}

          <section>
            <h2 className="text-2xl font-bold text-[#11100f] mb-4">
              1. SHIPPING POLICY
            </h2>

            <h3 className="font-semibold text-lg mb-2">
              Order Confirmation
            </h3>

            <p>
              All orders are confirmed through WhatsApp communication with our
              team. Order processing will begin only after confirmation and
              successful payment.
            </p>

            <h3 className="font-semibold text-lg mt-6 mb-2">
              Delivery Time
            </h3>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                Orders are generally delivered within 7–10 business days
                across India.
              </li>

              <li>
                Delivery timelines may vary depending on product availability,
                delivery location, courier service availability, weather
                conditions, public holidays, or other unforeseen
                circumstances.
              </li>

              <li>
                Tracking details will be shared via WhatsApp once the order is
                dispatched.
              </li>
            </ul>

            <h3 className="font-semibold text-lg mt-6 mb-2">
              Payment Methods
            </h3>

            <ul className="list-disc pl-6 space-y-2">
              <li>UPI</li>
              <li>Net Banking</li>
            </ul>

            <h3 className="font-semibold text-lg mt-6 mb-2">
              Product Pricing
            </h3>

            <p>
              All prices displayed are in Indian Rupees (INR) and are
              inclusive of applicable taxes unless otherwise stated.
            </p>

            <h3 className="font-semibold text-lg mt-6 mb-2">
              Shipping Address
            </h3>

            <p>
              Customers are responsible for providing accurate delivery
              details. Address changes may be accepted only before the order
              is dispatched. Once the order has been shipped, address
              modifications may not be possible.
            </p>
          </section>

         {/* INTERNATIONAL SHIPPING */}

<section>
  <h2 className="text-2xl font-bold text-[#020202] mb-4">
    2. INTERNATIONAL SHIPPING
  </h2>

  <p>
    PIA KIDS DREAM accepts orders from customers worldwide.
  </p>

  <p className="mt-4">
    International delivery is available; however, all international
    shipping, customs duties, taxes, and other applicable charges shall
    be borne entirely by the customer.
  </p>

  <p className="mt-4">
    Shipping charges may vary depending on the destination country,
    package weight, and courier service selected. The applicable
    shipping cost will be communicated to the customer before order
    confirmation.
  </p>

  <p className="mt-4">
    PIA KIDS DREAM shall not be responsible for any customs clearance
    delays, import duties, or additional charges imposed by the
    destination country.
  </p>
</section>
          {/* CANCELLATION */}

      

          {/* EXCHANGE & RETURN */}

          <section>
            <h2 className="text-2xl font-bold text-[#0f0f0e] mb-4">
              3. EXCHANGE & RETURN POLICY
            </h2>

            <h3 className="font-semibold text-lg mb-2">
              Return Policy
            </h3>

            <p>
              Products sold by PIA KIDS DREAM are generally non-refundable.
            </p>

            <h3 className="font-semibold text-lg mt-6 mb-2">
              Exchange Policy
            </h3>

            <p className="mb-3">
              Size exchange requests may be considered only if:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>The requested size is available in stock.</li>
              <li>The request is made within 48 hours of delivery.</li>
              <li>
                The product is unused, unwashed, undamaged, and has all
                original tags attached.
              </li>
            </ul>

            <h3 className="font-semibold text-lg mt-6 mb-2">
              Exchange Will Not Be Accepted For:
            </h3>

            <ul className="list-disc pl-6 space-y-2">
              <li>Used products</li>
              <li>Washed products</li>
              <li>Products without original tags</li>
              <li>Customized or altered products</li>
              <li>Products damaged due to customer handling</li>
            </ul>

            <p className="mt-4">
              A product may be exchanged only once.
            </p>
          </section>

          {/* DAMAGED PRODUCTS */}

          <section>
            <h2 className="text-2xl font-bold text-[#0b0b0a] mb-4">
              4. DAMAGED OR INCORRECT PRODUCTS
            </h2>

            <p className="mb-3">
              In the rare event that you receive a damaged, defective, or
              incorrect product:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Contact us within 48 hours of delivery.</li>
              <li>Share clear photographs of:</li>

              <ul className="list-disc pl-8 mt-2 space-y-2">
                <li>The product</li>
                <li>Packaging</li>
                <li>Shipping label</li>
              </ul>
            </ul>

            <p className="mt-4">
              Claims raised after 48 hours of delivery may not be accepted.
            </p>

            <h3 className="font-semibold text-lg mt-6 mb-2">
              Replacement Process
            </h3>

            <p className="mb-3">
              After verification and approval by our team:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                The damaged product may be collected by our courier partner.
              </li>

              <li>
                A replacement product will be dispatched subject to stock
                availability.
              </li>
            </ul>

            <p className="mt-4">
              No additional shipping charges will be applicable for approved
              replacement requests.
            </p>
          </section>

          {/* DELIVERY DELAYS */}

          <section>
            <h2 className="text-2xl font-bold text-[#090808] mb-4">
              5. DELIVERY DELAYS
            </h2>

            <p className="mb-3">
              PIA KIDS DREAM shall not be held responsible for delays caused
              by:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Courier company delays</li>
              <li>Natural disasters</li>
              <li>Severe weather conditions</li>
              <li>Government restrictions</li>
              <li>Public holidays</li>
              <li>Strikes or circumstances beyond our control</li>
            </ul>
          </section>

          {/* POLICY CHANGES */}

          <section>
            <h2 className="text-2xl font-bold text-[#020202] mb-4">
              6. POLICY CHANGES
            </h2>

            <p>
              PIA KIDS DREAM reserves the right to modify, update, or amend
              this policy at any time without prior notice. Updated versions
              will be published on this page.
            </p>
          </section>

          {/* CONTACT */}

          <section className="bg-[#fff2ff] border border-[#E7D0B2] rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-[#0e0d0c] mb-4">
              7. CONTACT US
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
          </section>

        </div>
      </div>
    </div>
  );
};

export default DeliveryInformation;