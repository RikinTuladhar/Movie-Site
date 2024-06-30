import React, { useState } from 'react'
import {MovieCards} from "../../exports/componentsExport"
const HomeSecondSection = () => {
  const [datas,setDatas] = useState([
    {id:1,name:"Movie 1"},
    {id:2,name:"Movie 2"},
    {id:3,name:"Movie 3"},
    {id:4,name:"Movie 4"},
    {id:5,name:"Movie 5"},
    {id:6,name:"Movie 6"},
    {id:7,name:"Movie 7"},
    {id:8,name:"Movie 8"},
    {id:9,name:"Movie 9"},
    {id:10,name:"Movie 10"},
    
  ])
  return (
    <div>
      <h1 className='text-3xl font-bold'>Recommendation</h1>
     <div className='grid items-center w-full grid-cols-5 mx-10 my-10 gap-y-5 gap-x-5 justify-items-center '>
     {datas.map((data,i)=>(
       <MovieCards key={i} data={data}/>
     ))}
     </div>
    </div>
  )
}

export default HomeSecondSection
