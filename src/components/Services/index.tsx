import React from "react";

const Services = () => {
  return (
    <div id="services" className="bg-gray-200 py-20">
      <div className="w-11/12 md:container mx-auto px-14">
        <h3 className="text-5xl font-bold text-center mb-2">Our Services</h3>
        <p className="text-gray-500 text-center mb-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          inventore illum autem ex!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* services card */}
          <div className="flex py-8 px-3 bg-white rounded-xl">
            <div className="">
              <h5 className="text-2xl font-bold mb-5 text-center">
              Yearbook Photoshoot
              </h5>
              <p className="text-gray-500 mb-5 text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
                aliquam minima ea assumenda soluta eius ipsam, aperiam iure vero
                hic.
              </p>
            </div>
          </div>

          <div className="flex py-8 px-3 bg-white rounded-xl">
            <div className="">
              <h5 className="text-2xl font-bold mb-5 text-center">
              Event Documentation
              </h5>
              <p className="text-gray-500 mb-5 text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
                aliquam minima ea assumenda soluta eius ipsam, aperiam iure vero
                hic.
              </p>
            </div>
          </div>

          <div className="flex py-8 px-3 bg-white rounded-xl">
            <div className="">
              <h5 className="text-2xl font-bold mb-5 text-center">Advertisement</h5>
              <p className="text-gray-500 mb-5 text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
                aliquam minima ea assumenda soluta eius ipsam, aperiam iure vero
                hic.
              </p>
            </div>
          </div>

          <div className="flex py-8 px-3 bg-white rounded-xl">
            <div className="">
              <h5 className="text-2xl font-bold mb-5 text-center">Pre-Wedding</h5>
              <p className="text-gray-500 mb-5 text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
                aliquam minima ea assumenda soluta eius ipsam, aperiam iure vero
                hic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
