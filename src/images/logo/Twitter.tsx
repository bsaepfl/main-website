import React from "react";

const Twitter = () => {
  return (
    <a
      href="https://twitter.com/bsa_epfl"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center group p-2" // Changed p-[8px] to p-2
      aria-label="Follow us on Twitter" // Added for accessibility
    >
      <svg
        className="w-8 h-8 fill-white group-hover:fill-dark-200 transition-colors" // Moved fill to className, added transition
        viewBox="0 0 73 73"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true" // SVG is decorative
      >
        <path
          fillRule="evenodd" // camelCase for React
          clipRule="evenodd" // camelCase for React
          d="M22.9585 65.6992C50.5051 65.6992 65.5723 43.2282 65.5723 23.7438C65.5723 23.1042 65.5722 22.4693 65.5284 21.8369C68.4594 19.7526 70.9889 17.1647 73 14.2036C70.2698 15.3967 67.368 16.1791 64.4006 16.524C67.525 14.6805 69.8647 11.7843 70.9852 8.36679C68.0433 10.0845 64.8276 11.2968 61.4733 11.9473C55.8012 6.01067 46.3149 5.72304 40.2814 11.3075C36.3942 14.9082 34.7407 20.2769 35.9489 25.3978C23.9075 24.8012 12.6874 19.2025 5.0808 9.99218C1.10595 16.7301 3.139 25.3466 9.71995 29.6733C7.3365 29.605 5.00415 28.9732 2.92 27.8305V28.0176C2.92365 35.0359 7.9497 41.079 14.9358 42.4697C12.7312 43.0626 10.4171 43.1486 8.176 42.721C10.136 48.7295 15.7607 52.8449 22.1665 52.9634C16.863 57.0673 10.3113 59.2957 3.56605 59.2886C2.37615 59.285 1.18625 59.2166 0 59.0765C6.85105 63.4032 14.819 65.6993 22.9585 65.6885"
        />
      </svg>
    </a>
  );
};

export default Twitter;