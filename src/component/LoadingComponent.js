import React from "react";
import ReactLoading from "react-loading";
function LoadingComponent() {
  return (
    <div className="flex h-72 w-full items-center justify-center">
      <ReactLoading type={"bars"} color={"#10847e"} height={200} width={200} />
    </div>
  );
}

export default LoadingComponent;
