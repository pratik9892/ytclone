import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { PiMonitorPlayLight } from "react-icons/pi";

const LowBar = () => {
  return (
    <div className=" font-rob text-[#ECECEC]  items-center  justify-between flex">
      <div className="py-2 flex-col items-center justify-between  rounded-lg  w-[100%]">
        <div className="flex items-center justify-center">
          <MdHomeFilled size="20px" color="white" />
        </div>
        <h5 className="text-xs text-center">Home</h5>
      </div>
      <div className="py-2 flex-col items-center justify-between  rounded-lg  w-[100%]">
        <div className="flex items-center justify-center">
          <SiYoutubeshorts size="20px" color="white" />
        </div>
        <h5 className="text-xs text-center">Shorts</h5>
      </div>
      <div className="py-2 flex-col items-center justify-between  rounded-lg  w-[100%]">
        <div className="flex items-center justify-center">
          <MdOutlineSubscriptions size="20px" color="white" />
        </div>
        <h5 className="text-xs text-center truncate">Subscription</h5>
      </div>
      <div className="py-2 flex-col items-center justify-between  rounded-lg  w-[100%] ">
        <div className="flex items-center justify-center">
          <PiMonitorPlayLight size="20px" color="white" />
        </div>
        <h5 className="text-xs text-center">Library</h5>
      </div>
    </div>
  )
}

export default LowBar