
import Image from "./Image";
import productImg from "/src/assets/product1.png";
import { FaRegHeart } from "react-icons/fa";

const Product = ({imgSrc, img2Src, productInfo, productName, productPrice, discount, hoverText, className}) => {
  return (
    <>
      <div className="">
        <div className="relative group">
          <div className="relative transition-all duration-300 ease-in-out">
            <Image
            className={"w-[330px] h-[400px] text-4xl text-menuC hover:opacity-0 opacity-100 "}
            imgSrc={imgSrc}
            imgAlt={productImg}
          />
          <Image
            className={"w-[330px] h-[400px] text-4xl text-menuC opacity-0 hover:opacity-100 absolute top-0 left-0"}
            imgSrc={img2Src}
            imgAlt={productImg}
          />

          </div>
          
          <div className= {"p-7.5 bg-white text-black text-center absolute bottom-30 left-15 w-[200px] opacity-0 translate-y-10 group-hover:-translate-y-8 group-hover:opacity-100 transition-all duration-400 ease-in-out"}>{hoverText}</div>
          <div className="mt-4">
            <div className="flex items-center justify-between ">
              <h4 className={`text-sm text-[#767676]`}>{productInfo}</h4>
            
              <FaRegHeart className={"text-sm text-[#767676]"} />
            </div>
            <h6 className={"text-base text-menuC my-1"}>{productName}</h6>
            <div className="flex gap-x-2">
            <p className={`text-base text-menuC ${className}`}>{productPrice}</p>
           
            <p className={"text-base text-[#D6001C]"}>{discount}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
