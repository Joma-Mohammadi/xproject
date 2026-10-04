import Image from "./Image";
import Postinfo from "./Postinfo";
export default function post() {
  return (
    <div className="p-4 border-y border-gray-400">
      {/* Post Type */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-2 font-bold">
        icon
        <span>repost by JM Frotan</span>
      </div>
      {/* Post Content */}
      <div className="flex gap-4">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          {/* Logo */}
          <Image src={"/general/avatar1.jpg"} alt="" width={40} height={40} />
        </div>
        {/* Content */}
        <div className="flex-1 flex-col gap-2">
          {/* UP */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <h2>Sara Frotan</h2>
              <span>sarafortan490@gmail.com</span>
              <span>1 day ago</span>
            </div>
            <Postinfo />
          </div>
          {/* Post Text and Media */}
          <p>Enjoying the little moments and choosing to smile. 🤍</p>
          <Image src={"/general/post.jpg"} alt="" width={500} height={500}/>
        </div>
      </div>
    </div>
  );
}
