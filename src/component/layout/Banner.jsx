import { Link } from "react-router";
import Image from "../Image";
import bannerbg1 from "/src/assets/bannerbg1.png";
import bannerOnlybg from "/src/assets/bannerOnlybg.png";
import Heading from "../Heading";
import bannerPerson1 from "/src/assets/bannerPerson1.png";
import bannerbg2 from "/src/assets/bannerbg2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";
import { useState } from "react";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  var settings = {
    dots: true,
    fade: true,
    speed: 1500,
    arrows: false,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    afterChange: (index) => setCurrentSlide(index),
  };

  return (
    <>
      <Slider {...settings}>
        <div>
          <div className={"relative group "}>
            <Image
              className={"relative bg-no-repeat bg-cover bg-center"}
              imgSrc={bannerOnlybg}
              imgAlt={bannerOnlybg}
            />
            <div className="absolute top-1/2 left-20 -translate-y-1/2">
              <Heading
                className={
                  "ml-10  pl-10 text-base leading-8 text-[#C32929] relative before:absolute before:content-[''] before:w-18 before:h-0.5 before:bg-[#C32929] before:top-1/2 before:-left-20 before:ml-10"
                }
                text={"NEW TREND"}
                as={"h5"}
              />

              <Heading
                className={"text-[70px] font-bold leading-20 text-menuC"}
                text={"SUMMER SALE STYLISH "}
                as={"h1"}
              />
              <Heading
                className={"text-[40px] leading-8 text-menuC mb-8 "}
                text={"WOMENS "}
                as={"h1"}
              />

              <Link to={"/shop"}>
                <button
                  className={
                    "absolute uppercase tracking-wider text-sm font-medium text-menuC group-hover:text-[#C32929]  pb-1 after:absolute after:content-[''] after:w-1/2 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#C32929] group-hover:after:w-full after:transition-all after:duration-300"
                  }
                >
                  DISCOVER MORE
                </button>
              </Link>
            </div>
            <Image
              className={`w-[500px] h-[610px] absolute bottom-0 right-40 transition-all duration-1000 ease-out
                ${
                  currentSlide === 0
                    ? "translate-x-0 opacity-100"
                    : "translate-y-[400px] opacity-0"
                }
                `}
              imgSrc={bannerPerson1}
              imgAlt={bannerPerson1}
            />
          </div>
        </div>
        <div>
          <div className={"relative group"}>
            <Image
              className={"relative bg-no-repeat bg-cover bg-center"}
              imgSrc={bannerOnlybg}
              imgAlt={bannerOnlybg}
            />
            <div className="absolute top-1/2 left-20 -translate-y-1/2">
              <Heading
                className={
                  "ml-10  pl-10  mb-6 text-base leading-8 text-[#C32929] relative before:absolute before:content-[''] before:w-18 before:h-0.5 before:bg-[#C32929] before:top-1/2 before:-left-20 before:ml-10"
                }
                text={"NEW TREND"}
                as={"h5"}
              />

              <Heading
                className={
                  "text-[70px] font-bold uppercase leading-10 text-menuC mb-6"
                }
                text={"Hello New Season "}
                as={"h1"}
              />
              <Heading
                className={"text-[20px] leading-8 text-menuC mb-6"}
                text={"LIMITED TIME OFFER - UP TO 60% OFF & FREE SHIPPING"}
                as={"h1"}
              />

              <Link to={"/shop"}>
                <button
                  className={
                    "absolute uppercase tracking-wider text-sm font-medium text-menuC group-hover:text-[#C32929]  pb-1 after:absolute after:content-[''] after:w-1/2 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#C32929] group-hover:after:w-full after:transition-all after:duration-300"
                  }
                >
                  DISCOVER MORE
                </button>
              </Link>
            </div>
            <Image
              className={`w-[500px] h-[610px] absolute bottom-0 right-40 transition-all duration-800 ease-out
    ${
      currentSlide === 1
        ? "translate-x-0 opacity-100"
        : "translate-x-[400px] opacity-0"
    }
  `}
              imgSrc={bannerbg2}
              imgAlt={bannerbg2}
            />
          </div>
        </div>
      </Slider>
    </>
  );
};

export default Banner;
