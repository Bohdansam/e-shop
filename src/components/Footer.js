import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold">cyber</h1>
          <p className="mt-2 max-w-md">
            We are a residential interior design firm located in Portland. Our boutique-studio offers more than
          </p>
        </div>


        {/* Bottom sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Services column */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Services</h2>
            <ul className="space-y-2">
              <li>Bonus program</li>
              <li>Gift cards</li>
              <li>Credit and payment</li>
              <li>Service contracts</li>
              <li>Non-cash account</li>
              <li>Payment</li>
            </ul>
          </div>

          {/* Assistance column */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Assistance to the buyer</h2>
            <ul className="space-y-2">
              <li>Find an order</li>
              <li>Terms of delivery</li>
              <li>Exchange and return of goods</li>
              <li>Guarantee</li>
              <li>Frequently asked questions</li>
              <li>Terms of use of the site</li>
            </ul>
          </div>

          {/* Empty column for spacing */}
          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;