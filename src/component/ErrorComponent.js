import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/outline";
function ErrorComponent({ error }) {
  return (
    <div className="flex h-72 w-full items-center justify-center">
      <div className="flex h-4/5 w-4/5 bg-white items-center justify-center border-green-700 border-2 rounded-md">
        <ExclamationCircleIcon className="h-10 w-10 text-red-700" />
        <span className="font-extrabold text-xl whitespace-nowrap">
          {error.message}
        </span>
      </div>
    </div>
  );
}

export default ErrorComponent;
