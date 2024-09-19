/* eslint-disable @next/next/no-img-element */
import React from "react";
import portofolioData from "../../../data/data.json";
import { motion } from "framer-motion";
import Link from "next/link";
import Sidebar from "../Sidebar";
import servicesData from "../../../data/services.json";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-5">
          {/* Service */}
          <Link href="/admin/ns-admin/services">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <div className="w-full h-full p-5 mb-4 rounded-2xl bg-gray-50 dark:bg-gray-800">
                <h3 className="text-2xl text-white font-bold">Service</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 mt-4 ">
                  {servicesData.map((item, index) => (
                    <div
                      className="flex py-8 px-3 bg-white rounded-xl"
                      key={index}
                    >
                      <div className="">
                        <h5 className="text-2xl font-bold mb-5 text-center">
                          {item.title}
                        </h5>
                        <p className="text-gray-500 mb-5 text-center">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Porto */}
          <Link href="/admin/ns-admin/portofolio">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <div className="p-5 mb-4 rounded-2xl bg-gray-800">
                <h3 className="text-2xl text-white font-bold">Portofolio</h3>
                <div className="w-full overflow-x-scroll">
                  <div className="flex gap-4 mb-4 mt-4">
                    {portofolioData
                      .slice()
                      .reverse()
                      .map((item, index) => (
                        <div
                          key={index}
                          className="bg-white shadow-2xl rounded-xl min-w-[250px]" // Ensure cards have a minimum width
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="rounded-t-lg w-full"
                          />
                          <div className="py-3 px-5">
                            <h4 className="text-center font-bold">
                              {item.title}
                            </h4>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
