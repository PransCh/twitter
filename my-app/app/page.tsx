import Image from "next/image";
import { BsBell, BsTwitter } from "react-icons/bs";
import { BiHash, BiHomeCircle, BiNotification, BiUser } from "react-icons/bi";
import { IoMailOutline } from "react-icons/io5";
import { PiBookmarkSimpleLight } from "react-icons/pi";
import FeedCard from "@/components/FeedCards";
import { SlOptions } from "react-icons/sl";

interface twitterSideBar {
  title: string;
  icon: React.ReactNode;
}

const sideBarItem: twitterSideBar[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notifications",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <IoMailOutline />,
  },
  {
    title: "Bookmarks",
    icon: <PiBookmarkSimpleLight />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
  {
    title: "More",
    icon: <SlOptions />,
  },
];

export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen w-screen px-56 style-Montserrat overflow-auto">
      <div className="col-span-3 flex flex-col pt-8">
        <div className="text-4xl h-fit w-fit hover:bg-gray-600 rounded-full p-1 cursor-pointer transition-all mt-2">
          <BsTwitter />
        </div>

        <div className="mt-1 text-xl pr-5 ">
          <ul>
            {sideBarItem.map((item) => (
              <li
                key={item.title}
                className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3 py-3 w-fit cursor-pointer mt-2"
              >
                <span className="text-2xl">{item.icon}</span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
          <button className="bg-[#1d9bf0] px-2 py-4 rounded-full w-full mt-5 pr-4 text-xl font-semibold">
            Tweet
          </button>
        </div>
      </div>
      <div className="col-span-5 border-r-[0.2px] border-l-[0.2px] border-gray-600">
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </div>
      <div className="col-span-3"></div>
    </div>
  );
}
