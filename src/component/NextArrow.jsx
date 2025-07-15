import { FaArrowAltCircleRight } from "react-icons/fa";

const NextArrow = (props) => {
    const { onClick } = props;
  return (
    <div
     className={"absolute top-1/2 right-6 -translate-y-1/2 z-10"} onClick={onClick}
    ><FaArrowAltCircleRight className={"text-4xl text-menuC "}/>
    </div>
  )
}

export default NextArrow
