import Image from "next/image";
import { Montserrat } from "next/font/google";
import { BsBell, BsTwitter } from "react-icons/bs";
import { BiHash, BiHomeCircle, BiNotification, BiUser } from "react-icons/bi";
import { IoMailOutline } from "react-icons/io5";
import { PiBookmarkSimpleLight } from "react-icons/pi";

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
];

export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen w-screen px-56 style-Montserrat">
      <div className="col-span-3 justify-start pt-8 px-5">
        <div className="text-3xl h-fit hover:bg-gray-800 rounded-full px-3 py-3 cursor-pointer transition-all w-fit">
          <BsTwitter />
        </div>

        <div className="mt-2 text-2xl font-seriff px-5">
          <ul>
            {sideBarItem.map((item) => (
              <li
                key={item.title}
                className="flex justify-start items-center gap-2 hover:bg-gray-800 rounded-full px-5 py-2 cursor-pointer w-fit"
              >
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
          <button className="bg-[#1d9bf0] px-2 py-4 rounded-full w-full mt-5 pr-4 text-xl font-semibold">
            Tweet
          </button>
        </div>
      </div>
      <div className="col-span-6 border-r-[0.2px] border-l-[0.2px] border-white "></div>
      <div className="col-span-3"></div>
    </div>
  );
}
