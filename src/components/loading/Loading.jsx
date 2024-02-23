import React from 'react'
import { ClipLoader, MoonLoader } from 'react-spinners';

const Loading = () => {

    const override = {
        display: "block",
        margin: "20px auto",
        borderColor: "white",
        
      };
    return (
    <div className='h-[200px] w-full flex items-center justify-center '>
        <MoonLoader
        color="#adadad"
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
        cssOverride={override}
      />
    </div>
  )
}

export default Loading