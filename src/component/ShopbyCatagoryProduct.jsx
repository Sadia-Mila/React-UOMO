import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import Image from "./Image";
import category1 from "/src/assets/category1.png";
import Flex from "./Flex";

const ShopbyCatagoryProduct = ({categoryImg, categoryProductName, categoryQuantity }) => {
  return (
    <>
      
          <div className="w-[20%]">
            <Image imgSrc={categoryImg} imgAlt={category1} />
            <Flex className={"justify-between p-4"}>
              <Heading
                className={"uppercase text-base text-menuC text-center "}
                text={categoryProductName}
                as={"h4"}
              />
              <Heading
                className={"text-sm text-menuC text-center mt-1"}
                text={categoryQuantity}
                as={"p"}
              />
            </Flex>
          </div>
       
  
    </>
  );
};

export default ShopbyCatagoryProduct;
