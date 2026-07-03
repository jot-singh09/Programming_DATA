import { useState } from "react";
import { DatauseProvider } from "./DatauseProvider";

const DataProvider = (props) => {
  const [clicksearch, setclicksearch] = useState("hidden");
  const [opennav, setopennav] = useState("invisible");
  const [seth, setH] = useState("invisible");

  return (
    <div>
      <DatauseProvider.Provider
        value={{ clicksearch, setclicksearch, opennav,setopennav,seth,setH}}
      >
        {props.children}
      </DatauseProvider.Provider>
    </div>
  );
};

export default DataProvider;
