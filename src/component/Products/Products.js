import { StarIcon } from "@heroicons/react/solid";
import addtoBasket from "../../redux/actions/addtoBasket";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import addtoBasketandDb from "../../redux/actions/addtoBasketandDb";
import modifyBasketandDb from "../../redux/actions/modifyBasketandb";
const minRating = 1;
const maxRating = 5;
function Products(props) {
  const { _id, id, title, price, description, category, image } = props;
  const [rating] = useState(
    Math.floor(Math.random() * (maxRating - minRating + 1)) + minRating
  );
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const baskets = useSelector((state) => state.basket.baskets);
  const addProductToBasket = () => {
    const quantity = 1;
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

  return (
    <div className="relative  flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-gray-400">{category}</p>
      <img
        loading="lazy"
        className="h-48 w-48 self-center object-contain"
        src={image}
        alt={`imageProduct${id}`}
      />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="my-2 text-xs line-clamp-2">{description}</p>
      <div className="mb-2 md:mb-4">
        {new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
        }).format(price / 100)}
      </div>
      <button onClick={addProductToBasket} className="button mt-auto">
        Add to Basket
      </button>
    </div>
  );
}

export default Products;
