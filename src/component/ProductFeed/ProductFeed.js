import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import getFeed from "../../redux/actions/getFeed";
import Products from "../Products/Products";
import PharmeasyPlus from "../PharmeasyPlus/PharmeasyPlus";
import ErrorComponent from "../ErrorComponent";
import LoadingComponent from "../LoadingComponent";
function ProductFeed() {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  useEffect(() => dispatch(getFeed()), []);
  const posts = useSelector((state) => state.feed);
  const { feeds, isLoading, error } = posts;
  if (isLoading) return <LoadingComponent />;
  else if (error != null) return <ErrorComponent error={error} />;
  else
    return (
      <div className="grid grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-12">
        {feeds
          .slice(0, 4)
          .map(({ _id, title, price, description, category, image }) => (
            <Products
              key={_id}
              id={_id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
        <PharmeasyPlus />
        <div>
          {feeds
            .slice(5, 6)
            .map(({ _id, title, price, description, category, image }) => (
              <Products
                key={_id}
                id={_id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
              />
            ))}
        </div>
        <div className="md:col-span-2 h-auto">
          {feeds
            .slice(4, 5)
            .map(({ _id, title, price, description, category, image }) => (
              <Products
                key={_id}
                id={_id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
              />
            ))}
        </div>
        {feeds
          .slice(6, feeds.length)
          .map(({ _id, title, price, description, category, image }) => (
            <Products
              key={_id}
              id={_id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>
    );
}

export default ProductFeed;
