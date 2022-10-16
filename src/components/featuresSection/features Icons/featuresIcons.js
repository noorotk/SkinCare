import React from "react";
import "./featuresSection.css";
import { useInView } from "react-intersection-observer";

const FeaturesIcons = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className={inView ? "show" : "hide"}>
      <div className="section">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="192"
            height="192"
            fill="#030303"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none"></rect>
            <path
              d="M176,80h42.6a7.9,7.9,0,0,1,7.4,5l14,35"
              fill="none"
              stroke="#030303"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            ></path>
            <line
              x1="16"
              y1="144"
              x2="176"
              y2="144"
              fill="none"
              stroke="#030303"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            ></line>
            <circle
              cx="188"
              cy="192"
              r="24"
              fill="none"
              stroke="#030303"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            ></circle>
            <circle
              cx="68"
              cy="192"
              r="24"
              fill="none"
              stroke="#030303"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            ></circle>
            <line
              x1="164"
              y1="192"
              x2="92"
              y2="192"
              fill="none"
              stroke="#030303"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            ></line>
            <path
              d="M44,192H24a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H176V171.2"
              fill="none"
              stroke="#030303"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            ></path>
            <path
              d="M176,120h64v64a8,8,0,0,1-8,8H212"
              fill="none"
              stroke="#030303"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            ></path>
          </svg>
          <p>Free shipping </p>
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="192"
            height="192"
            fill="#030303"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none"></rect>
            <path
              d="M224,177.3V78.7a8.1,8.1,0,0,0-4.1-7l-88-49.5a7.8,7.8,0,0,0-7.8,0l-88,49.5a8.1,8.1,0,0,0-4.1,7v98.6a8.1,8.1,0,0,0,4.1,7l88,49.5a7.8,7.8,0,0,0,7.8,0l88-49.5A8.1,8.1,0,0,0,224,177.3Z"
              fill="none"
              stroke="#030303"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            ></path>
            <polyline
              points="177 152.5 177 100.5 80 47"
              fill="none"
              stroke="#030303"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            ></polyline>
            <polyline
              points="222.9 74.6 128.9 128 33.1 74.6"
              fill="none"
              stroke="#030303"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            ></polyline>
            <line
              x1="128.9"
              y1="128"
              x2="128"
              y2="234.8"
              fill="none"
              stroke="#030303"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            ></line>
          </svg>
          <p>Premium packaging </p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="192"
            height="192"
            fill="#030303"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none"></rect>
            <rect
              x="32"
              y="80"
              width="192"
              height="48"
              rx="8"
              fill="none"
              stroke="#030303"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            ></rect>
            <path
              d="M208,128v72a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V128"
              fill="none"
              stroke="#030303"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            ></path>
            <line
              x1="128"
              y1="80"
              x2="128"
              y2="208"
              fill="none"
              stroke="#030303"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            ></line>
            <path
              d="M173.3,68.7C161.9,80,128,80,128,80s0-33.9,11.3-45.3a24,24,0,0,1,34,34Z"
              fill="none"
              stroke="#030303"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            ></path>
            <path
              d="M82.7,68.7C94.1,80,128,80,128,80s0-33.9-11.3-45.3a24,24,0,0,0-34,34Z"
              fill="none"
              stroke="#030303"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            ></path>
          </svg>

          <p>Free gifts</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesIcons;
