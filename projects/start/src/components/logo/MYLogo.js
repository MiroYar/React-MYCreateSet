import React from 'react';
import './MYLogo.scss';

export default function MYLogo() {
    return (
        <a href="https://github.com/MiroYar/React-MYCreateSet" target="_blank">
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid meet"
                className="my-logo"
                viewBox="0 0 500 500"
                width="500"
                height="500"
            >
                <g fill="none" strokeWidth="40" strokeOpacity="1" strokeLinecap="round">
                    <g className="my-logo__l" stroke="#91d67e">
                        <line x1="250" y1="250" x2="250" y2="460" />
                        <line x1="250" y1="250" x2="432.365" y2="145.5" />
                        <line x1="250" y1="250" x2="68.635" y2="145.5" />
                    </g>
                    <g className="my-logo__m" stroke="#dfe6df">
                        <path d="M355,68.134 L460,250 L355,431.865" />
                        <path d="M145,68.134 L40,250 L145,431.865" />
                    </g>
                </g>
            </svg>
        </a>
    );
}
