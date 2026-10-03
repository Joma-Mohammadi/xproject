import React from 'react'

export default function post() {
  return (
    <div className='p-4 border-y border-gray-400'>
        {/* Post Type */}
        <div className='flex items-center gap-2 text-sm text-gray-400 mb-2 font-bold'>
            icon
            <span>repost by JM Frotan</span>
        </div>
        {/* Post Content */}
        <div className='flex gap-4'>
            <div className='relative w-10 h-10 rounded-full overflow-hidden'>
                 <img src="/general/post.jpg" alt="Post" />
            </div>
        </div>
    </div>
  )
}
