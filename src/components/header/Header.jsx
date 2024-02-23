import React, { useEffect, useRef, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { CiVideoOn } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleClick } from "../../store/handleSlice";



const Header = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [showClose,setShowClose] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const showSideBar = useSelector((state) => state.handleClick.status)
  const [borderColor,setBorderColor] = useState(false)
 

  const inputClick = () => {
    setBorderColor(true)
  }

  useEffect(() => {
    if(inputSearch.length > 0){
      console.log(inputSearch.length);
      setShowClose(true)
      setBorderColor(true)
    } else {
      setShowClose(false)
      setBorderColor(false)
    }
    
  }, [inputSearch])

  const clearInput = () =>{
    setInputSearch("")
    setShowClose(false)
    setBorderColor(false)
  }

  const handleSideBar = () => {
    if(showSideBar){
      dispatch(handleClick(false))
    } else {
      dispatch(handleClick(true))
    }
  }

  return (
    <div className="main md:h-[60px] font-rob h-[50px] bg-[#0F0F0F] w-full  flex items-center justify-between md:px-4 px-3 fixed z-50 top-0 " >
      <div className="logocontainer flex items-center md:gap-5 gap-1 cursor-pointer">
        <div className="hidden md:flex hover:bg-[#272727] rounded-full p-3" onClick={handleSideBar}>
        <IoIosMenu size="20px" color="white" />
        </div>
        <img
        onClick={() => {
          navigate("/")
        }}
          className="h-[20px]  cursor-pointer"
          src="https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-white-png.png"
          alt=""
        />
      </div>
      <div className="searchcontainer md:flex items-center  w-[650px] justify-around gap-3 h-[40px] hidden">
        <div className={`search flex items-center pl-5   rounded-full border-[0.5px] ${!borderColor ? "border-[#292929]" : "border-[#1C62B9]"} bg-[#0F0F0F] justify-between `}>
          <div className="flex items-center w-[500px]">
          <input
          onClick={inputClick}
            type="text"
            className="outline-none w-[490px] bg-[#0F0F0F] text-white px-2"
            placeholder="Search"
            value={inputSearch}
            onChange={(e) => {
              setInputSearch(e.target.value);
            }}
          />
          {showClose && (<div className="px-1"><IoMdClose size="20px" color="white" onClick={clearInput}/></div>)}
          </div>
          <div className=" py-[7px] px-2 cursor-pointer bg-[#222222] rounded-r-full pl-6 pr-6 ">
            <CiSearch size="25px" color="white" />
          </div>
        </div>
        <div className="px-3 cursor-pointer bg-[#272727] hover:bg-[#3D3D3D] rounded-full h-[45px] w-[45px] flex items-center justify-center ">
          <MdKeyboardVoice size="25px" color="white" />
        </div>
      </div>
      <div className="icons flex items-center gap-4 justify-center">
        <div className="px-3 cursor-pointer bg-[#0F0F0F] hover:bg-[#272727] rounded-full md:h-[40px] md:w-[40px] w-[40px] h-[40px] md:flex md:items-center md:justify-center hidden">
          <CiBellOn size="25px" color="white" />
        </div>
        <div className="px-3 cursor-pointer bg-[#0F0F0F] hover:bg-[#272727] rounded-full md:h-[40px] md:w-[40px] w-[40px] h-[40px] md:flex md:items-center md:justify-center  hidden">
          <CiVideoOn size="25px" color="white" />
        </div>
        <div className="px-2 py-1 cursor-pointer bg-orange-700 rounded-full md:h-[40px] md:w-[40px] h-[30px] w-[30px]  flex items-center justify-center">
          <h3 className="text-white  md:text-xl   " >P</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;

