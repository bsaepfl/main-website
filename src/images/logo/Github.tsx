import React from 'react';

interface GithubProps {
    link: string;
}

const Github: React.FC<GithubProps> = ({ link }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center group p-2"
            aria-label="Follow on GitHub"
        >
            <svg
                className="w-8 h-8 fill-white group-hover:fill-dark-200 transition-colors"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.111.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.612-4.042-1.612-.546-1.386-1.333-1.755-1.333-1.755-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.806 5.625-5.475 5.92.43.371.815 1.102.815 2.222 0 1.606-.014 2.898-.014 3.293 0 .32.218.694.824.577C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"
                />
            </svg>
        </a>
    );
};

export default Github;