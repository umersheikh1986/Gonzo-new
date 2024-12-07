"use client";
import React from "react";

export default function roadmap() {
  return (
    <div id="roadmap" className="grid bg-[#6c83d6] place-items-center font-custom tracking-widest px-6 py-10 sm:px-8 lg:px-20">
      <div className="mt-10 md:text-4xl sm:text-2xl lg:text-7xl text-white">ROADMAP</div>
      {/* <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 items-center"> */}
      <div className=" mx-10 mt-10 items-center place-items-center">
        {/* Creat wallet */}
        {/* <div className="m-4 p-6 sm:p-10 lg:p-20 bg-white rounded-xl shadow-md overflow-hidden max-w-xl mx-auto">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-48  w-full object-cover md:h-full md:w-48 "
                src="/dota.png"
                alt="left-Images"
              />
            </div>
          </div>
        </div> */}
        {/* Get Some USDT */}

        <div className="bg-[#6c83d6] p-2">
            {/* <h2 className="text-3xl text-white font-bold mb-12">Chronology</h2> */}
            <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
                <div className="flex md:contents flex-row-reverse">
                    <div
                        className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                        <h3 className="text-lg font-semibold lg:text-xl">Phase: 1</h3>
                        <p className="mt-2 leading-6">Presale Meme Initiation of Dancing Machine in this phase users will recieve 2x</p>
                        <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Coming soon...</span>
                    </div>
                    <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                        <div className="flex items-center justify-center w-6 h-full">
                            <div className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                            </div>
                        </div>
                        <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                    </div>
                </div>

                <div className="flex md:contents">
                    <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                        <div className="flex items-center justify-center w-6 h-full">
                            <div className="w-1 h-full bg-indigo-300"></div>
                        </div>
                        <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                    </div>
                    <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                        <h3 className="text-lg font-semibold lg:text-xl">Phase: 2</h3>
                        <p className="mt-2 leading-6"> Second week of Dancing Machine, users will recieve 1.5x </p>
                        <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 2</span>
                    </div>
                </div>

                <div className="flex md:contents flex-row-reverse">
                    <div
                        className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                        <h3 className="text-lg font-semibold lg:text-xl">Event: 3</h3>
                        <p className="mt-2 leading-6">Meme Takeover event & celebration</p>
                        <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 3</span>
                    </div>
                    <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                        <div className="flex items-center justify-center w-6 h-full">
                            <div className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                            </div>
                        </div>
                        <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                    </div>
                </div>

                {/* <div className="flex md:contents">
                    <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                        <div className="flex items-center justify-center w-6 h-full">
                            <div className="w-1 h-full bg-indigo-300"></div>
                        </div>
                        <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                    </div>
                    <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                        <h3 className="text-lg font-semibold lg:text-xl">New Event 4</h3>
                        <p className="mt-2 leading-6">Description of the second event.</p>
                        <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 4</span>
                    </div>
                </div> */}

            </div>
        </div>
        {/* Go To Buy Page */}
        {/* <div className="m-4 p-20  mx-auto bg-white rounded-xl shadow-md overflow-hidden max-w-5xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src="/dota.png"
              />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

