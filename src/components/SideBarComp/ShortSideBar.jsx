import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { PiMonitorPlayLight } from "react-icons/pi";

const ShortSideBar = () => {
  return (
    <div className="w-[70px] bg-[#0F0F0F] px-2 py-2 h-screen font-rob text-[#ECECEC] fixed top-[60px] flex-col items-center gap-10">
      <div className="py-3 flex-col items-center justify-between hover:bg-[#272727] rounded-lg  w-[100%] h-[80px]">
        <div className="flex items-center justify-center">
          <MdHomeFilled size="25px" color="white" />
        </div>
        <h5 className="text-xs text-center">Home</h5>
      </div>
      <div className="py-3 flex-col items-center justify-between hover:bg-[#272727] rounded-lg  w-[100%] h-[80px]">
        <div className="flex items-center justify-center">
          <SiYoutubeshorts size="25px" color="white" />
        </div>
        <h5 className="text-xs text-center">Shorts</h5>
      </div>
      <div className="py-3 flex-col items-center justify-between hover:bg-[#272727] rounded-lg  w-[100%] h-[80px]">
        <div className="flex items-center justify-center">
          <MdOutlineSubscriptions size="25px" color="white" />
        </div>
        <h5 className="text-xs text-center truncate">Subscription</h5>
      </div>
      <div className="py-3 flex-col items-center justify-between hover:bg-[#272727] rounded-lg  w-[100%] h-[80px]">
        <div className="flex items-center justify-center">
          <PiMonitorPlayLight size="25px" color="white" />
        </div>
        <h5 className="text-xs text-center">You</h5>
      </div>
    </div>
  );
};

export default ShortSideBar;
