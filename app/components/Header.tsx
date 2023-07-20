'use client'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

export default function Header() {
    const [params,setParams] = useState<string>('')
  return (
    <>
        
    <div className="h-[230px] flex  bg-rock bg-cover text-white sm:h-[350px] md:h-[600px] ">
        <div className='h-full w-full bg-gray-900 bg-opacity-50 flex '>
            <div className='flex flex-col mx-4 my-auto sm:mx-[50px] md:mx-auto'>
                <h1 className='text-3xl z-10 md:text-5xl lg:text-7xl'><b>Unsplash Clone</b></h1>

                <p className='text-sm w-[250px] md:text-lg md:w-[300px] my-5'>
                    The internet’s source for visuals.
                    Cloned by peerapat sattarattana.
                </p>

                
                <div className='hidden md:flex flex-col '>
                    <div className='my-auto flex md:w-[500px] lg:w-[700px]'>
                        <form className='group bg-[#EEEEEE] px-4 py-4 rounded-md flex flex-row w-full hover:bg-[#ffffff] hover:shadow-[0_0px_1px_5px_rgba(0,0,0,0.3)]' action={`/s/${params}`}>
                            <SearchIcon className='text-gray-500'/>
                            <input type="text" placeholder="Search images" className="placeholder-[#767676] bg-transparent w-full outline-0 px-5 text-gray-500 group-focus:shadow-[0_0px_1px_5px_rgba(0,0,0,0.3)] "value={params}
                        onChange={(e)=>{setParams(e.target.value)}}/>
                        </form>
                    </div>
                    

                    <div className='hidden md:flex mt-3'>
                        <p className='text-sm'>Trending: flower wallpapers backgrounds happy love</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

        

        
    </>
  )
}
