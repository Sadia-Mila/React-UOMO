import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import LatestNewsComponent from "../LatestNewsComponent";
import news1 from '/src/assets/news1.png'
import news2 from '/src/assets/news2.png'
import news3 from '/src/assets/news3.png'

const LatestNewsPart = () => {
  return (
    <>
      <div className="py-14">
        <Container>
          <Heading
            className={
              "text-[35px] uppercase text-menuC font-bold text-center mb-8"
            }
            text={"Latest News"}
            as={"h3"}
          />
            <Flex className={"gap-x-6"}>
                <LatestNewsComponent newsSrc={news1} newsAlt={news1} newsTitle="By Admin" newsDate="July 14, 2025" mainNews="What Freud Can Teach Us About The Furniture"/>
                <LatestNewsComponent newsSrc={news2} newsAlt={news2} newsTitle="By Admin" newsDate="July 14, 2025" mainNews="What Freud Can Teach Us About The Furniture"/>
                <LatestNewsComponent newsSrc={news3} newsAlt={news3} newsTitle="By Admin" newsDate="July 14, 2025" mainNews="What Freud Can Teach Us About The Furniture"/>

            </Flex>
            

        
          
        </Container>
      </div>
    </>
  );
};

export default LatestNewsPart;
