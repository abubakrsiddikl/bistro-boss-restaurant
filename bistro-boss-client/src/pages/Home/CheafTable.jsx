import React from "react";
import cheaf from "../../assets/home/chef-service.jpg"
const CheafTable = () => {
  return (
    <div
      className="hero h-full mb-10"
      style={{
        backgroundImage:
          `url(${cheaf})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content  p-[112px] text-neutral-content text-center">
        <div className="max-w-md p-8 bg-white">
          <h1 className="mb-5 text-3xl text-[#151515] font-bold">Bistro Boss</h1>
          <p className="mb-5 text-[#151515]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheafTable;
