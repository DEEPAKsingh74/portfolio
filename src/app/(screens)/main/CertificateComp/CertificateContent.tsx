"use client";

import React, { useState } from "react";
import { Poppins } from "next/font/google";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Image from "next/image";
import { certificateType } from "./Certificate";

const poppins = Poppins({ subsets: ["latin"], weight: "300" });


const CertificateContent = ({ data }: { data: certificateType }) => {
  const [displayState, setDisplayState] = useState(false);

  const toggleDisplayState = () => setDisplayState((prev) => !prev);

  return (
    <div className="bg-[#303030] rounded-lg shadow-md overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-wrap justify-between items-center text-lg md:text-xl font-semibold px-6 py-4">
        <span className="w-full sm:w-auto text-center sm:text-left">
          {data.name}
        </span>
        <span className="w-full sm:w-auto text-center sm:text-left">
          {data.organisation}
        </span>
        <span className="w-full sm:w-auto text-center sm:text-left text-sm font-medium">
          CID: {data.cid}
        </span>
        <span
          className="cursor-pointer text-2xl"
          onClick={toggleDisplayState}
        >
          <MdKeyboardDoubleArrowDown />
        </span>
      </div>

      {/* Toggle Section */}
      {displayState && (
        <div className={`px-6 py-4 ${poppins.className} bg-[#383838]`}>
          <p className="mb-4 text-gray-300">{data.description}</p>

          {/* Display the PDF */}
          <div className="w-[100%] h-fit rounded-lg overflow-hidden">
            <Image
              src={data.certificateUrl}
              alt="Certificate PDF"
              width={600}
              height={600}
              className="w-[100%] h-fit"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificateContent;
