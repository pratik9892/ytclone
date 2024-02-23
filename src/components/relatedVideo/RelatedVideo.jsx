import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { fetchDatafromApi } from '../../utils/api';
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from '../loading/Loading';

const RelatedVideo = ({videoId}) => {

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const navigate = useNavigate()

  const convertTime = (incomingDur) => {
    let timeD = incomingDur;
    let formattedTime = timeD
      .replace("PT", "")
      .replace("H", ":")
      .replace("M", ":")
      .replace("S", "");
      return formattedTime
  };

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

  const fetchinitialData = () => {
    setLoading(true);
    fetchDatafromApi(`/related/${videoId}?page=${pageNum}`).then((res) => {
      setData(res?.data);
      setPageNum((prev) => prev + 1);
      setLoading(false);
    });
  };


  const fetchNextPageData = () => {
    fetchDatafromApi(`/related/${videoId}?page=${pageNum}`).then((res) => {
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
  // console.log(data);

  useEffect(() => {
    fetchinitialData()
  } ,[])

  const skel = () => {
    return (
      <div className='md:w-[400px] md:h-[100px] h-[290px] w-full my-4 md:flex gap-2 font-rob py-4 md:py-0 animate-pulse'>
          <div className='img md:h-[96px] h-[80%] min-w-[170px]   '>
            <div className='h-full w-full bg-[#3D3D3D] md:rounded-lg '></div>
          </div>
          <div className='flex flex-col gap-2 px-2 md:px-0 py-2 md:py-0'>
              <div className='h-[20px] md:w-[170px] w-[300px] bg-[#3D3D3D] md:rounded-lg'></div>
              <div className='h-[15px] w-[120px] bg-[#3D3D3D] md:rounded-lg'></div>
          </div>
        </div>
    )
  }

  return (
    <React.Fragment>
      {!loading ? (
        <InfiniteScroll
        dataLength={data?.data.length || []}
        next={fetchNextPageData}
        hasMore={data?.nextPage}
        loader={<Loading/>}
        style={{ overflow: "hidden" }}
      >
        <div className='py-[-40px] md:py-0'>
          {data?.data.map((item) => {
            return (
              <div 
              onClick={() => {
                navigate(`/watch/${item?.items?.id}`)
              }}
              className='md:w-[400px] md:h-[100px] h-[290px] w-full my-4 md:flex gap-2 font-rob cursor-pointer py-4 md:py-0'>
                <div className='img md:h-[96px] h-[80%] min-w-[170px]  overflow-hidden md:rounded-lg'>
                  <img src={item?.items?.snippet?.thumbnails?.high.url} 
                  className='h-full w-full object-cover'
                  alt="" />
                </div>
                <div className="text flex flex-col gap-1 px-2 md:px-0 py-2 md:py-0">
                  <h2 className='font-bold text-base text-white line-clamp-2'>{item?.items?.snippet.title}</h2>
                  <div className='flex gap-2 md:block'> 
                  <p className='text-xs text-slate-400'>{item?.items?.snippet?.channelTitle}</p>
                  <h4 className="text-slate-400 text-xs">{`${formatCompactNumber(item?.items?.statistics?.viewCount)} views • ${calculateDays(item?.items?.snippet?.publishedAt)}`}</h4>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </InfiniteScroll>
      ) : (
        <div>
          {skel()}
          {skel()}
          {skel()}
          {skel()}
          {skel()}
          {skel()}
          {skel()}
          {skel()}
        </div>
      )}
    </React.Fragment>
  )
}

export default RelatedVideo