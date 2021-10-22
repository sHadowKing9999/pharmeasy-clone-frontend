import React from "react";

function PharmeasyPlus() {
  return (
    <div className="md:flex relative z-40 col-span-full rounded-md p-10 md:space-x-6 m-6 bg-gradient-to-br from-pharmeasy_plus-light via-indigo-600 to-pharmeasy_plus">
      <img
        className="object-contain w-full md:w-1/3 lg:w-1/4 "
        src="https://assets.pharmeasy.in/web-assets/dist/e3db129c.png"
        alt="pharmeasypluslgo"
      />
      <img
        className="object-contain hidden lg:inline-flex lg:w-1/5 absolute right-1 bottom-2"
        src="https://assets.pharmeasy.in/web-assets/dist/b20b0932.png"
        alt="discountlogo"
      />

      <p className="text-white mt-4 md:mt-0 w-full md:w-3/5 lg:w-1/2 font-extrabold font-serif text-xl">
        Save 7% extra on medicines, get a FREE lab test &amp; enjoy FREE
        delivery with PLUS Membership
      </p>
    </div>
  );
}

export default PharmeasyPlus;
