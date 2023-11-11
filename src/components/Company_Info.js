import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Company_Info = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-800 bg-dark">
      <Card className="mt-3 p-3 text-light" style={{ width: "30rem" }}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            Company: Geeksynergy Technologies Pvt Ltd
          </ListGroup.Item>
          <ListGroup.Item>Address: Sanjaynagar, Bengaluru-56</ListGroup.Item>
          <ListGroup.Item>Phone: XXXXXXXX09</ListGroup.Item>
          <ListGroup.Item>Email: XXXXXX@gmail.coms</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default Company_Info;
