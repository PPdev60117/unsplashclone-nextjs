import Realgall from "@/app/components/Realgall";
import { picture } from "@/app/libs/type";

const  getdata = async (id:string) =>{
  const res = await fetch(`${process.env.UNSPLASH_URL}photos/${id}/?client_id=${process.env.ACCESS_KEY}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Photopage({ params }: { params: { id: string } }) {

  const datapic:picture = await getdata(params.id)

  return (
    <>
      <Realgall key={params.id} data={datapic}/>
    </>
  )
}
