import { useState } from "react";
import { DatauseProvider } from "./DatauseProvider";
import pnreentikka from "../assets/Menupage/Images/PneerTikka.png";
import ButterChicken from "../assets/Menupage/Images/ButterChicken.png";
import Biryani from "../assets/Menupage/Images/Biryani.png";
import Chococake from "../assets/Menupage/Images/ChocoLavacake.png";
import MintMijito from "../assets/Menupage/Images/MintMajito.png";
const DataProvider = (props) => {
  const [clicksearch, setclicksearch] = useState("hidden");
  const [opennav, setopennav] = useState("invisible");
  const [seth, setH] = useState("invisible");
  const [showcartpop, setShowcartpop] = useState("invisible");

  const val=[
        {
      id: 1,
      img: pnreentikka,
      name: "Paneer Tikka",
      desc: "Cottage cheesecubes marinated in spices and grilled to perfection",
      type: ["Veg", "Mild"],
      isLiked: false, // Using boolean for better control
      price: "₹199",
      iscart: false,
      button:'Add to Cart',
    },
        {
      id: 2,
      img: ButterChicken,
      name: "Butter Chicken",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, molestiae vitae!", 
      type: ["Non-Veg", "Mild"],
      isLiked: false, // Using boolean for better control
      price: "₹299",
      iscart: false,
      button:'Add to Cart',
    },
        {
      id: 3,
      img: Biryani,
      name: "Biryani",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, molestiae vitae!", 
      type: ["Veg", "Mild"],
      isLiked: false, // Using boolean for better control
      price: "₹149",
      iscart: false,
      button:'Add to Cart',
    },
        {
      id: 4,
      img: Chococake,
      name: "Choco Lava Cake",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, molestiae vitae!", 
      type: ["Veg", "Chocklate"],
      isLiked: false, // Using boolean for better control
      price: "₹129",
      iscart: false,
      button:'Add to Cart',
    },
        {
      id: 5,
      img: MintMijito,
      name: "Mint Mijito",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, molestiae vitae!", 
      type: ["Organic", "Drink"],
      isLiked: false, // Using boolean for better control
      price: "₹89",
      iscart: false,
      button:'Add to Cart',
    },
  ]
  


  return (
    <div>
      <DatauseProvider.Provider
        value={{ clicksearch, setclicksearch, opennav,setopennav,seth,setH,val,showcartpop,setShowcartpop,}}
      >
        {props.children}
      </DatauseProvider.Provider>
    </div>
  );
};

export default DataProvider;
