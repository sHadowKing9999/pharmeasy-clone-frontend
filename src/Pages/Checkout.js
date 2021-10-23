import React, { useEffect, useState } from "react";
import Header from "../component/Header/Header";
import PharmeasyPlus from "../component/PharmeasyPlus/PharmeasyPlus";
import CheckoutProduct from "../component/CheckoutProduct";
import { useSelector } from "react-redux";
function Checkout() {
  let baskets = useSelector((state) => state.basket.baskets);
  const tok = useSelector((state) => state.login.token);
  const [token, setToken] = useState(null);
  useEffect(() => {
    if (tok != null) {
      setToken(tok.token);
    }
  }, [tok]);
  const total = baskets.reduce(
    (total, item) => total + item.productId.price * item.quantity,
    0
  );
  return (
    <div className="bg-gray-100 ">
      <Header />
      <main className="lg:flex max-w-screen-2xl h-auto mx-auto">
        <div
          className={`mr-0 md:mr-2 lg:mr-8 ${baskets.length === 0 && "mt-8"}`}
        >
          <PharmeasyPlus />
          <div className="flex flex-col p-5 space-y-10 bg-white m-6">
            <h1 className="text-3xl border-b pb-4">
              {baskets.length === 0
                ? "Your Basket is Empty"
                : "Your Pharmeasy Basket"}
            </h1>
            {baskets.map(({ _id, productId, quantity }, i) => (
              <CheckoutProduct
                key={_id || i}
                _id={_id}
                id={productId._id}
                title={productId.title}
                price={productId.price}
                description={productId.description}
                category={productId.category}
                image={productId.image}
                rating={productId.rating}
                quantity={quantity}
              />
            ))}
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
                disabled={token === null ? true : false}
                className={`button mt-2 rounded-md ${
                  token === null &&
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
