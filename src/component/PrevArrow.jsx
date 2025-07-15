
import { FaArrowAltCircleLeft } from "react-icons/fa";

const PrevArrow = (props) => {
    const { onClick } = props;
  return (
    <div className={"absolute top-1/2 left-6 -translate-y-1/2 z-10"} onClick={onClick}> 
    <FaArrowAltCircleLeft className={"text-4xl text-menuC "}/>
    </div>
  )
}

export default PrevArrow
