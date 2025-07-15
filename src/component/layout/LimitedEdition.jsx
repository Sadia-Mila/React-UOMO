import Container from "../Container";
import Heading from "../Heading";
import limitedEdition1 from "/src/assets/limitedProduct1.png";
import limitedEdition2 from "/src/assets/limitedProduct2.png";
import limitedEdition3 from "/src/assets/limitedProduct3.png";
import limitedEdition4 from "/src/assets/limitedProduct4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LimitedEdittionProduct from '../LimitedEdittionProduct';

const LimitedEdition = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 1000,
    cssEase: "linear"
  };

  return (
    <>
      <div className="py-12.4 ">
        <Container>
          <div className="text-center">
            <div className="flex justify-center gap-x-2.5">
              <Heading
                className={"text-[35px] text-menuC"}
                text={"LIMITED"}
                as={"h3"}
              />
              <Heading
                className={"text-[35px] text-menuC font-bold"}
                text={"EDITION"}
                as={"h3"}
              />
            </div>
          </div>
          <div className="py-10  ">
            <Slider {...settings}>
              <div className="px-4">
                <LimitedEdittionProduct
                  imgSrc={limitedEdition1}
                  productInfo={"Dresses"}
                  productName={"Hub Accent Mirror"}
                  productPrice={"$29"}
                  hoverText={"ADD TO CART"}
                />
              </div>
              <div className="px-4">
                <LimitedEdittionProduct
                  imgSrc={limitedEdition2}
                  productInfo={"Dresses"}
                  productName={"Hosking Blue Area Rug"}
                  productPrice={"$62"}
                  hoverText={"ADD TO CART"}
                />
              </div>
              <div className="px-4">
                <LimitedEdittionProduct
                  imgSrc={limitedEdition3}
                  productInfo={"Dresses"}
                  productName={"Hanneman Pouf"}
                  productPrice={"$17"} className={'line-through'}
                  discount={'$10'}
                  hoverText={"ADD TO CART"}
                />
              </div>
              <div className="px-4">
                <LimitedEdittionProduct
                  imgSrc={limitedEdition4}
                  productInfo={"Dresses"}
                  productName={"Cushion Futon Slipcover"}
                  productPrice={"$129"} className={'line-through'}
                  discount={"$99"}
                  hoverText={"ADD TO CART"}
                />
              </div>
              <div className="px-4">
                <LimitedEdittionProduct
                  imgSrc={limitedEdition2}
                  productInfo={"Dresses"}
                  productName={"Hosking Blue Area Rug"}
                  productPrice={"$62"}
                  hoverText={"ADD TO CART"}
                />
              </div>
            </Slider>
          </div>
        </Container>
      </div>
    </>
  );
};

export default LimitedEdition;
