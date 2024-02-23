import React from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayerYt from '../components/Player/ReactPlayer'
import RelatedVideo from '../components/relatedVideo/RelatedVideo'
import { UseFetch } from '../hooks/UseFetch' 
import VideoInfo from '../components/videoInformation/VideoInfo'
import Sidebar from '../components/Sidebar'
import { useSelector } from 'react-redux'

const Video = () => {

  const showMenu = useSelector((state) => state.handleClick.status);
  const {videoId} = useParams()
  const {data,isLoading} = UseFetch(`/related/${videoId}`)
  const {data : videoData,isLoading : videoLoading} = UseFetch(`/videos/${videoId}`)
  const {data : commentsData , isLoading : commentsLoading } = UseFetch(`/comments/${videoId}`)
   console.log(data);

  return (
    <div className='w-full md:pt-[80px] pt-[50px] md:px-16 md:py-10 bg-[#0F0F0F] md:flex md:items-start md:justify-between'>
      <div className='md:w-[940px] w-full h-full'>
        <ReactPlayerYt videoId={videoId} />
        <VideoInfo data={videoData?.data} loading={videoLoading} comData={commentsData?.data} comLoad={commentsLoading}/>
      </div>
      <div>
        <RelatedVideo videoId={videoId}/>
      </div>
    </div>
  )
}

export default Video