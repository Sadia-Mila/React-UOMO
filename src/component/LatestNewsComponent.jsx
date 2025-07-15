import React from 'react'
import Container from './Container'
import Image from './Image'
import Flex from './Flex'

const LatestNewsComponent = ({newsSrc, newsAlt, newsTitle, newsDate, mainNews  }) => {
  return (
    <>
      <Container>
        <Image imgSrc={newsSrc} imgAlt={newsAlt}/>
            <div className="flex items-center justify-between text-menuC text-base mt-4">
                <h6>{newsTitle}</h6>
                <h6>{newsDate}</h6>
            </div>
            <h5 className={"text-menuC mt-2"}>{mainNews}</h5>

      </Container>
            

 
     
    </>
  )
}

export default LatestNewsComponent
