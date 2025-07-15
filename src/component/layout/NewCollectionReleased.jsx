import React from 'react'
import Image from '../Image'
import NewReleased from '/src/assets/newCollectionRelegasebg.png'
import Heading from '../Heading'


const NewCollectionReleased = () => {
  return (
    <>
    <div className="relative">
        <Image className={"h-full bg-no-repeat bg-center bg-cover"} imgSrc={NewReleased} imgAlt={NewReleased}/>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase text-center">
            <Heading className={" text-[70px] text-white font-bold mb-2"} text={"New Season"} as={"h2"}/>
            <Heading className={"text-lg font-medium mb-4"} text={"New collection Released"} as={"p"}/>
            <button className={"py-4 pl-16 pr-8 rounded-lg bg-white text-black text-base relative before:absolute before:content-[''] before:w-8 before:h-[1px] before:bg-black before:top-1/2 before:left-2 before:translate-x-2 before:translate-y-1/2 uppercase"}>Shop Now</button>
        </div>
        
    </div>
      
    </>
  )
}

export default NewCollectionReleased
