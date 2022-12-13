import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem
} from "reactstrap";
import bauhaus from "../../assets/images/companies/bauhaus.jpg";
import byggmax from "../../assets/images/companies/byggmax.jpg";
import optimera from "../../assets/images/companies/optimera.jpg";
import woody from "../../assets/images/companies/woody.jpg";

const Feeds = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);

  const storeMapping = {
    "bauhaus": bauhaus,
    "byggmax": byggmax,
    "optimera": optimera,
    "woody": woody,
  }

  function formatPriceChange(price_change) {
    var res = price_change["change_sek"].toFixed(2) + " kr (" +price_change["change_percent"].toFixed(2) +"%)"
    if (price_change["change_sek"] > 0 ) {
      return "+" + res
    }
    return res
  }

  function priceChangeColor(change_sek) {
    return change_sek < 0 ? 'green' : 'red';
  }

  useEffect(() => {
    const days = 86400000 //number of milliseconds in a day
    const sixDaysAgo = new Date(new Date() - (6 * days)).toISOString().substring(0, 10)

    fetch("http://pylumber.olssonjarl.se/old-site/api/products?price_changed_after=" +sixDaysAgo)
      .then(res => res.json())
      .then(
        (data) => {
          console.log(data);
          const products = data["products"].map(p => ({
            "store": p["store"],
            "title": p["product_name"],
            "priceChangeSEK": p["price_change"]["change_sek"],
            "priceChangeStr": formatPriceChange(p["price_change"]),
            "date": p["price_change"]["date"]
          }));
          setData(products);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(false);
          setError(true);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!isLoaded) {
    return <div>Loading....</div>;
  }

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Recent price changes</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Products with prices changed the last 5 days.
        </CardSubtitle>
        <ListGroup flush className="mt-4">
          {data.map((feed, index) => (
            <ListGroupItem
              key={index}
              action
              href="/"
              tag="a"
              className="d-flex align-items-center p-3 border-0"
            >
              <img
                src={storeMapping[feed.store]}
                className="rounded-circle"
                alt="avatar"
                width="30"
                height="30"
              />
              <div className="ms-1">
                {feed.title}
              </div>
              <small className="ms-auto text-muted text-small">
                <div style={{color: priceChangeColor(feed.priceChangeSEK) }}>{feed.priceChangeStr}</div>
                {feed.date}
              </small>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default Feeds;
