import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Flex from "../Flex";
import Image from "../Image";
import gallery1 from "/src/assets/gallery1.png";
import gallery2 from "/src/assets/gallery2.png";
import gallery3 from "/src/assets/gallery3.png";
import gallery4 from "/src/assets/gallery4.png";
import gallery5 from "/src/assets/gallery5.png";
import gallery6 from "/src/assets/gallery6.png";
import gallery7 from "/src/assets/gallery7.png";
import gallery8 from "/src/assets/gallery8.png";
import gallery9 from "/src/assets/gallery9.png";
import gallery10 from "/src/assets/gallery10.png";
import gallery11 from "/src/assets/gallery11.png";
import gallery12 from "/src/assets/gallery12.png";

const Gallery = () => {
  return (
    <>
      <div className="py-10">
        <Container>
          <Heading
            className={"text-[35px] text-manuC text-center mb-12"}
            text={"@UOMO"}
            as={"h2"}
          />
          <div className="overflow-x-hidden">
            <Flex className={"flex-wrap -mx-3 gap-y-6 "}>
            <Image
              className={"w-[20%] px-3 hover:scale-[1.2] transition-all duration-300 ease-in-out"}
              imgSrc={gallery1}
              imgAlt={gallery1}
            />
            <Image
              className={"w-[20%] px-3 hover:scale-[1.2] transition-all duration-300 ease-in-out"}
              imgSrc={gallery2}
              imgAlt={gallery2}
            />
            <Image
              className={"w-[20%] px-3 hover:scale-[1.2] transition-all duration-300 ease-in-out"}
              imgSrc={gallery3}
              imgAlt={gallery3}
            />
            <Image
              className={"w-[20%] px-3 hover:scale-[1.2] transition-all duration-300 ease-in-out"}
              imgSrc={gallery4}
              imgAlt={gallery4}
            />
            <Image
              className={"w-[20%] px-3 hover:scale-[1.2] transition-all duration-300 ease-in-out"}
              imgSrc={gallery5}
              imgAlt={gallery5}
            />
            <Image
              className={"w-[20%] px-3 hover:scale-[1.2] transition-all duration-300 ease-in-out"}
              imgSrc={gallery6}
              imgAlt={gallery6}
            />
            <Image
              className={"w-[20%] px-3 hover:scale-[1.2] transition-all duration-300 ease-in-out"}
              imgSrc={gallery7}
              imgAlt={gallery7}
            />
            <Image
              className={"w-[20%] px-3 hover:scale-[1.2] transition-all duration-300 ease-in-out"}
              imgSrc={gallery8}
              imgAlt={gallery8}
            />
            <Image 
              className={"w-[20%] px-3 hover:scale-[1.2] transition-all duration-300 ease-in-out"}
              imgSrc={gallery9}
              imgAlt={gallery9}
            />
            <Image
              className={"w-[20%] px-3 hover:scale-[1.2] transition-all duration-300 ease-in-out"}
              imgSrc={gallery10}
              imgAlt={gallery10}
            />
            <Image
              className={"w-[20%] px-3 hover:scale-[1.2] transition-all duration-300 ease-in-out"}
              imgSrc={gallery11}
              imgAlt={gallery11}
            />
            <Image
              className={"w-[20%] px-3 hover:scale-[1.2] transition-all duration-300 ease-in-out"}
              imgSrc={gallery12}
              imgAlt={gallery12}
            />
            <Image
              className={"w-[20%] px-3 hover:scale-[1.2] transition-all duration-300 ease-in-out"}
              imgSrc={gallery10}
              imgAlt={gallery10}
            />
            <Image
              className={"w-[20%] px-3 hover:scale-[1.2] transition-all duration-300 ease-in-out"}
              imgSrc={gallery11}
              imgAlt={gallery11}
            />
            <Image
              className={"w-[20%] px-3 hover:scale-[1.2] transition-all duration-300 ease-in-out"}
              imgSrc={gallery12}
              imgAlt={gallery12}
            />
          </Flex>

          </div>
          
        </Container>
      </div>
    </>
  );
};

export default Gallery;
