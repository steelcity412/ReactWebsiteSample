import React from "react";
import CardItem from "./BreweryCardItem";
import "./BreweryCards.css";

import axios from "axios";

export default class BreweryCards extends React.Component {
  state = {
    breweries: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://api.openbrewerydb.org/breweries?by_city=pittsburgh&sort=name:asc`
      )
      .then((res) => {
        const breweries = res.data;
        this.setState({ breweries });
      });
  }

  render() {
    return (
      <div className="cards">
        <h1>Check out these EPIC Breweries!</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <>
              {this.state.breweries.map((brewery, index) => {
                if (index % 3 == 0 || index % 3 == 1) {
                  return (
                    <ul className="cards__items">
                      <CardItem
                        mapkey={index}
                        name={brewery.name}
                        label={brewery.brewery_type}
                        lat={brewery.latitude}
                        lng={brewery.longitude}
                        address={[
                          (brewery.street != null ? brewery.street : "") +
                            "  " +
                            (brewery.city != null ? brewery.city : "") +
                            ", " +
                            (brewery.state != null ? brewery.state : "") +
                            "  " +
                            (brewery.postal_code != null
                              ? brewery.postal_code
                              : ""),
                        ]}
                        website={brewery.website_url}
                        path="./services"
                      />{" "}
                    </ul>
                  );
                } else {
                  return (
                    <ul className="cards__items">
                      <CardItem
                        name={brewery.name}
                        lat={brewery.latitude}
                        lng={brewery.longitude}
                        label={brewery.brewery_type}
                        address={[
                          (brewery.street != null ? brewery.street : "") +
                            "  " +
                            (brewery.city != null ? brewery.city : "") +
                            ", " +
                            (brewery.state != null ? brewery.state : "") +
                            "  " +
                            (brewery.postal_code != null
                              ? brewery.postal_code
                              : ""),
                        ]}
                        website={brewery.website_url}
                        path="./services"
                      ></CardItem>
                    </ul>
                  );
                }
              })}
            </>
          </div>
        </div>
      </div>
    );
  }
}
