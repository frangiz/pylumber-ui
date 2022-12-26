import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import bauhaus from "../../assets/images/companies/bauhaus.jpg";
import byggmax from "../../assets/images/companies/byggmax.jpg";
import optimera from "../../assets/images/companies/optimera.jpg";
import woody from "../../assets/images/companies/woody.jpg";
import { formatPriceChange, priceChangeColor } from "../../currencyFormatters";

const ProjectTables = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);

  const storeMapping = {
    "bauhaus": bauhaus,
    "byggmax": byggmax,
    "optimera": optimera,
    "woody": woody,
  }

  useEffect(() => {
    fetch("http://pylumber.olssonjarl.se/old-site/api/products?price_changed_after=1970-01-01")
      .then(res => res.json())
      .then(
        (data) => {
          console.log(data);
          const products = data["products"].map(p => ({
            "store": p["store"],
            "product": p["product_name"],
            "group": p["group_name"],
            "price": p["current_price"],
            "date": p["price_change"]["date"],
            "priceChangeSEK": p["price_change"]["change_sek"],
            "priceChanged": formatPriceChange(p["price_change"]["change_sek"], p["price_change"]["change_percent"])
          }));
          setData(products);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(false);
          setError(error);
        }
      )
  }, [])

  let content;
  if (error) {
    content = <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    content = <div>Loading....</div>;
  } else {
    content = 
      <Table className="no-wrap mt-3 align-middle" responsive borderless>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Date changed</th>
            <th>Price changed</th>
          </tr>
        </thead>
        <tbody>
          {data.map((tdata, index) => (
            <tr key={index} className="border-top">
              <td>
                <div className="d-flex align-items-center p-2">
                  <img
                    src={storeMapping[tdata.store]}
                    className="rounded-circle"
                    alt="avatar"
                    width="45"
                    height="45"
                  />
                  <div className="ms-3">
                    <h6 className="mb-0">{tdata.product}</h6>
                    <span className="text-muted">{tdata.group}</span>
                  </div>
                </div>
              </td>
              <td>{tdata.price.toFixed(2)} kr</td>
              <td>{tdata.date}</td>
              <td style={{color: priceChangeColor(tdata.priceChangeSEK) }}>{tdata.priceChanged}</td>
            </tr>
          ))}
        </tbody>
      </Table>;
  }
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Products Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of all the products
          </CardSubtitle>
          {content}
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;
