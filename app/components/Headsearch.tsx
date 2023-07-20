'use client'

import PhotoIcon from '@mui/icons-material/Photo';
import Link from 'next/link';
import React from 'react'

export default function Headsearch() {
  return (
    <>
        <div className="flex text-sm border-b text-gray-400">
            <Link className="px-3 py-3 hover:text-gray-800 my-auto" href=''>
                <PhotoIcon className='text-[18px] mx-2'/>
                <span className='my-auto'>Photos 120</span>
            </Link>
        </div>
    </>
  )
}
