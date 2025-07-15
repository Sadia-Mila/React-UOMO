import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Shopping from '../../assets/icons/Shopping'
import Heading from '../Heading'
import Headphone from '../../assets/icons/Headphone'
import Shield from '../../assets/icons/Shield'



const Icons = () => {
  return (
    <>
    <div className="py-14">
        <Container>
            <Flex className={"justify-between"}>
                <div className="flex flex-col justify-center items-center">
                    <Shopping/>
                    <Heading className={"text-lg text-black mt-5 mb-1"} text={"FAST AND FREE DELIVERY"} as={"h5"}/>
                    <Heading className={"text-[15px] text-[#767676]"} text={"Free delivery for all orders over $140"} as={"p"}/>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Headphone/>
                    <Heading className={"text-lg text-black mt-5 mb-1"} text={"24/7 CUSTOMER SUPPORT"} as={"h5"}/>
                    <Heading className={"text-[15px] text-[#767676]"} text={"Friendly 24/7 customer support"} as={"p"}/>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Shield/>
                    <Heading className={"text-lg text-black mt-5 mb-1"} text={"MONEY BACK GUARANTEE"} as={"h5"}/>
                    <Heading className={"text-[15px] text-[#767676]"} text={"We return money within 30 days"} as={"p"}/>
                </div>
            </Flex>

        </Container>
    </div>
      
    </>
  )
}

export default Icons
