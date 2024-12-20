
import { useEffect, useRef } from 'react';
import './loader.css'


const Loader = () => {
    const svgRef = useRef(null)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (svgRef.current) {
        svgRef.current.classList.add("final-fill");
      }
    }, 2000); // 4s matches animation duration

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="title h-screen flex justify-center items-center w-screen bg-black">
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 241.66 116.98"
      className=" align-middle md:w-[250px] md:h-[170px] w-[80px] h[70px] "
      ref={svgRef}
      
    >
      <defs>
        <style>
          {`
            .cls-1 { fill: #fbbc04; }
            .cls-2 { fill: #4285f4; }
            .cls-3 { fill: #ea4335; }
            .cls-4 { fill: #0f9d58; }
          `}
        </style>
      </defs>
      <g id="Layer_1-2" data-name="Layer 1">
        <path
          className="cls-3"
          d="M57.68,58.78l39.2-22.7c9.2-5.3,12.4-17.1,7.1-26.4s-17.1-12.4-26.4-7.1L9.78,41.68l47.9,17.1Z"
        />
        <path
          className="cls-2"
          d="M87.18,116.98c6.7,0,13.2-3.5,16.7-9.7,5.3-9.2,2.2-21-7.1-26.4L28.98,41.78c-9.2-5.3-21-2.2-26.4,7.1-5.3,9.2-2.2,21,7.1,26.4l67.8,39.1c3.1,1.7,6.5,2.6,9.7,2.6Z"
        />
        <path
          className="cls-1"
          d="M154.68,116.98c3.3,0,6.6-.8,9.6-2.6l67.8-39.1-47.2-17.3-39.8,23c-9.2,5.3-12.4,17.1-7.1,26.4,3.5,6.1,10,9.6,16.7,9.6h0Z"
        />
        <path
          className="cls-4"
          d="M222.38,77.78c6.7,0,13.2-3.5,16.7-9.6,5.3-9.2,2.2-21-7.1-26.4L164.28,2.68c-9.2-5.3-21-2.2-26.4,7.1-5.3,9.2-2.2,21,7.1,26.4l67.8,39.1c3,1.7,6.3,2.5,9.6,2.5Z"
        />
      </g>
    </svg>
  </div>
  )
}

export default Loader