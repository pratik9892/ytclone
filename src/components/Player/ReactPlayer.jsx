import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const ReactPlayerYt = ({ videoId}) => {

  return (
    <div>
      <div className="w-full md:h-[529px] md:rounded-2xl overflow-hidden h-[200px]">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoId}`}
        playing={true}
        controls={true}
        width='100%'
        height='100%'
      />
      </div>
    </div>
  );
};

export default ReactPlayerYt;
