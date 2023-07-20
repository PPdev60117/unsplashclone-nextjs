'use client'
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useState} from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { unsplash } from '../libs/type';

export default function Gallary(props:{data:unsplash}) {
  const img = props.data.urls.regular
  const {id,username,name,profile_image} = props.data.user
  const [heart,setHeart] = useState('text-gray-500'); 
  return (
    <>
      
      <div className='mb-5 relative group '>
                  <div className=' my-2 flex flex-row md:absolute bottom-1 left-3 md:invisible cursor-pointer md:group-hover:visible group/name z-40'>
                    <Image width={600}
              height={600} src={profile_image.medium} alt="" className='w-8 h-8 object-cover rounded-full '/>
                    <Link href={'https://portfolio-pee.onrender.com/'} className='my-auto'><p className=' ml-2 md:text-gray-200 my-auto group-hover/name:underline'>{name}</p></Link>
                  </div>
                  <Link href={`/photos/${props.data.slug}`}><Image width={600}
              height={600} src={img} alt="" className='object-cover w-full ' /></Link>
                  <Link href={`/photos/${props.data.slug}`}><div className='h-full md:top-0 w-full hidden bg-none md:group-hover:bg-gradient-to-b md:from-[rgb(0,0,0,0.5)] md:to-[rgb(0,0,0,0.5)] md:absolute md:flex '></div></Link>
                  <div className='flex justify-between my-3 md:absolute md:flex-col md:top-0 md:h-full md:right-2 md:invisible md:group-hover:visible z-50'>
                    <div className='border px-2 py-1 rounded-md border-slate-200 shadow-sm cursor-pointer md:mx-auto md:bg-[#ffffff] '>
                      <FavoriteIcon className={heart+' m-auto'} onClick={()=>{heart==='text-gray-500'?setHeart('text-red-700'):setHeart('text-gray-500')}}/>
                    </div>

                    <div className='md:hidden'>
                      <button className='border px-3 py-2 rounded-md border-slate-200 text-sm'>Dowlode</button>
                    </div>

                    <div className='md:mb-6 hidden md:flex'>
                      <button className='border px-2 py-2 rounded-md border-slate-200 text-sm text-gray-400 md:bg-[#ffffff]'><ArrowDownwardIcon/></button>
                    </div>

                    
                  </div>
                </div>
      
    </>
  )
}
