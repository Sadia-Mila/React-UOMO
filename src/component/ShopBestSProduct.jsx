import Image from "./Image";
import productImg from "/src/assets/product1.png";
import { FaRegHeart } from "react-icons/fa";


const ShopBestSProduct = ({imgSrc, img2Src, productInfo, productName, productPrice, productPricLineThrough, discount, hoverText1, hoverText2, baseText, heartclassName, baseclassName, baseParentclassName, hoverTextclassName1, hoverTextclassName2}) => {
  return (
    <>
       <div className="">
        <div className="relative group">
          <div className="relative transition-all duration-400 ease-in-out">
            <Image
            className={" text-4xl text-menuC hover:opacity-0 opacity-100 transition-all duration-400 ease-in-out "}
            imgSrc={imgSrc}
            imgAlt={productImg}
          />
          <Image
            className={"text-4xl text-menuC opacity-0 hover:opacity-100 absolute top-0 left-0 transition-all duration-400 ease-in-out"}
            imgSrc={img2Src}
            imgAlt={productImg}
          />

          </div>
          <div className={`flex items-center p-4 justify-between w-full absolute top-[20px] ${baseParentclassName}`}>
            <button className={`py-2 px-6 bg-white text-black ${baseclassName}`}>{baseText}</button>
            <div className="w-10 h-10 bg-white rounded-full relative">
            <FaRegHeart className={` ${heartclassName} text-lg text-menuC absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`} />

            </div>

          </div>
          
          <div className={"flex text-sm items-center gap-x-5 py-4 px-4 bg-black text-white text-center absolute left-12 opacity-0 translate-y-5 group-hover:-translate-y-20 group-hover:opacity-100 transition-all duration-500 ease-in-out "}>
            <div className= {`${hoverTextclassName1}`}>{hoverText1} </div>
            <div className= {`${hoverTextclassName2}`}>{hoverText2} </div>

          </div>
          
          <div className="mt-4">
            <div className="">
              <h4 className={`text-sm text-[#B9A16B] `}>{productInfo}</h4>
            
              
            </div>
            <h6 className={"text-base text-menuC my-1"}>{productName}</h6>
            <div className="flex gap-x-2">
            <p className={`text-base text-menuC`}>{productPrice}</p>
            <p className={`text-base text-menuC line-through`}>{productPricLineThrough}</p>
            <p className={"text-base text-[#D6001C]"}>{discount}</p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default ShopBestSProduct
