
import Link from "next/link";
import Image from "@/components/Image";

const menuList = [
  {
    id: 1,
    name: "Home",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notifications",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "Jobs",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "Communities",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "Profile",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 9,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];

export default function RightBar() {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
      {/* Logo, Button, Menu */}
      <div className="flex flex-col gap-4 text-lg items-center 2xl:items-start">

        {/* LOGO */}
        <Link
          href="/"
          className="p-2 rounded-full hover:bg-[#141414]"
        >
          <Image
            src="icons/logo.svg"
            alt="xlogo"
            width={24}
            height={24}
          />
        </Link>

        {/* MENU LIST */}
        <div className="flex flex-col gap-4">
          {menuList.map((item) => {
            return (
              <Link
                className="flex items-center gap-6 p-2 rounded-full hover:bg-[#141414]"
                href={item.link}
                key={item.id}
              >
                <Image
                  src={`icons/${item.icon}`}
                  alt={item.icon}
                  width={24}
                  height={24}
                />

                <span className="hidden 2xl:inline">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* BUTTON - Mobile */}
        <Link
          href="/"
          className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center 2xl:hidden"
        >
          <Image
            src="/icons/post.svg"
            alt="new post"
            width={24}
            height={24}
          />
        </Link>

        {/* BUTTON - Desktop */}
        <Link
          href="/"
          className="hidden 2xl:block bg-white text-black rounded-full font-bold py-2 px-20"
        >
          Create a post
        </Link>
      </div>

      {/* Account Details */}
      <div className="flex items-center justify-between">
        
        <div className="flex items-center gap-2">

          {/* Avatar */}
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              src="/general/avatar.png"
              alt="jm frotan"
              width={40}
              height={40}
            />
          </div>

          {/* User Info */}
          <div className="hidden 2xl:flex flex-col">
            <span className="font-bold">
              JM Frotan
            </span>

            <span className="text-gray-400">
              jmfrotan490@gmail.com
            </span>
          </div>

        </div>

        {/* More Button */}
        <div className="hidden 2xl:block cursor-pointer font-bold">
          ...
        </div>

      </div>
    </div>
  );
}
