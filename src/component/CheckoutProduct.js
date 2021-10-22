import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import addtoBasket from "../redux/actions/addtoBasket";
import removeFromBasket from "../redux/actions/removeFromBasket";
function CheckoutProduct({
  id,
  title,
  price,
  description,
  rating,
  category,
  image,
}) {
  const dispatch = useDispatch();

  const addProductToBasket = () => {
    const product = { id, title, price, description, category, image, rating };
    dispatch(addtoBasket(product));
  };
  const removeProductFromBasketsd = () => {
    dispatch(removeFromBasket(id));
  };
  return (
    <div className="grid grid-cols-5 border-b-2 p-4">
      <img
        className="w-48 h-48 object-contain"
        loading="lazy"
        src={image}
        alt={`checkoutProduct${id}`}
      />
      <div className="col-span-3 mx-5 flex-col h-full ">
        <p className="mb-2">{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="h-5 text-yellow-500" key={i} />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <div className="mb-2 md:mb-4">
          {new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
          }).format(price / 100)}
        </div>
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={addProductToBasket} className="button w-full">
          Add to Basket
        </button>
        <button onClick={removeProductFromBasketsd} className="button w-full">
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
