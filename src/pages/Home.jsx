import React from "react";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import HomeCarousel from "../components/homeComp/HomeCarousel";

const Home = () => {
  const showMenu = useSelector((state) => state.handleClick.status);

  return (
    <div className="h-full w-full bg-[#0F0F0F] ">
      <Sidebar showFullMenu={showMenu} />
      <HomeCarousel hideMenu={showMenu}/>
    </div>
  );
};

export default Home;
