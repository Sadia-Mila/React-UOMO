import React from "react";
import Image from "../Image";
import promotion1 from "/src/assets/promotion1.png";
import promotion2 from '/src/assets/promotion2.png'
import promotion3 from '/src/assets/promotion3.png'
import Container from "../Container";
import Heading from "../Heading";
import Flex from "../Flex";
import { Link } from "react-router";

const ShopPromotion = () => {
  return (
    <>
      <div className="py-14 ">
        <Container>
            <div className="text-center mb-10">
            <div className="flex justify-center gap-x-2.5">
                <Heading
                className={"text-[35px] text-menuC font-bold"}
                text={"PROMOTIONS"}
                as={"h3"}
              />
              <Heading
                className={"text-[35px] text-menuC uppercase"}
                text={"Are Going On"}
                as={"h3"}
              />
              
            </div>
          </div>
          <Flex className={'gap-x-6'}>
            <div className="relative group ">
              <Image imgSrc={promotion1} imgAlt={"promotion1"} />
              <Heading
                className={
                  "absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-[40%] uppercase text-2xl font-bold w-[100px] text-center"
                }
                text={"New Horizons"}
                as={"h3"}
              />

              <Link to={"/shop"}>
                <button
                  className={
                    "absolute uppercase tracking-wider text-sm font-medium text-menuC group-hover:text-[#C32929] top-[54%] left-1/2 -translate-y-[54%] -translate-x-1/2 pb-1  after:absolute after:content-[''] after:w-1/2 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#C32929] group-hover:after:w-full after:transition-all after:duration-300"
                  }
                >
                  SHOP NOW
                </button>
              </Link>
            </div>
            <div className="relative group">
              <Image imgSrc={promotion2} imgAlt={"promotion1"} />
              <Heading
                className={
                  "absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-[40%] uppercase text-2xl font-bold w-[100px] text-center"
                }
                text={"Summar Hats"}
                as={"h3"}
              />

              <Link to={"/shop"}>
                <button
                  className={
                    "absolute uppercase tracking-wider text-sm font-medium text-menuC group-hover:text-[#C32929] top-[54%] left-1/2 -translate-y-[54%] -translate-x-1/2 pb-1  after:absolute after:content-[''] after:w-1/2 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#C32929] group-hover:after:w-full after:transition-all after:duration-300"
                  }
                >
                  SHOP NOW
                </button>
              </Link>
            </div>
                <div className="relative group">
              <Image imgSrc={promotion3} imgAlt={"promotion1"} />
              <Heading
                className={
                  "absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-[28%] text-sm w-[200px] text-center text-white"
                }
                text={"Free delivery for Uomo members"}
                as={"h3"}
              />
              <Heading
                className={
                  "absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-[50%] uppercase text-2xl font-bold w-[250px] text-center text-white"
                }
                text={"Promotions Up To 10% Off"}
                as={"h3"}
              />

              <Link to={"/shop"}>
                <button
                  className={
                    "absolute uppercase tracking-wider text-sm font-medium text-menuC group-hover:text-[#C32929] top-[64%] left-1/2 -translate-y-[64%] -translate-x-1/2 pb-1  after:absolute after:content-[''] after:w-1/2 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#C32929] group-hover:after:w-full after:transition-all after:duration-300"
                  }
                >
                  SEE MORE
                </button>
              </Link>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default ShopPromotion;
