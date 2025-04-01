import React from "react";

const LinkedIn = () => {
  return (
    <a
      href="https://www.linkedin.com/company/blockchain-student-association/mycompany/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center group p-2" // Changed p-[8px] to p-2
      aria-label="Visit our LinkedIn page" // Added for accessibility
    >
      <svg
        className="w-8 h-8 fill-white group-hover:fill-dark-200 transition-colors" // Moved fill to className, added transition
        viewBox="0 0 70 70"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true" // SVG is decorative
      >
        <g clipPath="url(#clip0_1010_8)">
          <path
            fillRule="evenodd" // camelCase for React
            clipRule="evenodd" // camelCase for React
            d="M70 70H56V45.5034C56 38.7834 53.0355 35.0342 47.719 35.0342C41.9335 35.0342 38.5 38.9409 38.5 45.5034V70H24.5V24.5H38.5V29.6167C38.5 29.6167 42.8925 21.9092 52.7905 21.9092C62.692 21.9092 70 27.9514 70 40.4534V70ZM8.547 17.2231C3.8255 17.2231 0 13.3664 0 8.60986C0 3.85686 3.8255 0 8.547 0C13.265 0 17.0905 3.85686 17.0905 8.60986C17.094 13.3664 13.265 17.2231 8.547 17.2231ZM0 70H17.5V24.5H0V70Z"
          />
        </g>
        <defs>
          <clipPath id="clip0_1010_8">
            <rect width="70" height="70" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </a>
  );
};

export default LinkedIn;