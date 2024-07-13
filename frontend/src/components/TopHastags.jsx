import React, { useState } from "react";

const TopHashtags = () => {
  const [hashtags, setHashtags] = useState([
    { tag: "#react", count: 20 },
    { tag: "#javascript", count: 15 },
    { tag: "#webdev", count: 10 },
    { tag: "#coding", count: 8 },
    { tag: "#frontend", count: 5 },
  ]);

  const addHashtag = () => {
    const newHashtag = prompt("Enter new hashtag:");
    if (newHashtag) {
      // Check if the hashtag already exists
      const existingIndex = hashtags.findIndex((h) => h.tag === newHashtag);
      if (existingIndex !== -1) {
        const updatedHashtags = [...hashtags];
        updatedHashtags[existingIndex].count++;
        setHashtags(updatedHashtags);
      } else {
        // Add new hashtag if it doesn't exist
        setHashtags([...hashtags, { tag: newHashtag, count: 1 }]);
      }
    }
  };

  return (
    <div className="bg-green-600 shadow-md rounded-lg p-4 mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center text-white">
        Top Hashtags
      </h2>
      <ul className="space-y-4">
        {hashtags.slice(0, 5).map((hashtag, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-gray-100 p-2 rounded-full pr-4"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-green-700 text-white w-8 h-8 flex items-center justify-center rounded-full">
                {index + 1}
              </div>
              <div className="text-black px-4">{hashtag.tag}</div>
            </div>
            <span className="text-green-700 font-bold">{hashtag.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopHashtags;
