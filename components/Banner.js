import React, { useState } from "react";
import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline";

const Banner = ({ text, textButton, linkButton }) => {
  const [close, setClose] = useState(false);
  return (
    <>
      {!close && (
        <div className="bg-gradient-to-r from-indigo-400 to-indigo-300 rounded">
          <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between flex-wrap">
              <div className="w-0 flex-1 flex items-center">
                <span className="flex p-2 rounded bg-indigo-500">
                  <SpeakerphoneIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
                <p className="ml-3 font-medium text-white truncate">
                  <span className="hidden md:inline">{text}</span>
                </p>
              </div>
              <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                <a
                  href={linkButton}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 rounded text-sm font-medium text-indigo-600 bg-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-indigo-400 hover:text-white ease-in-out">
                  {textButton}
                </a>
              </div>
              <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                <button
                  onClick={() => setClose(true)}
                  type="button"
                  className="-mr-1 flex p-1 rounded focus:outline-none sm:-mr-2 ">
                  <XIcon className="h-6 w-6 text-white " aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
