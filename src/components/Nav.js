import React from "react";
import image from "./asset/Card Front.png";
import image2 from "./asset/backimage.png";
import image3 from "./asset/Frame 43.png"

function Nav() {
    return (
        <div className="">
            <div className="pt-10 pl-20 pr-20 text-2xl flex justify-center gap-10 font-bold text-gray-500">
                <a href="#study" className="text-blue-900 underline">
                    Study
                </a>
                <a
                    href="#quiz"
                    className=" hover:text-blue-700 hover:underline "
                >
                    Quiz
                </a>
                <a href="#test" className="hover:text-blue-700 hover:underline">
                    Test
                </a>
                <a href="#game" className="hover:text-blue-700 hover:underline">
                    Game
                </a>
                <a
                    href="#others"
                    className="hover:text-blue-700 hover:underline"
                >
                    Others
                </a>
            </div>
            {/* main section */}

            <div className="flex justify-center items-center pt-10 pb-10">
                <label className="swap swap-flip text-9xl ">
                    <input type="checkbox" />
                    <div className="swap-on">
                        <img src={image2} width="700" height="500"></img>
                    </div>
                    <div className="swap-off">
                        <img src={image} width="700" height="500"></img>
                    </div>
                </label>
            </div>

            <div className="flex justify-center">
              <img src={image3} alt="image" />
            </div>
        </div>
    );
}

export default Nav;
