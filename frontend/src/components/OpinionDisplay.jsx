import React, { useState } from "react";
import { FaRegComment } from "react-icons/fa";

// Component for displaying individual opinions
const OpinionItem = ({ opinion }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <p className="text-gray-800">{opinion.text}</p>
      <p className="text-gray-500 text-xs mt-2">
        {opinion.date.toLocaleString()}
      </p>
    </div>
  );
};

// Main OpinionSection component
const OpinionSection = () => {
  const [opinions, setOpinions] = useState([]);
  const [newOpinion, setNewOpinion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newOpinion.trim() !== "") {
      setOpinions([...opinions, { text: newOpinion, date: new Date() }]);
      setNewOpinion("");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md w-full max-w-2xl mx-auto mt-8 p-4">
      <h2 className="text-2xl font-bold mb-6 text-green-700 text-center">
        Share Your Opinion
      </h2>
      <form onSubmit={handleSubmit} className="mb-4 flex items-center">
        <textarea
          value={newOpinion}
          onChange={(e) => setNewOpinion(e.target.value)}
          placeholder="What's on your mind?"
          className="shadow appearance-none border rounded-l w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
          style={{ minHeight: "40px" }}
        ></textarea>
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline ml-2"
        >
          Post
        </button>
      </form>
      <div className="space-y-4">
        {/* Displaying submitted opinions */}
        {opinions.length > 0 ? (
          opinions.map((opinion, index) => (
            <OpinionItem key={index} opinion={opinion} />
          ))
        ) : (
          <div className="text-gray-500 text-center">
            <FaRegComment className="text-5xl mb-4 text-gray-400" />
            <p>No opinions yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OpinionSection;
