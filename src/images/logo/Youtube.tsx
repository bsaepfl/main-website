import React from 'react';

interface YoutubeProps {
  link: string;
}

const Youtube: React.FC<YoutubeProps> = ({ link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center group p-2"
      aria-label="Visit our YouTube channel"
    >
      <svg
        className="w-8 h-8 fill-white group-hover:fill-dark-200 transition-colors"
        viewBox="0 0 91 91"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g clipPath="url(#clip0_935_152)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M36.3474 57.2669V31.7331C45.4119 35.9984 52.4323 40.1188 60.7355 44.5611C53.8872 48.359 45.4119 52.6204 36.3474 57.2669ZM86.8641 19.034C85.3004 16.9739 82.6355 15.3703 79.7983 14.8394C71.4589 13.2558 19.433 13.2513 11.0981 14.8394C8.82294 15.266 6.79696 16.2969 5.05656 17.8987C-2.27665 24.705 0.0212311 61.2053 1.78882 67.1178C2.53211 69.677 3.49299 71.5227 4.70311 72.7342C6.26221 74.3359 8.39687 75.4388 10.8488 75.9334C17.7152 77.3537 53.0896 78.1478 79.6532 76.1467C82.1006 75.7202 84.267 74.5818 85.9757 72.9119C92.756 66.1328 92.2937 27.5827 86.8641 19.034Z"
          />
        </g>
        <defs>
          <clipPath id="clip0_935_152">
            <rect width="91" height="91" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </a>
  );
};

export default Youtube;