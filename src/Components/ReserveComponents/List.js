import SpaceData from "../../spaceData.json";
import { Link} from "react-router-dom";
import { useSpaceContext } from '../../context/SpaceContext';
import { useEffect } from "react";
import "./link.css";
import Checkbox from "./Checkbox";
import ScrollToTopOnMount from "../../ScrollToTopOnMount";

const List = () => {



   const { allSpaces } = useSpaceContext();
   console.log("allSpace ", allSpaces);

   //const spaces = allSpaces.filter(space => space.city.toLowerCase().includes(searchKey)||(space.address.toLowerCase()).includes(searchKey));
   //console.log("spaces are ",spaces);

  return (
    // <div>
    //   {SpaceData && SpaceData
    //   .filter(space => city ? city === space.city : space)
    //   .map(space => {
    // return (
      <div className="checkBoxFlexBox">
        <ScrollToTopOnMount />
      <Checkbox />
    <div className="locations">
     <div className="view-list"> <h6>viewing germany space locations</h6></div>
     {allSpaces &&
        allSpaces.map((space) => {
          return (   
            <div className="card" key={space.id}>
                {" "}
                <img src={space.imgUrl} alt="img" className="img" />
              <div className="list-wrapper">
                <div className="title">
                <div className='checkBoxTitle'>{space.title}</div>
                  <div className="address-city-country">
                    <div className="address"> {space.address}</div>
                    <div className="city"> {space.city} </div>
                    <div className="country"> {space.counrty} </div>

                    <div><Link className="spacesLink" to={`/space/${space.id}`}>Explore space →</Link></div>

                    {/* <div><Link className="spacesLink" to={`../space/${space.id}`}>Explore space →</Link></div> */}

                    <div className="area-maxPeople-costperDay">
                    <div className="area"> {space.area}</div>
                    <div className="maxpeople"> {space.maxPeople} </div>
                    <div className="costperDay"> {space.costperDay}</div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
               )})}
            </div>
      </div>
  )}
export default List;
