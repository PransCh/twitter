import React from "react";
import Image from "next/image";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRegHeart, FaRetweet } from "react-icons/fa";
import { IoAnalytics } from "react-icons/io5";

import { Montserrat, Quicksand } from "next/font/google";

const montserrat = Montserrat({ subsets:["latin"]});
const quickSand = Quicksand({ subsets: ["latin"] });

const FeedCard: React.FC = () => {
  return (
    <div className={quickSand.className}>
      <div className="border border-gray-600 p-5 hover:bg-gray-900 transition-all cursor-pointer">
        <div className="grid grid-cols-12 gap-2 w-[90%]">
          <div className="col-span-1">
            <Image
              className="rounded-full"
              src="https://avatars.githubusercontent.com/u/105589987?v=4"
              alt="user-image"
              height={50}
              width={50}
            ></Image>
          </div>
          <div className="col-span-11">
            <h5>Chitimella</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              modi?
            </p>
            <div className="flex justify-between mt-2 text-lg items-center">
              <div>
                <BiMessageRounded />
              </div>
              <div>
                <FaRetweet />
              </div>
              <div>
                <FaRegHeart />
              </div>
              <div>
                <IoAnalytics />
              </div>
              <div>
                <BiUpload />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
