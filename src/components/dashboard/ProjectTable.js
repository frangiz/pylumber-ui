import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";

const tableData = [
  {
    avatar: user1,
    product: "K-plyfa 18mm",
    group: "K-plyfa",
    price: "819.23 kr",
    date: "2022-01-23",
    priceChanged: "-160.00 kr (-16.3%)",
  },
  {
    avatar: user2,
    product: "Plywood klass 2/3, 800x1200x6",
    group: "Plywood",
    price: "129.74 kr",
    date: "2022-11-23",
    priceChanged: "+40.00 kr (16.7%)",
  },
  {
    avatar: user3,
    product: "Råpl 22x170",
    group: "Råpl",
    price: "29.45 kr",
    date: "2022-12-01",
    priceChanged: "-2.58 kr (-8.0%)",
  },
  {
    avatar: user4,
    product: "Regel 45x95",
    group: "Regel",
    price: "965.23 kr",
    date: "2022-09-12",
    priceChanged: "-5.90 kr (-11.0%)",
  },
  {
    avatar: user5,
    product: "Regel 45x70",
    group: "Regel",
    price: "1032.23 kr",
    date: "2022-10-21",
    priceChanged: "--- (0.0%)",
  },
];

const ProjectTables = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Products Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of all the products
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Date</th>
                <th>Price changed</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.avatar}
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
                  <td>{tdata.price}</td>
                  <td>{tdata.date}</td>
                  <td>{tdata.priceChanged}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;
