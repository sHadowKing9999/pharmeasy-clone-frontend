import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import addtoBasket from "../redux/actions/addtoBasket";
import removeFromBasket from "../redux/actions/removeFromBasket";
import addtoBasketandDb from "../redux/actions/addtoBasketandDb";
import modifyBasketandDb from "../redux/actions/modifyBasketandb";
import deleteFromBasketDb from "../redux/actions/deleteFromBasketDb";
function CheckoutProduct({
  _id,
  id,
  title,
  price,
  description,
  rating,
  category,
  image,
  quantity,
}) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const baskets = useSelector((state) => state.basket.baskets);
  const addProductToBasket = () => {
    const product = {
      _id,
      productId: {
        _id: id,
        title,
        price,
        description,
        category,
        image,
        rating,
      },
      quantity,
    };
    if (token === null) dispatch(addtoBasket(product));
    else {
      const ind = baskets.findIndex((item) => item.productId._id === id);
      if (ind < 0) dispatch(addtoBasketandDb(token.token, id));
      else
        dispatch(
          modifyBasketandDb(
            token.token,
            baskets[ind]._id,
            baskets[ind].quantity + 1
          )
        );
    }
  };
  const removeProductFromBasket = () => {
    if (token === null) dispatch(removeFromBasket(id));
    else {
      const ind = baskets.findIndex((item) => item.productId._id === id);
      if (ind < 0) console.warn("Not Found in dB");
      else {
        if (baskets[ind].quantity === 1) {
          dispatch(deleteFromBasketDb(token.token, baskets[ind]._id));
        } else {
          dispatch(
            modifyBasketandDb(
              token.token,
              baskets[ind]._id,
              baskets[ind].quantity - 1
            )
          );
        }
      }
    }
  };
  return (
    <div className="md:grid md:grid-cols-5 border-2 border-md p-4">
      <img
        className="w-48 h-48 object-contain mx-auto my-3 block"
        loading="lazy"
        src={image}
        alt={`checkoutProduct${id}`}
      />
      <div className="col-span-3 mx-5 flex-col h-full border-b-2">
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
        <div className="w-full mb-4 text-center">
          <span>Quantity : </span>
          {quantity}
        </div>
        <button onClick={addProductToBasket} className="button w-full">
          Add to Basket
        </button>
        <button onClick={removeProductFromBasket} className="button w-full">
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
