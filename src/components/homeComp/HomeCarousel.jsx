import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchDatafromApi } from "../../utils/api";
import Loading from "../loading/Loading";

const HomeCarousel = ({ hideMenu }) => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [pageNum, setPageNum] = useState(1);

  const convertTime = (incomingDur) => {
    let timeD = incomingDur;
    let formattedTime = timeD
      .replace("PT", "")
      .replace("H", ":")
      .replace("M", ":")
      .replace("S", "");
      return formattedTime
  };

  const fetchinitialData = () => {
    setLoading(true);
    fetchDatafromApi(`/videos?page=${pageNum}`).then((res) => {
      setData(res?.data);
      setPageNum((prev) => prev + 1);
      setLoading(false);
    });
  };

  const fetchNextPageData = () => {
    fetchDatafromApi(`/videos?page=${pageNum}`).then((res) => {
      if (data?.data.length) {
        setData({
          ...data,
          data: [...data?.data, ...res?.data.data],
          nextPage: res?.data.nextPage,
        });
      } else {
        setData(res?.data);
      }
      setPageNum((prev) => prev + 1);
    });
  };

  useEffect(() => {
    fetchinitialData();
  }, []);

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

  const skeleton = () => {
    return (
      <div className=" h-[300px] w-[400px] animate-pulse ">
        <div className="h-[200px] w-full bg-[#3D3D3D] md:rounded-xl "></div>
        <div className="flex items-start gap-4 py-2 px-2 md:px-0 w-[99%]">
          <div className="h-[50px] w-[50px] bg-[#3D3D3D] rounded-full"></div>
          <div className="flex flex-col gap-2">
            <div className="h-[30px] w-[300px] bg-[#3D3D3D] "></div>
            <div className="h-[20px] w-[250px] bg-[#3D3D3D]"></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      {!loading && (
        <InfiniteScroll
          dataLength={data?.data.length || []}
          next={fetchNextPageData}
          hasMore={data?.nextPage}
          loader={<Loading/>}
          style={{ overflow: "hidden" }}
        >
          <div
            className={`bg-[#0F0F0F] md:top-[60px] ${
              !hideMenu ? "md:left-[70px]" : "md:left-[245px]"
            } md:h-full md:w-full top-[50px] relative font-rob`}
          >
            <div className="flex items-center flex-wrap md:gap-4  gap-6 md:px-4 py-4 ">
              {data?.data.map((item) => {
                const views = formatCompactNumber(
                  item?.items.statistics.viewCount
                );
                const day = calculateDays(item?.items.snippet.publishedAt);
                const duration = convertTime(item?.items.contentDetails.duration)
                return (
                  <div
                    className={`  cursor-pointer ${
                      !hideMenu
                        ? "md:h-[280px] md:w-[340px]"
                        : "md:h-[350px] h-[300px] w-[400px]"
                    }`}
                    key={item.items.id}
                    onClick={() => {
                      navigate(`/watch/${item.items.id}`);
                    }}
                  >
                    <div
                      className={`w-full  md:rounded-xl relative h-[210px] z-10 overflow-hidden  hover:rounded-none transition-all ${
                        !hideMenu ? "md:h-[180px] " : "md:h-[220px] "
                      }`}
                    >
                      <img
                        src={item?.items.snippet.thumbnails.standard.url}
                        className="h-full w-full object-cover absolute z-20"
                      />
                      <div className="">
                      <span className={`z-30 relative max-w-5  top-44 left-[330px] ${hideMenu ? " md:left-[350px] md:top-48" : " md:left-[290px] md:top-[150px]"} bg-black text-white text-xs px-[4px] py-[2px] rounded-md bg-opacity-80`}>
                        {duration}
                      </span>
                      </div>
                    </div>
                    <div className="flex items-start py-2 gap-2 px-3 md:px-0 ">
                      <div>
                        <img
                          src="https://avatars.githubusercontent.com/u/11613311?v=4"
                          className="rounded-full max-w-10"
                        />
                      </div>
                      <div>
                        <h1 className="text-white font-semibold  line-clamp-2">
                          {item?.items.snippet.title}
                        </h1>
                        <h4 className="text-slate-400 text-[14px]">
                          {item?.items.snippet.channelTitle}
                        </h4>
                        <h4 className="text-slate-400 text-[14px]">{`${views} views • ${day}`}</h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      )}
      {loading && (
        <div className="bg-[#0F0F0F] md:fixed md:top-[60px] md:left-[245px] md:h-full md:w-full top-[50px] relative overflow-x-hidden font-rob flex items-center flex-wrap md:gap-4  gap-6 md:px-4 py-4 ">
          {skeleton()}
          {skeleton()}
          {skeleton()}
          {skeleton()}
          {skeleton()}
          {skeleton()}
        </div>
      )}
    </React.Fragment>
  );
};

export default HomeCarousel;
