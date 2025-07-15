import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import brand1 from '/src/assets/brand1.png'
import brand2 from '/src/assets/brand2.png'
import brand3 from '/src/assets/brand3.png'
import brand4 from '/src/assets/brand4.png'
import brand5 from '/src/assets/brand5.png'
import brand6 from '/src/assets/brand6.png'
import brand7 from '/src/assets/brand7.png'

const Partners = () => {
  return (
    <>
    <div className="py-12">
        <Container>
        <Flex className={"justify-between gap-x-8"}>
            <Image imgSrc={brand1} imgAlt={brand1}/>
            <Image imgSrc={brand2} imgAlt={brand2}/>
            <Image imgSrc={brand3} imgAlt={brand3}/>
            <Image imgSrc={brand4} imgAlt={brand4}/>
            <Image imgSrc={brand5} imgAlt={brand5}/>
            <Image imgSrc={brand6} imgAlt={brand6}/>
            <Image imgSrc={brand7} imgAlt={brand7}/>
            
        </Flex>
    </Container>

    </div>
    
      
    </>
  )
}

export default Partners
