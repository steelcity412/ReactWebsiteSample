# ReactWebsiteSample
This is a React Website that pulls data from the Open Brewery API.

# Wyn Designer Sample

This sample demonstrates the use of GrapeCity ActiveReports WynDesigner connected to the Wyn portal.

## System requirements

This sample requires:
 * [Node.js](https://nodejs.org/en/download/)
 * [GoogleMapAPI Key](https://developers.google.com/maps/documentation/javascript/get-api-key)

## Build and run the sample

### Description

This sample will be showing all the locations in Pittsburgh, PA (in ascending order).

You will need to add a GoogleMapAPI key withing the <strong>BreweryCardItem.js</strong> to be able to see the map and the marker.
```javascript

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
                key: "ENTER YOUR API KEY HERE",
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

```


Below is a list of some of the packages beening used:
 * axios
 * google-map-react
 * react-dom
 * react-router-dom
 * @iconify/react
 * @iconify/icons-mdi
    

### Steps

1. Execute `npm install react`
2. Execute `npm start`
2. Open http://localhost:3000 by browser

### Sample output

![](screenshots/HomePage.png)

### GoogleMap and Marker



When you open the application, you will have a zoomed out view of the city of Pittsburgh.  To see the markers location, you can zoom in and the marker will adjust based on the zoom level.  Below is an example of what the marker looks when it is zoomed in and zoom out.

#### Zoomed in
![](screenshots/BreweryScreenshot.png)

#### Zoomed out
![](screenshots/BreweryScreenshot2.png)