
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Image from '../Image'
import logo from '/src/assets/logo.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest  } from "react-icons/fa";
import payment from '/src/assets/payment.png'
import { LiaAngleUpSolid } from "react-icons/lia";

const Footer = () => {
  return (
    <>
  <div className="py-20 bg-[#E4E4E4]">
      <Container>
        <Flex>
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr_2fr]">
          <div className="">
            <Image imgSrc={logo} imgAlt={logo}/>
            <Heading className={"mt-11 text-sm text-menuC leading-6 pr-16"} text={"1418 River Drive, Suite 35 Cottonhall, CA 9622 United States"} as={"p"}/>
            <Heading className={"mt-7 text-sm text-menuC leading-8"}text={"sale@uomo.com"} as={"p"}/>
            <Heading className={"text-sm text-menuC mb-12"}text={"+1 246-345-0695"} as={"p"}/>
            <div className="flex text-menuC items-center gap-x-3 text-lg">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram/>
              <FaYoutube />
              <FaPinterest />
            </div>
          </div>
          <div className="">
            <Heading className={"font-medium text-lg text-menuC mb-9"} text={"COMPANY"} as={"h5"}/>
            <ul>
              <li className={"text-sm text-menuC leading-10 relative after:absolute after:content-[''] after:w-15 after:h-0.5 after:bg-black after:left-0 after:bottom-2 after:opacity-0 hover:after:opacity-100 transition-all duration-300"}>About Us</li>
              <li className={"text-sm text-menuC leading-10 relative after:absolute after:content-[''] after:w-15 after:h-0.5 after:bg-black after:left-0 after:bottom-2 after:opacity-0 hover:after:opacity-100 transition-all duration-300"}>Careers</li>
              <li className={"text-sm text-menuC leading-10 relative after:absolute after:content-[''] after:w-15 after:h-0.5 after:bg-black after:left-0 after:bottom-2 after:opacity-0 hover:after:opacity-100 transition-all duration-300"}>Affiliates</li>
              <li className={"text-sm text-menuC leading-10 relative after:absolute after:content-[''] after:w-8 after:h-0.5 after:bg-black after:left-0 after:bottom-2 after:opacity-0 hover:after:opacity-100 transition-all duration-300"}>Blog</li>
              <li className={"text-sm text-menuC leading-10 relative after:absolute after:content-[''] after:w-15 after:h-0.5 after:bg-black after:left-0 after:bottom-2 after:opacity-0 hover:after:opacity-100 transition-all duration-300"}>Contact Us</li>
            </ul>
          </div>
          <div className="">
            <Heading className={"font-medium text-lg text-menuC mb-9"} text={"SHOP"} as={"h5"}/>
            <ul>
              <li className={"text-sm text-menuC leading-10 relative after:absolute after:content-[''] after:w-15 after:h-0.5 after:bg-black after:left-0 after:bottom-2 after:opacity-0 hover:after:opacity-100 transition-all duration-300"}>New Arrivals</li>
              <li className={"text-sm text-menuC leading-10 relative after:absolute after:content-[''] after:w-15 after:h-0.5 after:bg-black after:left-0 after:bottom-2 after:opacity-0 hover:after:opacity-100 transition-all duration-300"}>Accessories</li>
              <li className={"text-sm text-menuC leading-10 relative after:absolute after:content-[''] after:w-15 after:h-0.5 after:bg-black after:left-0 after:bottom-2 after:opacity-0 hover:after:opacity-100 transition-all duration-300"}>Men</li>
              <li className={"text-sm text-menuC leading-10 relative after:absolute after:content-[''] after:w-8 after:h-0.5 after:bg-black after:left-0 after:bottom-2 after:opacity-0 hover:after:opacity-100 transition-all duration-300"}>Women</li>
              <li className={"text-sm text-menuC leading-10 relative after:absolute after:content-[''] after:w-15 after:h-0.5 after:bg-black after:left-0 after:bottom-2 after:opacity-0 hover:after:opacity-100 transition-all duration-300"}>Shop All</li>
            </ul>
          </div>
          <div className="">
            <Heading className={"font-medium text-lg text-menuC mb-9"} text={"HELP"} as={"h5"}/>
            <ul>
              <li className={"text-sm text-menuC leading-10"}>Customer Service</li>
              <li className={"text-sm text-menuC leading-10"}>My Account</li>
              <li className={"text-sm text-menuC leading-10"}>Find a Store</li>
              <li className={"text-sm text-menuC leading-10"}>Legal & Privacy</li>
              <li className={"text-sm text-menuC leading-10 "}>Gift Card</li>
            </ul>
          </div>
         
          <div className="">
            <Heading className={"font-medium text-lg text-menuC mb-9"} text={"SUBSCRIBE"} as={"h5"}/>
            <Heading className={"text-SM text-menuC leading-6 mb-7"} text={"Be the first to get the latest news about trends, promotions, and much more!"} as={"P"}/>
            <div className="relative">
            <input className={"bg-white py-3 w-[330px] px-3"} type="text" placeholder={"Your email address"} />
            <Heading className={"text-medium text-sm text-menuC absolute top-1/2 right-18 -translate-y-1/2"} text={'JOIN'} as={'h6'}/>
            </div>
            <Heading className={"text-SM text-menuC leading-6 mt-5"} text={"Secure payments"} as={"P"}/>
            <Image imgSrc={payment} imgAlt={payment}/>
          </div>
        </div>
         </Flex>
        <hr className={"h-0.5 w-full bg-[#CFCDCD] border-none my-10"}/>
        <Flex className={"justify-between"}>
          <div >
          <Heading className={"text-menuC"} text={"©2020 Uomo"} as={"p"}/>
          </div>
          <div className={"flex items-center"}>
            <div className="flex items-center">
              <Heading className={"text-sm text-[#767676] leading-6 mr-3"} text={"Language"} as={"p"}/>
              <Heading className={"text-sm text-menuC leading-6 mr-2"} text={"United Kingdom | English"} as={"p"}/>
              <LiaAngleUpSolid className={"text-sm text-menuC mr-8"}/>

            </div>
            <div className="flex items-center">
              <Heading className={"text-sm text-[#767676] leading-6 mr-3"} text={"Currency"} as={"p"}/>
              <Heading className={"text-sm text-menuC leading-6 mr-2"} text={"$ USD"} as={"p"}/>
              <LiaAngleUpSolid className={"text-sm text-menuC mr-8"}/>

            </div>
             
           

            

          </div>

        </Flex>

      </Container>

    

    </div>
      
    </>
  )
}

export default Footer
