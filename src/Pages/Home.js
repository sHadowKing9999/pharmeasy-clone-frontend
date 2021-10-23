import Banner from "../component/Banner/Banner";
import Header from "../component/Header/Header";
import ProductFeed from "../component/ProductFeed/ProductFeed";
import React from "react";
function Home() {
  return (
    <>
      <Header />
      <main className="max-w-screen-xl mx-auto">
        <Banner />
        <ProductFeed />
      </main>
    </>
  );
}

export default Home;
