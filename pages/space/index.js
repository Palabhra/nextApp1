import TouristCard from '@/components/touristCard/TouristCard'
import React,{useEffect, useState} from 'react'
import { sendData } from "@/data";

const AllEntity = () => {
 const x = [...Array(1,10)]
  console.log(x);
  return (
    <div className='boxWrapper'>
      {
     [...sendData()].map((item, idx) =>
      <TouristCard props={item}/>
     )
      }
   
    </div>
  )
}

export default AllEntity