import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Flex from "../Flex";
import ShopBestSProduct from "../ShopBestSProduct";
import latestProduct1 from "/src/assets/latestProduct1.png";
import latestProduct1Hover from "/src/assets/latestProduct1Hover.png";
import latestProduct2 from "/src/assets/latestProduct2.png";
import latestProduct2Hover from "/src/assets/latestProduct2Hover.png";
import latestProduct3 from "/src/assets/latestProduct3.png";
import latestProduct3Hover from "/src/assets/latestProduct3Hover.png";
import latestProduct4 from "/src/assets/latestProduct4.png";
import latestProduct4Hover from "/src/assets/latestProduct4Hover.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LatestProduct = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear", 
  };
  return (
    <>
      <div className="py-12">
        <Container>
          <Heading
            className={
              "uppercase text-[35px] text-menuC font-bold text-center mb-8"
            }
            text={"Latest PRODUCTS"}
            as={"h3"}
          />
            <div className="-mx-4">
              <Slider {...settings}>
              <div className="px-4">
                <ShopBestSProduct
                  imgSrc={latestProduct1}
                  img2Src={latestProduct1Hover}
                  baseText={"67%"}
                  productInfo={"JEAN"}
                  productName={"Cropped Faux Leather Jacket"}
                  hoverText1={"ADD TO CART"}
                  hoverText2={"QUICK VIEW"}
                  productPricLineThrough={"$80"}
                  discount={"$75"}
                />
              </div>
              <div className="px-4">
                <ShopBestSProduct
                  imgSrc={latestProduct2}
                  img2Src={latestProduct2Hover}
                  baseText={"New"}
                  productInfo={"JEAN"}
                  productName={"Cropped Faux Leather Jacket"}
                  hoverText1={"ADD TO CART"}
                  hoverText2={"QUICK VIEW"}
                  productPricLineThrough={"$80"}
                  discount={"$75"}
                />
              </div>
              <div className="px-4">
                <ShopBestSProduct
                  imgSrc={latestProduct3}
                  img2Src={latestProduct3Hover}
                  baseclassName={"hidden"}
                  baseParentclassName={"justify-end"}
                  productInfo={"JEAN"}
                  productName={"Cropped Faux Leather Jacket"}
                  hoverText1={"ADD TO CART"}
                  hoverText2={"QUICK VIEW"}
                  productPricLineThrough={"$80"}
                  discount={"$75"}
                />
              </div>
              <div className="px-4">
                <ShopBestSProduct
                  imgSrc={latestProduct4}
                  img2Src={latestProduct4Hover}
                  baseclassName={"hidden"}
                  baseParentclassName={"justify-end"}
                  productInfo={"JEAN"}
                  productName={"Cropped Faux Leather Jacket"}
                  hoverText1={"ADD TO CART"}
                  hoverText2={"QUICK VIEW"}
                  productPricLineThrough={"$80"}
                  discount={"$75"}
                />
              </div>
              <div className="px-4">
                <ShopBestSProduct
                  imgSrc={latestProduct2}
                  img2Src={latestProduct2Hover}
                  baseText={"8%"}
                  productInfo={"JEAN"}
                  productName={"Cropped Faux Leather Jacket"}
                  hoverText1={"ADD TO CART"}
                  hoverText2={"QUICK VIEW"}
                  productPricLineThrough={"$120"}
                  discount={"$105"}
                />
              </div>
            </Slider>

            </div>
            
        </Container>
      </div>
    </>
  );
};

export default LatestProduct;
