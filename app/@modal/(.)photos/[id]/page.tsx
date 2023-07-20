import PictureGall from '@/app/components/Picturegall'
import React from 'react'
import { picture } from '@/app/libs/type'
const  getdata = async (id:string) =>{
  const res = await fetch(`${process.env.UNSPLASH_URL}photos/${id}/?client_id=${process.env.ACCESS_KEY}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Modalphoto({ params }: { params: { id: string } }) {

  const datapic:picture = await getdata(params.id)

  return (
    <PictureGall key={params.id} data={datapic}/>
  )
}
