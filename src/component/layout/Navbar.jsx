import { Link } from "react-router";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "/src/assets/logo.png";
import { FaSearch, FaRegUser, FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag, HiMiniBars3CenterLeft } from "react-icons/hi2";

const Navbar = () => {
  return (
    <>
      <div className="py-5 bg-white">
        <Container>
          <Flex className={"justify-between"}>
            <div className="">
              <Link to={"/"}>
                <Image calssName={"w-[111px]"} imgSrc={logo} imgAlt={logo} />
              </Link>
            </div>
            <div>
              <ul className="flex items-center group gap-x-6">
                <Link to={"/"}>
                   <li
                    className={
                      "text-medium text-sm text-menuC relative after:absolute after:content-[''] after:w-full after:h-[2px] after:bg-[#C32929] after:-bottom-3 after:left-0 after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-300 "
                    }
                  >
                    HOME
                    <ul className={"absolute -bottom-26 left-0 w-20 h-22 bg-[#767676] z-30 text-center p-2 opacity-0 group-hover:opacity-100 transition-all duration-300"}>
                      <li className={"text-sm text-menuC mb-1 hover:text-white transiton-all duration-300 "}>HOME 1</li>
                      <li className={"text-sm text-menuC mb-1 hover:text-white transiton-all duration-300"}>HOME 2</li>
                      <li className={"text-sm text-menuC mb-1 hover:text-white transiton-all duration-300"}>HOME 3</li>
                    </ul>
                  </li> 
                    
                </Link>
                <Link to={"/shop"}>
                  <li
                    className={
                      "text-medium text-sm text-menuC relative after:absolute after:content-[''] after:w-full after:h-[2px] after:bg-[#C32929] after:-bottom-3 after:left-0 after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-300"
                    }
                  >
                    SHOP
                  </li>
                </Link>
                <Link to={"/collection"}>
                  <li
                    className={
                      "text-medium text-sm text-menuC relative after:absolute after:content-[''] after:w-full after:h-[2px] after:bg-[#C32929] after:-bottom-3 after:left-0 after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-300"
                    }
                  >
                    COLLECTION
                  </li>
                </Link>
                <Link to={"/journal"}>
                  <li
                    className={
                      "text-medium text-sm text-menuC relative after:absolute after:content-[''] after:w-full after:h-[2px] after:bg-[#C32929] after:-bottom-3 after:left-0 after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-300"
                    }
                  >
                    JOURNAL
                  </li>
                </Link>
                <Link to={"/lookbook"}>
                  <li
                    className={
                      "text-medium text-sm text-menuC relative after:absolute after:content-[''] after:w-full after:h-[2px] after:bg-[#C32929] after:-bottom-3 after:left-0 after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-300"
                    }
                  >
                    LOOKBOOK
                  </li>
                </Link>
                <Link to={"/pages"}>
                  <li
                    className={
                      "text-medium text-sm text-menuC relative after:absolute after:content-[''] after:w-full after:h-[2px] after:bg-[#C32929] after:-bottom-3 after:left-0 after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-300"
                    }
                  >
                    PAGES
                  </li>
                </Link>
              </ul>
            </div>
            <div className="flex gap-x-3 text-menuC text-base">
              <FaSearch />
              <FaRegUser />
              <FaRegHeart />
              <HiOutlineShoppingBag />
              <HiMiniBars3CenterLeft />
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
