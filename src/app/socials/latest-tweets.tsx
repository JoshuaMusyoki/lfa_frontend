import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Tweet {
    id: number;
    text: string;
    user: {
      screen_name: string;
    };
  }
  
const LatestTweets = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3003/tweets')
      .then(response => {
        setTweets(response.data);
      })
      .catch(error => {
        console.error('Error fetching tweets:', error);
      });
  }, []);

  return (
    <div className="flex flex-col">
      <h4 className="text-pink-500 text-sm font-semibold">LATEST POSTS</h4>
      <h2 className="text-2xl font-bold text-black mt-2">
        FOLLOW THE Make A Difference
      </h2>
      {tweets.map(tweet => (
        <div key={tweet.id} className="mt-4 p-4 border-b border-gray-200">
          <p className="text-black font-semibold">@{tweet.user.screen_name}</p>
          <p className="text-gray-600 mt-2">{tweet.text}</p>
        </div>
      ))}
      <button className="mt-6 bg-[#04677B] text-white font-semibold px-6 py-3 rounded-full">
        Donate
      </button>
    </div>
  );
};

export default LatestTweets;
