import React from 'react'

const ChannelPage = ({data,loading,showMenu}) => {
  return (
    <div
    className={`bg-[#0F0F0F] md:top-[60px] -z-50 ${
      !showMenu ? "md:left-[70px]" : "md:left-[245px]"
    } md:h-[1000px] md:w-full top-[50px]  font-rob`}
  >
    {loading ? (
        <React.Fragment>
            {data?.map((item) => {
                return (
                    <div className='w-full px-10 bg-red-500 h-[500px]'>

                    </div>
                )
            })}
        </React.Fragment>
    ) : (
        <></>
    )}
    </div>
  )
}

export default ChannelPage