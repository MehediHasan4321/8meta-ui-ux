'use client'

import React from 'react';
interface FeaturesProps{
    text?:string 
}

const Features:React.FC<FeaturesProps> = ({text})=>{
    return(
        <h4 className='text-md text-white '>{text}</h4>

    )
}

export default Features