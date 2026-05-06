import React from "react";

function Card({username, year = "2024", txtbtn = "visit me"}) {   
    return (
        <>
         <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
  <div>
    <img className="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/33507011/pexels-photo-33507011.jpeg" />
  </div>
  <div className="flex items-center md:items-start">
    <span className="text-2xl font-medium">{username}</span>
    <span className="font-medium text-sky-500 ">The Anti-Patterns</span>
    <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>No. 4</span>
      <span>·</span>
      <span>{year}</span>
      <button className="mt-2 inline-flex cursor-pointer items-center text-sm 
      font-semibold text-white bg-blue-500 hover:bg-blue-600 focus:ring focus:ring-blue-300" >
        {txtbtn}
      </button>
    </span>
  </div>
</div>
        </>
        )

}

export default Card