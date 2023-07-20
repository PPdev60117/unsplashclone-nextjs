'use client'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';


export default function Navbar() {

    const [toggle,setToggle] = useState<boolean>(false)
    const [params,setParams] = useState<string>('')
  return (
    <>
        <div className="flex h-14 flex-row justify-between w-full relative">
            
                <div className='my-auto mx-3 flex-none '>
                    <Link href={'http://localhost:3000/'} className=''>
                        <Image width={600}
              height={600} src="https://avatars.githubusercontent.com/u/9951955?s=200&v=4" alt="" className='w-10 h-10 m-auto'/>
                    </Link>
                </div>

                <div className='my-auto flex justify-self-stretch w-full sm:w-[500px]'>
                    <form className='bg-[#EEEEEE] px-4 py-2 rounded-full flex flex-row w-full' action={`/s/${params}`}>
                        <SearchIcon className='text-gray-500'/>
                        <input type="text" placeholder="Search images" 
                        className="placeholder-[#767676] bg-transparent w-full outline-0 px-5" 
                        value={params}
                        onChange={(e)=>{setParams(e.target.value)}}/>
                    </form>
                </div>
            

            <div className='flex flex-none'>
                <div className='m-auto px-2 cursor-pointer md:hidden'>
                    <MenuIcon className='text-4xl' onClick={()=>{toggle===false?setToggle(true):setToggle(false)}}/>
                </div>
                
 
              
                <div className='mx-5 absolute flex top-[60px] right-0 flex-col bg-[#ffffff] drop-shadow-[0_1px_3px_rgba(0,0,0,0.25)] rounded-lg md:flex-row md:drop-shadow-none md:static text-center align-middle content-center'>
                    
                    <div className={`flex flex-col ${toggle?'hidden':'none'} md:flex md:flex-row` }>
                        <div className="absolute w-4 overflow-hidden inline-block -top-2 right-1 md:hidden">
                            <div className=" h-2 w-2 bg-[#ffffff] rotate-45 transform origin-bottom-left md:hidden"></div>
                        </div>
                        <Link href="https://portfolio-pee.onrender.com/" className='px-[30px] py-[10px] hover:bg-slate-200 my-auto md:px-[10px] rounded-lg'>about me</Link>
                        <Link href="https://portfolio-pee.onrender.com/#contact" className='px-[30px] py-[10px] hover:bg-slate-200 my-auto md:px-[10px] rounded-lg'>contact</Link>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}
