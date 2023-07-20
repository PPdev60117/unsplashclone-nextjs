'use client'
import {useState} from 'react';
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReplyIcon from '@mui/icons-material/Reply';
import InfoIcon from '@mui/icons-material/Info';
import Image from 'next/image';
import { picture } from '../libs/type';
import Link from 'next/link';

export default function Realgall(props:{data:picture}) {
  const [heart,setHeart] = useState('text-gray-500');
  const {name,profile_image,} = props.data.user
 
  return (
    <>
      
        
        <div className='w-full h-full sm:h-fit  bg-white m-auto '>

          <div className='flex justify-between mx-3 md:mx-8 flex-col md:flex-row'>
            <Link href={'https://portfolio-pee.onrender.com/#contact'}>
            <div className=' my-2 flex flex-row bottom-1 left-3 cursor-pointer '>
              <Image width={600}
              height={600} src={profile_image.medium} alt="" className='w-8 h-8 object-cover rounded-full my-auto '/>
              <div className='flex flex-col ml-2  my-auto  text-sm'>
                <p className=''>{name}</p>
                <p className='text-xs'>contact me</p>
              </div>
            </div>
            </Link>

            <div className='flex justify-between my-auto'>
              <div className='border px-2 py-1 rounded-md border-slate-200 shadow-sm cursor-pointer bg-[#ffffff] '>
                <FavoriteIcon className={heart+' m-auto'} onClick={()=>{heart==='text-gray-500'?setHeart('text-red-700'):setHeart('text-gray-500')}}/>
              </div>

              <div className='sm:mx-2'>
                <button className='border px-3 py-2 rounded-md border-slate-200 text-sm bg-[#ffffff] '>Dowlode</button>
              </div>
                 
            </div>
          </div>

          <div className='w-full h-[500px] my-3 sm:my-0'>
            <Image width={600}
              height={600} src={props.data.urls.regular} alt="" className='h-full w-auto mx-auto object-contain' />
          </div>

          <div className='flex justify-between mx-3 text-gray-500 mt-3'>
            <div className='flex flex-col sm:flex-row'>
             
              <div className='sm:mr-3 mb-4'>
                <p>Views</p>
                <p className='text-xs '>{props.data.views}</p>
              </div>
              
              <div>
                <p>Dowloads</p>
                <p className='text-xs '>{props.data.downloads}</p>
              </div>
            </div>

            <div className='flex self-start'>
              <button className='border px-3 py-2 rounded-md border-slate-200 text-sm bg-[#ffffff] flex my-auto'><ReplyIcon/> <span className='hidden sm:flex my-auto ml-1'>Share</span></button>
              <button className='border px-3 py-2 rounded-md border-slate-200 text-sm bg-[#ffffff] flex my-auto'><InfoIcon/><span className='hidden sm:flex my-auto ml-1'>Info</span></button>
            </div>
          </div>

          <div>

          </div>

        </div>
      
    </>
  )
}
