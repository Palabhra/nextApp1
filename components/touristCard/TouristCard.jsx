import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'


const TouristCard = ({props}) => {

const navigate = useRouter();
  const detailsHandler =(name) =>{
    console.log(name);
    navigate.push(`/space/${name}`)
  }

  return (
    <div className='boxCard' onClick={()=>detailsHandler(props.name)}>
      <div className='boxImg'>
        <img src={props.images.webp} height={"100%"} />
      </div>
      <div className='boxDetails'>
        <div>
          <span className='details'>
            Name:
          </span>
          <span className='des'>{props.name}</span>
        </div>
        <div>
          <span className='details'>
            Description:
          </span>
          <span className='des'> {(props.description).slice(0,10)}</span>
        </div>
        <div>
          <span className='details'>
            Distance:
          </span>
          <span className='des'>
            {props.distance}
          </span>

        </div>
      </div>
    </div>
  )
}

export default TouristCard