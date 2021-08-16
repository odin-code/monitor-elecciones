import React from "react";

const VideoButton = ({ text, active }) => {
  return (
    <span className="relative inline-flex rounded-md shadow-sm">
      <button
        type="button"
        className={
          active
            ? "inline-flex items-center px-4 py-2 text-base leading-6 font-medium rounded transition-colors duration-200 bg-gradient-to-r from-blue-500 to-teal-400 text-indigo-50 ease-in-out"
            : "inline-flex items-center px-4 py-2 text-base leading-6 font-medium rounded bg-blue-100 text-blue-400 transition-colors duration-200 bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 hover:text-indigo-50 ease-in-out"
        }>
        {text}
      </button>
      {active ? (
        <div className="flex absolute top-0 right-0 -mt-0.5 -mr-1">
          <span className="absolute inline-flex animate-ping">
            <span className="inline-flex rounded-full h-3 w-3 bg-pink-300 opacity-75"></span>
          </span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-400"></span>
        </div>
      ) : (
        ""
      )}
    </span>
  );
};

export default VideoButton;
