import React from "react";
import parse from 'html-react-parser';
import { useNavigate } from "react-router-dom";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { TfiDownload } from "react-icons/tfi";

const VideoInfo = ({ data, loading,comData, comLoad}) => {
  const vidData = new Array(data);
  const navigate = useNavigate();
  const formatCompactNumber = (number) => {
    const formatter = Intl.NumberFormat("en", { notation: "compact" });
    return formatter.format(number);
  };

  const calculateDays = (date) => {
    let date1 = new Date(date);
    let date2 = new Date();
    let Difference_In_Time = date2.getTime() - date1.getTime();
    let Difference_In_Days = Math.round(
      Difference_In_Time / (1000 * 3600 * 24)
    );

    var years = Math.floor(Difference_In_Days / 365).toString();
    var months = Math.floor((Difference_In_Days % 365) / 30).toString();
    var days = Math.floor((Difference_In_Days % 365) % 30).toString();
    if (years > 0) {
      return years + " year ago";
    } else {
      if (months < 0) {
        return days + " days ago";
      } else {
        return months + " months ago";
      }
    }
  };

  return (
    <React.Fragment>
      {!loading ? (
        <div>
          {vidData?.map((item) => {
            const subs = formatCompactNumber(
              item?.channel.statistics.subscriberCount
            );
            return (
              <React.Fragment>
                <h1 className=" text-white text-xl py-3 font-bold px-2 md:px-0 line-clamp-2 font-rob md:truncate overflow-hidden ">
                  {item?.video.items.snippet.title}
                </h1>
                <div className="h-[45px] md:flex md:items-center md:justify-between  md:px-0 bg-[#0F0F0F] ">
                  <div className="channelInfo h-full   flex items-center justify-between gap-4 px-2 md:px-0">
                    <div
                      className="channelImg overflow-hidden"
                      onClick={() => {
                        navigate(
                          `/channel`
                        );
                      }}
                    >
                      <img
                        src={item?.channel.info.thumbnails.high.url}
                        alt=""
                        className="w-[45px] h-[45px] rounded-full cursor-pointer"
                      />
                    </div>
                    <div className="font-rob flex flex-col items-start justify-between ">
                      <h2
                        onClick={() => {
                          navigate(
                            `/channel`
                          );
                        }}
                        className="text-white font-semibold cursor-pointer md:text-base text-sm"
                      >
                        {item?.channel.info.title}
                      </h2>
                      <p className="text-[#AAAAAA] text-xs">{`${subs} subscribers`}</p>
                    </div>
                    <div className="flex items-center justify-between font-rob gap-2">
                      <button className="text-white border-[1px] border-[#3F3F3F] hover:bg-[#3F3F3F] font-bold text-sm py-2 px-4 rounded-3xl">
                        Join
                      </button>
                      <button className="text-[#000000] bg-white py-2 px-4 font-bold rounded-3xl text-sm hover:bg-[#D9D9D9]">
                        Subscribe
                      </button>
                    </div>
                  </div>
                  <div className="like flex items-center justify-between  gap-2 text-white text-sm md:over py-4 md:py-0 overflow-x-scroll md:overflow-hidden bg-[#0F0F0F] px-1 md:px-0">
                    <div className="likeUnlike flex items-center   font-bold  ">
                      <button>
                        <div className="flex items-center justify-between gap-2 font-rob font-bold  rounded-s-3xl  hover:bg-[#3F3F3F] bg-[#272727] border-r-2 border-[#656565] pr-4 py-2 px-4">
                          <AiOutlineLike size="20px" color="white" />
                          <p>
                            {formatCompactNumber(
                              item?.video.items.statistics.likeCount
                            )}
                          </p>
                        </div>
                      </button>
                      <button
                        dir="rtl"
                        className="bg-[#272727] hover:bg-[#3F3F3F] py-2 px-4 rounded-s-3xl "
                      >
                        <AiOutlineDislike size="20px" color="white" />
                      </button>
                    </div>
                    <div>
                      <button className="py-2 px-4 font-bold rounded-3xl bg-[#272727] hover:bg-[#3F3F3F]">
                        <div className="flex items-center justify-center gap-2">
                          <RiShareForwardLine size="20px" />
                          <p>Share</p>
                        </div>
                      </button>
                    </div>
                    <div>
                      <button className="py-2 px-4 font-bold rounded-3xl bg-[#272727] hover:bg-[#3F3F3F]">
                        <div className="flex items-center justify-center gap-2">
                          <TfiDownload size="20px" />
                          <p>Download</p>
                        </div>
                      </button>
                    </div>
                    <div>
                      <button className="py-2 px-4 font-bold rounded-full bg-[#272727]  hover:bg-[#3F3F3F] h-[40px] w-[40px]">
                        <div className="flex items-center justify-center ">
                          ⋯
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full h-auto bg-[#272727] rounded-xl my-4 px-3 py-3 overflow-hidden hidden md:flex md:flex-col">
                  <div className="flex items-center justify-start gap-3">
                    <p className="font-semibold text-white">{`${item?.video?.items?.statistics?.viewCount
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} views`}</p>
                    <p className="font-semibold text-white">{`${calculateDays(
                      item?.video?.items?.snippet?.publishedAt
                    )}`}</p>
                  </div>
                  <div className=" flex items-center justify-start  gap-1 flex-wrap">
                    {item?.video?.items?.snippet?.tags?.map((tag) => {
                      return <p className="text-[#3D9FF3] t font-semibold">{"#" + tag}</p>;
                    })}
                  </div>
                  <div className="py-1 ">
                    <p className="font-semibold text-white text-sm ">
                      {item?.video?.items?.snippet?.description}
                    </p>
                  </div>
                </div>
                <div className="comments w-full ">
                    <div className="commentsNum text-white font-bold text-xl hidden md:block">{item?.video.items?.statistics?.commentCount} Comments</div>
                    <div>
                      {!comLoad && (
                        <div className="py-10">
                          {comData?.map((com) => {
                            return (
                              <div className="h-[130px] w-full hidden  md:flex md:items-start  gap-4 overflow-hidden font-rob ">
                                <div className="img overflow-hidden h-[40px] min-w-[40px] ">
                                  <img 
                                  src={com?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl || "https://placehold.co/45x45"}
                                  alt=""
                                  className="h-[40px] w-[40px] rounded-full"
                                  />
                                </div>
                                <div className="">
                                  <div className="userinfo flex items-center  gap-2">
                                    <p className="font-bold text-white text-sm">{com?.snippet?.topLevelComment?.snippet?.authorDisplayName}</p>
                                    <p className="font-bold text-[#6a6a6a] hover:text-[#898989] text-xs ">{calculateDays(com?.snippet?.topLevelComment?.snippet?.publishedAt)}</p>
                                  </div>
                                  <p className="text-sm text-white line-clamp-2">{parse(com?.snippet?.topLevelComment?.snippet?.textDisplay)}</p>
                                  <div className="flex items-center gap-4">
                                    <div className="flex items-center  gap-1">
                                      <div className="w-[30px] h-[30px] rounded-full hover:bg-[#3D3D3D] flex items-center justify-center">
                                        <AiOutlineLike size="20px" color="white"/>
                                      </div>
                                      <button className="text-white text-xs font-rob">
                                      {com?.snippet?.topLevelComment?.snippet?.likeCount}
                                      </button>
                                    </div>
                                    <div className="w-[30px] h-[30px] rounded-full hover:bg-[#3D3D3D] flex items-center justify-center">
                                     <AiOutlineDislike size="20px" color="white"/> 
                                    </div>
                                    <div>
                                      <p className="text-white text-xs">Reply</p>
                                    </div>
                                  </div>
                                  <div>
                                    {com?.snippet?.topLevelComment?.totalReplyCount > 0 && (
                                      <button>{`${com?.snippet?.topLevelComment?.totalReplyCount} replies`}</button>
                                    )}
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      )}
                    </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      ) : (
        <>
          <div className="animate-pulse h-[180px] bg-[#0F0F0F] py-3 px-2 md:px-0 flex flex-col gap-4">
            <div className="md:h-[30px] h-[20px]  bg-[#3D3D3D] md:w-[70%] w-[90%]"></div>
            <div className="h-[45px] md:flex md:items-center md:justify-between  md:px-0 py-4">
              <div className="h-full  flex items-center justify-between gap-4 px-2 md:px-0">
                <div className="h-[45px] w-[45px] bg-[#3D3D3D] rounded-full"></div>
                <div className=" flex flex-col items-start justify-between gap-2">
                  <div className="h-[20px] w-[100px] bg-[#3D3D3D]"></div>
                  <div className="h-[10px] w-[60px] bg-[#3D3D3D]"></div>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="h-[40px] w-[60px] bg-[#3D3D3D] rounded-3xl"></div>
                  <div className="h-[40px] w-[100px] bg-[#3D3D3D] rounded-3xl"></div>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2 py-8">
                <div className="h-[40px] w-[120px] bg-[#3D3D3D] rounded-3xl"></div>
                <div className="h-[40px] w-[80px] bg-[#3D3D3D] rounded-3xl"></div>
                <div className="h-[40px] w-[100px] bg-[#3D3D3D] rounded-3xl"></div>
                <div className="h-[40px] w-[40px] bg-[#3D3D3D] rounded-3xl"></div>
              </div>
            </div>
            <div className="w-full h-[100px] bg-[#3D3D3D] rounded-xl hidden md:flex md:flex-col"></div>
          </div>
        </>
      )}
    </React.Fragment>
  );
};

export default VideoInfo;
