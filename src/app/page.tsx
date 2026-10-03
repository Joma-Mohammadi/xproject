

import Feed from "@/components/feed";
import Share from "@/components/share"
import Link from "next/link";

export default function Homepage() {
  return (
   <div>
    <div className="px-4 pt-4 flex justify-between text-gray-400 font-bold border-b ">
      <Link href="" className="pb-3 flex items-center border-b-4 border-blue-500">For You</Link>
      <Link href="" className="pb-3 flex items-center ">Following</Link>
      <Link href="" className="pb-3 flex items-center ">React.js</Link>
      <Link href="" className="pb-3 flex items-center">Next.js</Link>
      <Link href="" className="pb-3 flex items-center">Tailwind</Link>
      
    </div>
     <Share/>
     <Feed/>
   </div>
  );
}