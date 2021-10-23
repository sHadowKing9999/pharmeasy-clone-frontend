import React from "react";
import ReactLoading from "react-loading";
function LoadingComponent() {
  return (
    <div className="flex h-full w-full items-center justify-center mx-auto my-auto">
      <ReactLoading type={"bars"} color={"#10847e"} height={200} width={200} />
    </div>
  );
}

export default LoadingComponent;
