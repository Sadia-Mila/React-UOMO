import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import womenCollection from '/src/assets/womenCollection.png'
import menCollection from '/src/assets/menCollection.png'
import kidsCollection from '/src/assets/kidsCollection.png'
import giftCard from '/src/assets/giftCard.png'
import { Link } from 'react-router'

const Content = () => {
  return (
    <>
    <div className="py-18 ">
        <Container>
            <div className={"flex gap-x-6"}>
                <div className={"w-[50%] group relative" }>
                <Image className={""} imgSrc={womenCollection} imgAlt={womenCollection}/>
                <Link to={"/shop"}>
                     <button className={"absolute uppercase tracking-wider text-sm font-medium text-menuC group-hover:text-[#C32929] bottom-[6%] left-9 pb-1 after:absolute after:content-[''] after:w-1/2 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#C32929] group-hover:after:w-full after:transition-all after:duration-300"}>SHOP NOW</button>
                </Link>

                </div>
                <div className={"w-[50%] flex flex-col gap-y-3 group relative"} >
                    <Image imgSrc={menCollection} imgAlt={menCollection}/>
                    <Link to={"/shop"}>
                     <button className={"absolute uppercase tracking-wider text-sm font-medium text-menuC group-hover:text-[#C32929] top-[36%] left-9 pb-1 after:absolute after:content-[''] after:w-1/2 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#C32929] group-hover:after:w-full after:transition-all after:duration-300"}>SHOP NOW</button>
                    </Link>
                    <div className=" w-[48%] flex gap-x-4 group relative">
                        <Image imgSrc={kidsCollection} imgAlt={kidsCollection}/>
                        <Link to={"/shop"}>
                        <button className={"absolute uppercase tracking-wider text-sm font-medium text-menuC group-hover:text-[#C32929] top-[76%] left-9 pb-1 after:absolute after:content-[''] after:w-1/2 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#C32929] group-hover:after:w-full after:transition-all after:duration-300"}>SHOP NOW</button>
                        </Link>
                        
                        <Image imgSrc={giftCard} imgAlt={giftCard}/>
                        <Link to={"/shop"}>
                        <button className={" w-32 absolute uppercase text-sm font-medium text-menuC group-hover:text-[#C32929] top-[76%] left-[120%] pb-1 after:absolute after:content-[''] after:w-1/2 after:h-[2px] after:bottom-0 after:left-2 after:bg-[#C32929] group-hover:after:w-full after:transition-all after:duration-300"}>DISCOVER MORE</button>
                        </Link>           

                    </div>
                    
                </div>


            </div>
                

        </Container>
        {/* Out Trendy Products */}
        <Container>

        </Container>

    </div>
      
    </>
  )
}

export default Content

            