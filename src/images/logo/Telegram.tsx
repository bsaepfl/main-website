import React from "react";

const Telegram = () => {
  return (
    <a
      href="https://t.me/+Yg2GqxoXDIIwYWJk"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center group p-2" // Changed p-[8px] to p-2 for consistency (Tailwind uses rem-based units)
      aria-label="Join our Telegram" // Added for accessibility
    >
      <svg
        className="w-8 h-8 fill-white group-hover:fill-dark-200 transition-colors" // Moved fill to className, added transition
        viewBox="0 0 84 84"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true" // SVG is decorative, hide from screen readers
      >
        <g clipPath="url(#clip0_936_157)">
          <path
            fillRule="evenodd" // camelCase for React
            clipRule="evenodd" // camelCase for React
            d="M69.2206 15.5044C73.0282 13.9012 77.1103 17.121 76.4379 21.1974L68.4968 69.3459C67.731 73.9883 62.6322 76.6521 58.373 74.3386C54.809 72.4027 49.5212 69.4232 44.7556 66.3092C42.3759 64.7542 35.0893 59.7681 35.9849 56.2188C36.7507 53.1839 49.0004 41.7813 56.0004 35C58.75 32.3363 57.4977 30.7974 54.2504 33.25C46.1948 39.3341 33.2616 48.5842 28.9848 51.1875C25.2113 53.4842 23.2411 53.8762 20.891 53.4842C16.5996 52.7692 12.6209 51.6618 9.3726 50.3153C4.9823 48.4953 5.19615 42.462 9.36962 40.705L69.2206 15.5044Z"
          />
        </g>
        <defs>
          <clipPath id="clip0_936_157">
            <rect width="84" height="84" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </a>
  );
};

export default Telegram;