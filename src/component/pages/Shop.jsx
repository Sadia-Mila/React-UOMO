import LatestNewsPart from "../layout/LatestNewsPart"
import LatestProduct from "../layout/LatestProduct"
import NewCollectionReleased from "../layout/NewCollectionReleased"
import Partners from "../layout/Partners"
import ShopBanner from "../layout/ShopBanner"
import ShopBestSellingProducts from "../layout/ShopBestSellingProducts"
import ShopbyCategory from "../layout/ShopbyCategory"
import ShopPromotion from "../layout/ShopPromotion"



const Shop = () => {
  return (
    <>
    <ShopBanner/>    
    <ShopPromotion/>
    <ShopBestSellingProducts/>
    <ShopbyCategory/>
    <NewCollectionReleased/>
    <LatestProduct/>
    <LatestNewsPart/>
    <Partners/>
      
    </>
  )
}

export default Shop
