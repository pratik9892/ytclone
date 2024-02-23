import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import SidebarItems from './SideBarComp/SidebarItems';
import ShortSideBar from './SideBarComp/ShortSideBar';
import LowBar from './SideBarComp/LowBar';

const Sidebar = ({showFullMenu}) => {

  const Homeitems = [
    {
      icon:<MdHomeFilled size="25px" color='white'/>,
      name:"Home",
      path:"/"
    },{
      icon:<SiYoutubeshorts size="25px" color='white'/>,
      name:"Shorts",
      path:"/shorts"
    },{
      icon:<MdOutlineSubscriptions size="25px" color='white'/>,
      name:"Subscription",
      path:"/subscription"
    }
  ]

  const ForYouItems = [
    {
      icon:<MdOutlineSubscriptions size="25px" color='white'/>,
      name:"Your Channel",
      path:"/channel"
    },{
      icon:<MdOutlineSubscriptions size="25px" color='white'/>,
      name:"History",
      path:"/history"
    },{
      icon:<MdOutlineSubscriptions size="25px" color='white'/>,
      name:"Your Videos",
      path:"/videos"
    },{
      icon:<MdOutlineSubscriptions size="25px" color='white'/>,
      name:"Watch Later",
      path:"/watch-later"
    },{
      icon:<MdOutlineSubscriptions size="25px" color='white'/>,
      name:"Liked Videos",
      path:"/liked-videos"
    }
  ]

  const ExploreItems = [
    {
      icon:<MdOutlineSubscriptions size="25px" color='white'/>,
      name:"Trending",
      path:"/trending"
    },{
      icon:<MdOutlineSubscriptions size="25px" color='white'/>,
      name:"Shopping",
      path:"/shopping"
    },{
      icon:<MdOutlineSubscriptions size="25px" color='white'/>,
      name:"Musics",
      path:"/musics"
    },{
      icon:<MdOutlineSubscriptions size="25px" color='white'/>,
      name:"Films",
      path:"/films"
    },{
      icon:<MdOutlineSubscriptions size="25px" color='white'/>,
      name:"Live",
      path:"/live"
    }
  ]

  return (
    <React.Fragment>
      {/* <div className='hidden md:flex h-[100px] outline-8'> */}
      {showFullMenu ? (
          <div className='hidden md:h-[800px] fixed md:flex-col md:flex top-[60px] left-[0px]  px-4 py-3 md:w-[245px]  bg-[#0F0F0F] h1 text-[#ECECEC] '>
            <SidebarItems Homeitems={Homeitems}/>
            <SidebarItems Homeitems={ForYouItems} title="For You"/>
            <SidebarItems Homeitems={ExploreItems} title="Explore"/>
          </div>
      ) : (
        <>
          <ShortSideBar />
        </>
      )}
    {/* </div> */}
    <div className='md:hidden bg-[#0F0F0F] h-[50px] fixed bottom-0 w-full z-50'>
        <LowBar/>
    </div>
    </React.Fragment>
  )
}

export default Sidebar