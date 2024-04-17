import React from 'react';
import { RiKey2Line } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { AiFillCode } from "react-icons/ai";

const FeatureSection = () => {
  return (
    <section className="bg-Bg py-16 sm:w-4/5 w-10/12">
      <div className="container mx-auto  text-center">
        
        <div className="flex justify-center flex-col space-y-8 ">
          
          <div className="flex items-center  flex-wrap bg-Nav justify-center lg:justify-start">
            <div className="bg-black rounded-lg sm:h-44 sm:w-60 h:36 w-52 flex items-center justify-center m-4">
              <RiKey2Line className='text-Logo text-9xl '/>
            </div>
            <div className="lg:ml-8 basis-8/12 ">
              <h3 className="text-lg font-semibold text-left text-white">Key Components To Build a Website</h3>
              <p className="text-gray-300 text-left py-4">Designing a website is a meticulous task that involves selecting and implementing components thoughtfully, accompanied by a thorough interview process. The user experience and responsive navigation are key factors in ensuring a functional and visually appealing site. </p>
            </div>
          </div>

          <div className="flex items-center justify-center  flex-wrap-reverse bg-Nav lg:justify-between">
          <div className=" basis-8/12 lg:mr-8 m-6">
              <h3 className="text-lg font-semibold text-left text-white">Crafted Using Stable Tech stack</h3>
              <p className="text-gray-300 text-left py-4">Designing a website is a meticulous task that involves selecting and implementing components thoughtfully, accompanied by a thorough interview process. The user experience and responsive navigation are key factors in ensuring a functional and visually appealing site. </p>
            </div>
            <div className="bg-black p-4 rounded-lg sm:h-44 sm:w-60 h:36 w-52 flex items-center justify-center m-4">
              <FaReact className='text-Logo text-9xl '/>
            </div>

          </div>
          <div className="flex items-center  flex-wrap bg-Nav justify-center lg:justify-start">
            <div className="bg-black p-4 rounded-lg sm:h-44 sm:w-60 h:36 w-52 flex items-center justify-center  m-4">
              <AiFillCode className='text-Logo text-9xl'/>
            </div>
            <div className="lg:ml-8 basis-8/12">
              <h3 className="text-lg font-semibold text-left text-white">Live Preview and Code </h3>
              <p className="text-gray-300 text-left py-4">Designing a website is a meticulous task that involves selecting and implementing components thoughtfully, accompanied by a thorough interview process. The user experience and responsive navigation are key factors in ensuring a functional and visually appealing site.  </p>
            </div>
          </div>
        

        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
