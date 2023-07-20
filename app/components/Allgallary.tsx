'use client'
import Header from "./Header"
import Gallary from "./Gallary"
import { unsplash } from "../libs/type"
import InfiniteScroll from 'react-infinite-scroll-component';
import {useEffect, useState,useRef} from 'react'
import { v4 as uuid_v4 } from "uuid";


  

export default function Allgallary() {
  const [dataunsplash,setDataunsplash] = useState<unsplash[]>([])
  const [page, setPage] = useState(1);
  const  getdata = async () =>{
    const res =  await fetch(`${process.env.UNSPLASH_URL}photos/?page=${page}&client_id=${process.env.ACCESS_KEY}`)

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    const data:unsplash[] = await res.json()
    setPage((prev)=>prev+1)
    setDataunsplash((prev:unsplash[])=>[...prev,...data])
  }

 
useEffect(() => {
  getdata();
  setPage(no=>no+1)
}, []);


  const arraydistribute = (array:Array<unsplash> ,num:number) =>{
      const array1:Array<unsplash> =[]
    if(array !== undefined){
      for(let i=num;i<array.length;i=i+3){
        array1.push(array[i])
      }
    }
    return(array1);
  }

  const image1:unsplash[] = arraydistribute(dataunsplash,0)
  const image2:unsplash[] = arraydistribute(dataunsplash,1)
  const image3:unsplash[] = arraydistribute(dataunsplash,2)
    
  return (
    <>
      <div className=''>
        <Header/>
        <InfiniteScroll
        dataLength={dataunsplash.length} //This is important field to render the next data
        next={getdata}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
              <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>}
        >
        <div className='w-[90%] mx-auto mt-[50px]'>
          <div className='grid grid-cols-1 gap-x-5 md:grid-cols-2 lg:grid-cols-3'>
            <div className='flex flex-col '>
              {image1.map((img)=>(
                <Gallary key={uuid_v4()} data={img}/>
                ))}
            </div>
 
            <div className='flex flex-col '>
              {image2.map((img)=>(
                  <Gallary key={uuid_v4()} data={img}/>
                  ))}
              
            </div>

            <div className='flex flex-col '>
              {image3.map((img)=>(
                  <Gallary key={uuid_v4()} data={img}/>
                  ))}
            </div>
          </div>
        </div>
      </InfiniteScroll></div>
    </>
  )
}
