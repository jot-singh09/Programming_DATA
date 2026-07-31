import FeatureMid from "./FeatureMid";
import TrendingcolledctionMid from "./TrendingcolledctionMid";
// import BrowseCategories from "./BrowseCategories";
import ActivityAndCreators from "./ActivityAndCreators";

const Middle = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-[#E7ECFB] md:h-20  ">
      <FeatureMid />
      </div>
        
      <TrendingcolledctionMid />
      {/* <BrowseCategories /> */}
      <ActivityAndCreators />
    </div>
  );
};

export default Middle;