import Buttons from "./left/Buttons";
import Heading from "./left/Heading";
import Para from "./left/Para";
const Left = () => {
  return <div className="px-35 py-20  max-xl:px-10 ">
    <Heading/>
    <Para/>
    <Buttons/>
  </div>;
};

export default Left;
