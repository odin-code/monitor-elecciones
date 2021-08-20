import React from "react";

const TweetPulse = () => {
  return (
    <div class="rounded border border-gray-300 dark:border-gray-900 px-6 py-4 mt-4 w-full bg-gray-50 dark:bg-gray-800">
      <div class="animate-pulse flex space-x-4">
        <div class="rounded-full bg-blue-300 h-12 w-12"></div>
        <div class="flex-1 space-y-2 py-1">
          <div class="h-4 bg-blue-300 rounded w-2/4"></div>
          <div class="h-4 bg-blue-300 rounded w-2/4"></div>
        </div>
      </div>
      <div class="animate-pulse flex space-x-4 mt-2">
        <div class="flex-1 space-y-4 py-1">
          <div class="space-y-2">
            <div class="h-4 bg-blue-300 rounded w-6/6"></div>
            <div class="h-4 bg-blue-300 rounded w-6/6"></div>     
          </div>
          <div class="h-4 bg-blue-300 rounded w-3/6"></div>
        </div>
      </div>
    </div>
  );
};

export default TweetPulse;
