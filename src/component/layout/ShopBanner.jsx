import { Link } from "react-router";
import Image from "../Image";
import shopbannerbg from "/src/assets/shopbannerbg.png";
import shopBannerbg2 from '/src/assets/shopBannerbg2.png'
import shopBannerbg3 from '/src/assets/shopBannerbg3.png'
import Heading from "../Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';

const ShopBanner = () => {
    var settings = {
    dots: true,
    fade: true,
    lazyLoad: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2600,
    cssEase: "linear"
  };

  return (
    <>
    <Slider {...settings}>
        <div>
          <div className={"relative group"}>
            <Image
              className={"relative bg-no-repeat bg-cover bg-center"}
              imgSrc={shopbannerbg}
              imgAlt={shopannerbg}
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
                className={"text-[60px] font-bold leading-20 text-menuC"}
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
        </div>
        </div>
        <div>
          <div className={"relative group"}>
            <Image
              className={"relative bg-no-repeat bg-cover bg-center "}
              imgSrc={shopBannerbg2}
              imgAlt={shopBannerbg2}
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
                className={"text-[70px] font-bold uppercase leading-10 text-menuC mb-6"}
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
          </div>
        </div>
        <div>
          <div className={"relative group"}>
            <Image
              className={"relative bg-no-repeat bg-cover bg-center"}
              imgSrc={shopBannerbg3}
              imgAlt={shopBannerbg3}
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
                className={"text-[65px] font-bold uppercase leading-10 text-menuC mb-6"}
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
          </div>
        </div>
      </Slider>
      
    </>
  )
}

export default ShopBanner
