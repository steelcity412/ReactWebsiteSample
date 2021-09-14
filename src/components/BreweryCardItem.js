import React from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

import "./Map.css";

function CardItem(props) {
  const location = {
    center: {
      lat: 40.4406,
      lng: -79.9959,
    },
  };
  const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text"> {text} </p>{" "}
    </div>
  );

  return (
    <>
      <li className="cards__item">
        <div className="cards__item__link">
          <div className="cards__item__info">
            <h4 className="cards__item__text"> {props.name} </h4>{" "}
          </div>
          <div className="cards__item__info__brewerytype">
            <h5 className="cards__item__text"> Type: {props.label} </h5>{" "}
          </div>{" "}
          <div className="cards__item__info__address">
            <h5 className="cards__item__text"> {props.address} </h5>{" "}
          </div>{" "}
          <div className="cards__item__info__website">
            {" "}
            {props.website != null ? (
              <h5 className="cards__item__text">
                {" "}
                Website :{" "}
                <a href={props.website} className="cards__item__text">
                  {" "}
                  {props.website}{" "}
                </a>
              </h5>
            ) : (
              <h5 className="cards__item__text"> Website: N / a </h5>
            )}{" "}
          </div>
          <div
            className="cards__item__info__map"
            style={{
              height: "100vh",
              width: "100%",
            }}
          >
            <GoogleMapReact
              key={props.mapkey}
              bootstrapURLKeys={{
                key: "AIzaSyA5SJrmO2GLImg-F-_LkcRiJqDNd1Kqhu8",
              }}
              center={location.center}
              defaultZoom={11.5}
              hoverDistance={400 / 20}
              yesIWantToUseGoogleMapApiInternals
            >
              <LocationPin
                lat={props.lat}
                lng={props.lng}
                text={[props.address]}
              />
            </GoogleMapReact>
          </div>
        </div>{" "}
      </li>{" "}
    </>
  );
}

export default CardItem;
