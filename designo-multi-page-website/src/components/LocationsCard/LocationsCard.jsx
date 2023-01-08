import React from "react";
import Map from "../Map/Map";
import "./_LocationsCard.scss";
const locations = {
  canada: {
    title: "Canada",
    text1: {
      p1: "Designo Central Office",
      p2: "3886 Wellington Street",
      p3: "Toronto, Ontario M9C 3J5",
    },
    text2: {
      p1: "Contact",
      p2: "P : +1 253-863-8967",
      p3: "M : contact@designo.co",
    },
  },
  australia: {
    title: "Australia",
    text1: {
      p1: "Designo AU Office",
      p2: "19 Balonne Street",
      p3: "New South Wales 2443",
    },
    text2: {
      p1: "Contact ",
      p2: "P : (02) 6720 9092",
      p3: "M : contact@designo.au",
    },
  },
  uk: {
    title: "United Kingdom",
    text1: {
      p1: "Designo UK Office",
      p2: "13  Colorado Way",
      p3: "Rhyd-y-fro SA8 9GA",
    },
    text2: {
      p1: "Contact ",
      p2: "P : 078 3115 1400",
      p3: "M : contact@designo.uk",
    },
  },
};
function LocationsCard({ reverse, location }) {
  //   console.log(locations[location]);

  return (
    <div className={`locationsCard ${reverse ? "reverse" : ""} `}>
      <div className="locationsCard_left">
        <div className="locationsCard_left_top">
          {locations[location].title}
        </div>
        <div className="locationsCard_left_bottom">
          <div className="locationsCard_left_bottom_left">
            <p className="bold">{locations[location].text1.p1}</p>
            <p>{locations[location].text1.p2}</p>
            <p>{locations[location].text1.p3}</p>
          </div>
          <div className="locationsCard_left_bottom_right">
            <p className="bold">{locations[location].text2.p1}</p>
            <p>{locations[location].text2.p2}</p>
            <p>{locations[location].text2.p3}</p>
          </div>
        </div>
      </div>
      <div className="locationsCard_right">
        <Map location={location}></Map>
      </div>
    </div>
  );
}

export default LocationsCard;
