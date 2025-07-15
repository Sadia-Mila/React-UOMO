import React from "react";
import Image from "../Image";
import springCollection from "/src/assets/springCollection.png";
import { Link } from "react-router";
import Container from "../Container";
import Flex from "../Flex";
import springcoll1 from "/src/assets/springColl1.png";
import springcoll2 from "/src/assets/springColl2.png";
import Countdown from "react-countdown";

const SpringCollection = () => {
  const targetDate = new Date("2025-08-20T23:59:59");

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>🎉 Time's up!</span>;
    } else {
      return (
        <Flex className={"text-black w-[600px] gap-x-3 text-center"}>
          <div className="">
            <p className={"text-3xl leading-7.5 text-menuC mb-2"}>{days}</p>
            <hr className="text-[#767676] "/>
            <h5 className={"text-base font-bold text-[#767676] "}>Days</h5>
          </div>
          <span className={"text-2xl text-black] "}>:</span>
          <div className="">
            <p className={"text-3xl leading-7.5 text-menuC mb-2"}>{hours}</p>
            <hr className="text-[#767676] "/>
            <h5 className={"text-base font-bold text-[#767676] "}>Hours</h5>
          </div>
          <span className={"text-2xl text-black] "}>:</span>
          <div className="">
            <p className={"text-3xl leading-7.5 text-menuC mb-2"}>{minutes}</p>
            <hr className="text-[#767676] "/>
            <h5 className={"text-base font-bold text-[#767676] "}>Minutes</h5>
          </div>
          <span className={"text-2xl text-black] "}>:</span>
          <div className="">
            <p className={"text-3xl leading-7.5 text-menuC mb-2"}>{seconds}</p>
            <hr className="text-[#767676] "/>
            <h5 className={"text-base font-bold text-[#767676] "}>Seconds</h5>
          </div>
        </Flex>
      );
    }
  };

  return (
    <>
      <div className="py-12 relative group">
        <Image
          className={"bg-no-repeat bg-center bg-cover"}
          imgSrc={springCollection}
          imgAlt={SpringCollection}
        />
        <Link to={"/shop"}>
          <button
            className={
              "absolute uppercase tracking-wider text-sm font-medium text-menuC group-hover:text-[#C32929] top-[32%] left-42 pb-1 after:absolute after:content-[''] after:w-1/2 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#C32929] group-hover:after:w-full after:transition-all after:duration-300"
            }
          >
            SHOP NOW
          </button>
        </Link>

        {/* Countdown Part Start  */}

        <div className="py-5 absolute top-[40%] left-42">
          <Countdown date={targetDate} renderer={renderer} />,
        </div>

        {/* Countdown Part End  */}

        <Container>
          <Flex>
            <div className="py-12 flex items-center gap-x-7.5">
              <div className="relative group">
                <Image imgSrc={springcoll1} imgAlt={springcoll1} />
                <Link to={"/shop"}>
                  <button
                    className={
                      "absolute uppercase tracking-wider text-sm font-medium text-menuC group-hover:text-white bottom-[12%] left-10 pb-1 after:absolute after:content-[''] after:w-1/2 after:h-[2px] after:bottom-0 after:left-0 after:bg-white group-hover:after:w-full after:transition-all after:duration-300"
                    }
                  >
                    SHOP NOW
                  </button>
                </Link>
              </div>
              <div className="relative group">
                <Image imgSrc={springcoll2} imgAlt={springcoll2} />
                <Link to={"/shop"}>
                  <button
                    className={
                      "absolute uppercase tracking-wider text-sm font-medium text-menuC group-hover:text-[#C32929] bottom-[12%] left-10 pb-1 after:absolute after:content-[''] after:w-1/2 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#C32929] group-hover:after:w-full after:transition-all after:duration-300"
                    }
                  >
                    SHOP NOW
                  </button>
                </Link>
              </div>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default SpringCollection;
