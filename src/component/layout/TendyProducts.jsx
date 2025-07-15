import { Link } from "react-router";
import Container from "../Container";
import Heading from "../Heading";
import Product from "../Product";
import product1 from "/src/assets/product1.png";
import product1Hover from '/src/assets/product1-1.png'
import product2 from "/src/assets/product2.png";
import product2Hover from '/src/assets/product2Hover.png'
import product3 from "/src/assets/product3.png";
import product3Hover from '/src/assets/product3Hover.png'
import product4 from "/src/assets/product4.png";
import product4Hover from '/src/assets/product4Hover.png'
import product5 from "/src/assets/product5.png";
import product5Hover from '/src/assets/product5Hover.png'
import product6 from "/src/assets/product6.png";
import product6Hover from '/src/assets/product6Hover.png'
import product7 from "/src/assets/product7.png";
import product7Hover from '/src/assets/product7Hover.png'
import product8 from "/src/assets/product8.png";
import product8Hover from '/src/assets/product8Hover.png'

const TendyProducts = () => {
  
  return (
    <>
      <div className={"py-10"}>
        <Container>
          <div className="text-center">
            <div className="flex justify-center gap-x-2.5">
              <Heading
                className={"text-[35px] text-menuC"}
                text={"OUR TRENDY"}
                as={"h3"}
              />
              <Heading
                className={"text-[35px] text-menuC font-bold"}
                text={"PRODUCTS"}
                as={"h3"}
              />
            </div>

            <ul
              className={"flex items-center gap-x-8 justify-center mt-8 mb-11 "}
            >
              <li
                className={
                  "text-medium text-base text-[#767676] hover:text-menuC relative after:absolute after:content-[''] after:w-1/2 after:h-[2px] after:bg-[#C32929] after:-bottom-1 after:left-0 after:opacity-0 hover:after:opacity-100 hover:after:w-full after:transition-all after:duration-300 after:ease-in-out"
                }
              >
                ALL
              </li>
              <li
                className={
                  "text-medium text-base text-[#767676] hover:text-menuC relative after:absolute after:content-[''] after:w-1/2 after:h-[2px] after:bg-[#C32929] after:-bottom-1 after:left-0 after:opacity-0 hover:after:opacity-100 hover:after:w-full after:transition-all after:duration-300 after:ease-in-out"
                }
              >
                NEWARRIVALS
              </li>
              <li
                className={
                  "text-medium text-base text-[#767676] hover:text-menuC relative after:absolute after:content-[''] after:w-1/2 after:h-[2px] after:bg-[#C32929] after:-bottom-1 after:left-0 after:opacity-0 hover:after:opacity-100 hover:after:w-full after:transition-all after:duration-300 after:ease-in-out"
                }
              >
                BEST SELLER
              </li>
              <li
                className={
                  "text-medium text-base text-[#767676] group-hover:text-menuC relative after:absolute after:content-[''] after:w-1/2 after:h-[2px] after:bg-[#C32929] after:-bottom-1 after:left-0 after:opacity-0 hover:after:opacity-100 hover:after:w-full after:transition-all afte:duration-300 after:ease-in-out"
                }
              >
                TOP RATING
              </li>
            </ul>
          </div>
          <div className="flex gap-x-5">
            <Product
              imgSrc={product1}
              img2Src={product1Hover}
              productInfo={"Dresses"}
              productName={"Cropped Faux Leather Jacket"}
              productPrice={"$29"}
              hoverText={"ADD TO CART"}
            />
            <Product
              imgSrc={product2}
              img2Src={product2Hover}
              productInfo={"Dresses"}
              productName={"Calvin Shorts"}
              productPrice={"$170"}
              discount={"$150"} className={"line-through"}
              hoverText={"ADD TO CART"}
            />
            <Product
              imgSrc={product3}
              img2Src={product3Hover}
              productInfo={"Dresses"}
              productName={"Kirby T-Shirt"}
              productPrice={"$17"}
              hoverText={"ADD TO CART"}
            />
            <Product
              imgSrc={product4}
              img2Src={product4Hover}
              productInfo={"Dresses"}
              productName={"Cableknit Shawl"}
              productPrice={"$129"} className={"line-through"}
              discount={"$99"}
              hoverText={"ADD TO CART"}
            />
          </div>
          <div className="flex gap-x-5 mt-5">
            <Product
              imgSrc={product5}
              img2Src={product5Hover}
              productInfo={"Dresses"}
              productName={"Colorful Jacket"}
              productPrice={"$89"}
              discount={"$79"} className={"line-through"}
              hoverText={"ADD TO CART"}
            />
            <Product
              imgSrc={product6}
              img2Src={product6Hover}
              productInfo={"Dresses"}
              productName={"Shirt In Botanical Cheetah Print"}
              productPrice={"$62"}
              hoverText={"ADD TO CART"}
            />
            <Product
              imgSrc={product7}
              img2Src={product7Hover}
              productInfo={"Dresses"}
              productName={"Cotton Jersey T-Shirt"}
              productPrice={"$17"}
              hoverText={"ADD TO CART"}
            />
            <Product
              imgSrc={product8}
              img2Src={product8Hover}
              productInfo={"Dresses"}
              productName={"Zessi Dresses"}
              productPrice={"$129"}
              discount={"$99"} className={"line-through"}
              hoverText={"ADD TO CART"}
            />
          </div>

          <div className="flex justify-center items-center">
            <Link to={"/shop"}>
              <button
                className={
                   " mt-18 mb-3 font-bold text-lg text-menuC hover:text-[#C32929] relative after:absolute after:content-[''] after:w-1/2 after:h-[2px] after:bg-[#C32929] after:-bottom-1 after:left-0 after:opacity-0 hover:after:opacity-100 hover:after:w-full after:transition-all after:duration-300 after:ease-in-out"
                }
              >
                DISCOVER MORE
              </button>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default TendyProducts;
