import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem,
  Button,
} from "reactstrap";

const FeedData = [
  {
    title: "Plywood klass 2/3, 800x1200x6",
    icon: "bi bi-arrow-down",
    color: "success",
    priceChange: "-150.00 kr (-10.4%)",
  },
  {
    title: "Plyfa 7mm",
    icon: "bi bi-arrow-up",
    color: "danger",
    priceChange: "+80.00 kr (21.7%)",
  },
  {
    title: "New user registered.",
    icon: "bi bi-person",
    color: "info",
    priceChange: "6 minute ago",
  },
  {
    title: "Server #1 overloaded.",
    icon: "bi bi-hdd",
    color: "danger",
    priceChange: "6 minute ago",
  },
  {
    title: "New order received.",
    icon: "bi bi-bag-check",
    color: "success",
    priceChange: "6 minute ago",
  },
  {
    title: "Cras justo odio",
    icon: "bi bi-bell",
    color: "dark",
    priceChange: "6 minute ago",
  },
  {
    title: "Server #1 overloaded.",
    icon: "bi bi-hdd",
    color: "warning",
    priceChange: "6 minute ago",
  },
];

const Feeds = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Recent price changes</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Products with prices changed the last 5 days.
        </CardSubtitle>
        <ListGroup flush className="mt-4">
          {FeedData.map((feed, index) => (
            <ListGroupItem
              key={index}
              action
              href="/"
              tag="a"
              className="d-flex align-items-center p-3 border-0"
            >
              <Button
                className="rounded-circle me-3"
                size="sm"
                color={feed.color}
              >
                <i className={feed.icon}></i>
              </Button>
              {feed.title}
              <small className="ms-auto text-muted text-small">
                {feed.priceChange}
              </small>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default Feeds;
