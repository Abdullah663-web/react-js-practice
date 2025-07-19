import React from "react";

const Card = ({ username, content ,btn="Click Me"}) => {
  console.log(username, content);
  return (
    <div className="d-flex">
      <div className="max-w-xs p-6 rounded-md shadow-md bg-black ">
        <img
          src="https://source.unsplash.com/300x300/?random"
          alt="image"
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            Title
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{username}</h2>
        </div>
        <p className="text-gray-300">{content}</p>
        <button className="bg-gradient text-6xl rounded p-3 mt-2 hover:bg-amber-200 btn">{btn}</button>
      </div>
    </div>
  );
};

export default Card;
