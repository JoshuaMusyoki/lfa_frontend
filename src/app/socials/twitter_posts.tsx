import React from "react";
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const LatestPost =()=> {
    return (
        <div className="flex justify-between items-start bg-white p-8 rounded-lg shadow-md">
        <div className="flex-1">
          <h4 className="text-pink-500 text-sm font-semibold">LATEST POSTS</h4>
          <h2 className="text-2xl font-bold text-black mt-2">
            FOLLOW US TO MAKE A DIFFERENCE
          </h2>
          <p className="text-gray-600 mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it.
          </p>
          <button className="mt-6 bg-[#04677B] text-white font-semibold px-6 py-3 rounded-full">
            Donate
          </button>
       
        
        <div className="ml-8">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="Lead_F_Africa"
            options={{ height: 400 }}
            noFooter
            noBorders
            noHeader
            transparent
          />
        </div>
        </div>
      </div>
    );
};

export default LatestPost;
