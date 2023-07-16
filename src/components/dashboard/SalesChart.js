import React, { useState, useEffect } from "react";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import Chart from "react-apexcharts";

const SalesChart = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/groups/price-trends")
      .then(res => res.json())
      .then(
        (data) => {
          console.log(data);
          const products = data["groups"].map(g => ({
            "name": g["group_name"],
            "data": g["price_trends"].map(pt => ({ x: pt["date"], y: pt["price"] }))
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

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
      width: 2,
    },
    legend: {
      show: true,
    },
    yaxis: {
      labels: {
        formatter: function(value) {
          return value.toFixed(0);
        }
      }
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          plotOptions: {
            bar: {
              columnWidth: "60%",
              borderRadius: 7,
            },
          },
        },
      },
    ],
  };

  let content;
  if (error) {
    content = <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    content = <div>Loading....</div>;
  } else {
    content = <Chart options={options} series={data} type="line" height="379" />;
  }
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Sales Summary</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          Yearly Sales Report
        </CardSubtitle>
        {content}
      </CardBody>
    </Card>
  );
};

export default SalesChart;
