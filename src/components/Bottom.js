import React from 'react'
import hyggex from "./asset/Frame 41.png"
import hyggex2 from "./asset/Vector.png"


function Bottom() {
  return (
    <div className="flex justify-between pt-10 pl-20 pr-20">
      <div className="flex items-center">
        <img src={hyggex} alt="Left Image" className="w-50 h-30 mr-2" />
        {/* <span className="text-lg">Left Text</span> */}
      </div>
      <div className="flex items-center">
        <img src={hyggex2} alt="Right Image" className="w-14 h-14 mr-2" />
        <span className="text-2xl font-bold text-blue-900 ">Create Flashcard</span>
      </div>
    </div>
  );
}

export default Bottom