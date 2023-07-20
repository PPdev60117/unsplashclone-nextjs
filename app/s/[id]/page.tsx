'use client'
import {useState , useEffect} from 'react';
import React from 'react';
import { search, unsplash } from '@/app/libs/type';
import Gallary from '@/app/components/Gallary';
import InfiniteScroll from 'react-infinite-scroll-component';


export default function Search({ params }: { params: { id: string } }) {
  const [page, setPage] = useState(1);
  const [dataunsplash,setDataunsplash] = useState<unsplash[]>([])
  const [hasmore,setHasmore] = useState(true)

  const  getdata = async (params:string) =>{
    const res = await fetch(`${process.env.UNSPLASH_URL}search/photos/?page=${page}&query=${params}&client_id=${process.env.ACCESS_KEY}`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    const data:search = await res.json()
    const real:unsplash[] = data.results
   
    setPage((prev)=>prev+1)
    setDataunsplash((prev:unsplash[])=>[...prev,...real])
    console.log(real)
  }

  useEffect(() => {
    getdata(params.id);
    setPage(no=>no+1)
  }, []);
  

  const arraydistribute = (array:Array<unsplash>,num:number) =>{
    const array1:Array<unsplash> =[]
  for(let i=num;i<array.length;i=i+3){
    array1.push(array[i])
  }
  return(array1);
}

const image1:unsplash[] = arraydistribute(dataunsplash,0)
const image2:unsplash[] = arraydistribute(dataunsplash,1)
const image3:unsplash[] = arraydistribute(dataunsplash,2)

return (
<>
  <div className=''>
    <div className='w-[90%] mx-auto mt-[50px]'>

      <div className='my-5'> 
        <h1 className='text-4xl pb-2 border-b'>
          {params.id}
        </h1>
      </div>
      <InfiniteScroll
        dataLength={dataunsplash.length} //This is important field to render the next data
        next={()=>getdata(params.id)}
        hasMore={hasmore}
        loader={<h4>Loading...</h4>}
        endMessage={
              <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>}>
      <div className='grid grid-cols-1 gap-x-5 md:grid-cols-2 lg:grid-cols-3'>
        <div className='flex flex-col '>
          {image1.map((img)=>(
            <Gallary key={img.id} data={img}/>
            ))}
        </div>

        <div className='flex flex-col '>
          {image2.map((img)=>(
              <Gallary key={img.id} data={img}/>
              ))}
          
        </div>

        <div className='flex flex-col '>
          {image3.map((img)=>(
              <Gallary key={img.id} data={img}/>
              ))}
        </div>
      </div>

    </InfiniteScroll>
    </div>
  </div>
</>
  )
}
