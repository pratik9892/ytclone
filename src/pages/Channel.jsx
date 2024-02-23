import React from 'react'
import Sidebar from "../components/Sidebar"
import { useSelector } from 'react-redux';
import {UseFetch} from "../hooks/UseFetch"
import { useParams } from 'react-router-dom';
import ChannelPage from '../components/channelPage/ChannelPage';

const Channel = () => {
  const showMenu = useSelector((state) => state.handleClick.status);
  const {channelId} = useParams()
  const {data,isLoading} = UseFetch(`/channel`)

  const channelData = new Array(data?.data?.info)
  console.log(channelData);
  return (
    <div className='overflow-hidden '>
        <Sidebar showFullMenu={showMenu}/>
        <ChannelPage data={channelData} loading={isLoading} showMenu={showMenu}/>
    </div>
  )
}

export default Channel