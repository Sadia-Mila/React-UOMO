import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import shopBestSell1 from "/src/assets/shopBestSell1.png";
import shopBestSellHover from "/src/assets/shopBestSell1Hover.png";
import shopBestSell2 from "/src/assets/shopBestSell2.png";
import shopBestSell2Hover from "/src/assets/shopBestSell2Hover.png";
import shopBestSell3 from "/src/assets/shopBestSell3.png";
import shopBestSell3Hover from "/src/assets/shopBestSell3Hover.png";
import shopBestSell4 from "/src/assets/shopBestSell4.png";
import shopBestSell4Hover from "/src/assets/shopBestSell4Hover.png";
import Flex from "../Flex";
import ShopBestSProduct from "../ShopBestSProduct";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";


const ShopBestSellingProducts = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
  };

  return (
    <>
      <div className="py-12">
        <Container>
          <div className="text-center">
            <div className="flex justify-center gap-x-2.5">
              <Heading
                className={"text-[35px] text-menuC"}
                text={"BEST SELLING"}
                as={"h3"}
              />
              <Heading
                className={"text-[35px] text-menuC font-bold"}
                text={"PRODUCTS"}
                as={"h3"}
              />
            </div>

            <ul
              className={"flex items-center gap-x-8 justify-center mt-4 mb-4 "}
            >
              <li
                className={
                  "text-medium text-base text-[#767676] hover:text-menuC relative after:absolute after:content-[''] after:w-1/2 after:h-[2px] after:bg-[#C32929] after:-bottom-1 after:left-0 after:opacity-0 hover:after:opacity-100 hover:after:w-full after:transition-all after:duration-300 after:ease-in-out"
                }
              >
                TOPS
              </li>
              <li
                className={
                  "text-medium text-base text-[#767676] hover:text-menuC relative after:absolute after:content-[''] after:w-1/2 after:h-[2px] after:bg-[#C32929] after:-bottom-1 after:left-0 after:opacity-0 hover:after:opacity-100 hover:after:w-full after:transition-all after:duration-300 after:ease-in-out"
                }
              >
                JEANS
              </li>
              <li
                className={
                  "text-medium text-base text-[#767676] hover:text-menuC relative after:absolute after:content-[''] after:w-1/2 after:h-[2px] after:bg-[#C32929] after:-bottom-1 after:left-0 after:opacity-0 hover:after:opacity-100 hover:after:w-full after:transition-all after:duration-300 after:ease-in-out"
                }
              >
                BAGS
              </li>
              <li
                className={
                  "text-medium text-base text-[#767676] group-hover:text-menuC relative after:absolute after:content-[''] after:w-1/2 after:h-[2px] after:bg-[#C32929] after:-bottom-1 after:left-0 after:opacity-0 hover:after:opacity-100 hover:after:w-full after:transition-all afte:duration-300 after:ease-in-out"
                }
              >
                ACCESSORIES
              </li>
            </ul>
          </div>
        </Container>
      </div>
      <div className="pb-12">
        <Container>
          <div className={"-mx-3"}>
          <Slider {...settings}>
          
              <div className={"px-3"}>
                <ShopBestSProduct
                  imgSrc={shopBestSell1}
                  img2Src={shopBestSellHover}
                  productInfo={"JEANS"}
                  productName={"Cropped Faux Leather Jacket"}
                  productPricLineThrough={"$99"}
                  discount={"$86"}
                  hoverText1={"ADD TO CART"}
                  hoverText2={"QUICK VIEW"}
                  baseclassName={"hidden"}
                  baseParentclassName={"justify-end"}
                />
              </div>
         

          
              <div className={"px-3"}>
                <ShopBestSProduct
                  imgSrc={shopBestSell2}
                  img2Src={shopBestSell2Hover}
                  productInfo={"JEANS"}
                  productName={"Cropped Faux Leather Jacket"}
                  productPrice={"$95"}
                  hoverText1={"ADD TO CART"}
                  hoverText2={"QUICK VIEW"}
                  baseText={"New"}
                  className={"bg-[#C32929]"}
                />
              </div>
         
         
              <div className={"px-3"}>
                <ShopBestSProduct
                  imgSrc={shopBestSell3}
                  img2Src={shopBestSell3Hover}
                  productInfo={"JEANS"}
                  productName={"Cropped Faux Leather Jacket"}
                  productPrice={"$105"}
                  hoverText1={"ADD TO CART"}
                  hoverText2={"QUICK VIEW"}
                  baseText={"10%"}
                />
              </div>
         
         
              <div className={"px-3"}>
                <ShopBestSProduct
                  imgSrc={shopBestSell4}
                  img2Src={shopBestSell4Hover}
                  productInfo={"JEANS"}
                  productName={"Cropped Faux Leather Jacket"}
                  productPricLineThrough={"$220"}
                  discount={"$190"}
                  hoverText1={"ADD TO CART"}
                  hoverText2={"QUICK VIEW"}
                  baseText={"5%"}
                />
              </div>
        
              <div className={"px-3"}>
                <ShopBestSProduct
                  imgSrc={shopBestSell2}
                  img2Src={shopBestSell2Hover}
                  productInfo={"JEANS"}
                  productName={"Cropped Faux Leather Jacket"}
                  productPrice={"$95"}
                  hoverText1={"ADD TO CART"}
                  hoverText2={"QUICK VIEW"}
                  baseText={"New"}
                  className={"bg-[#C32929]"}
                />
              </div>
          
          </Slider>
        </div>

        </Container>
        
      </div>
    </>
  );
};

export default ShopBestSellingProducts;
