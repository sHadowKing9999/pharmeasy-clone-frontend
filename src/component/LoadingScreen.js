import React from "react";
import LoadingComponent from "./LoadingComponent";
function LoadingScreen({ loading }) {
  return (
    <div
      className={`bg-green-800 opacity-25 h-screen w-full fixed z-50 ${
        !loading && "hidden"
      }`}
    >
      <LoadingComponent />
    </div>
  );
}

export default LoadingScreen;
