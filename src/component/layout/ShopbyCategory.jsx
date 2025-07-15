import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import ShopbyCatagoryProduct from '../ShopbyCatagoryProduct'
import categery1 from '/src/assets/category1.png'
import categery2 from '/src/assets/category2.png'
import categery3 from '/src/assets/category3.png'
import categery4 from '/src/assets/category4.png'
import categery5 from '/src/assets/category5.png'
import Flex from '../Flex'

const ShopbyCategory = () => {
  return (
    <>
    <div className="py-8 ">
        <Container>
          <div className="text-center mb-8">
            <div className="flex justify-center gap-x-2.5">
              <Heading
                className={"text-[35px] text-menuC uppercase"}
                text={"Shop by"}
                as={"h3"}
              />
              <Heading
                className={"text-[35px] text-menuC font-bold uppercase"}
                text={" Category"}
                as={"h3"}
              />
            </div>
          </div>
          <Flex className={"gap-x-6"}>
            <ShopbyCatagoryProduct categoryImg={categery1} categoryProductName={"Shoes"} categoryQuantity={"20 Products"}/>
            <ShopbyCatagoryProduct categoryImg={categery2} categoryProductName={"Winter Wear"} categoryQuantity={"5 Products"}/>
            <ShopbyCatagoryProduct categoryImg={categery3} categoryProductName={"Tops"} categoryQuantity={"26 Products"}/>
            <ShopbyCatagoryProduct categoryImg={categery4} categoryProductName={"Belts"} categoryQuantity={"33 Products"}/>
            <ShopbyCatagoryProduct categoryImg={categery5} categoryProductName={"Bags"} categoryQuantity={"37 Products"}/>

          </Flex>

          
          
        </Container>
        
    </div>
      
    </>
  )
}

export default ShopbyCategory
