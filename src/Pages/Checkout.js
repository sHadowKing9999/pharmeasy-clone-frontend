import React from "react";
import Header from "../component/Header/Header";
import PharmeasyPlus from "../component/PharmeasyPlus/PharmeasyPlus";
import CheckoutProduct from "../component/CheckoutProduct";
import { useSelector } from "react-redux";
function Checkout() {
  let baskets = useSelector((state) => state.basket.baskets);
  const token = useSelector((state) => state.login.token.token);
  const total = baskets.reduce((total, item) => total + item.price, 0);
  return (
    <div className="bg-gray-100 ">
      <Header />
      <main className="lg:flex max-w-screen-2xl h-auto mx-auto">
        <div className={`mr-8 ${baskets.length === 0 && "mt-8"}`}>
          <PharmeasyPlus />
          <div className="flex flex-col p-5 space-y-10 bg-white m-6">
            <h1 className="text-3xl border-b pb-4">
              {baskets.length === 0
                ? "Your Basket is Empty"
                : "Your Pharmeasy Basket"}
            </h1>
            {baskets.map(
              (
                { id, title, price, description, category, rating, image },
                i
              ) => (
                <CheckoutProduct
                  key={i}
                  id={id}
                  title={title}
                  price={price}
                  description={description}
                  category={category}
                  image={image}
                  rating={rating}
                />
              )
            )}
          </div>
        </div>
        <div className="flex flex-col p-10 shadow-md bg-white mt-8">
          {baskets.length > 0 && (
            <>
              <h1 className="whitespace-nowrap">
                Subtotal ( {baskets.length} items ) :
                <span className="ml-2 font-bold">
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR",
                  }).format(total / 100)}
                </span>
              </h1>

              <button
                disabled={token == null ? true : false}
                className={`button mt-2 rounded-md ${
                  token == null &&
                  "from-gray-300 to-gray-500 text-gray-300  cursor-not-allowed"
                }`}
              >
                {token === null ? "Sign In to Checkout" : "Proceed to Checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
