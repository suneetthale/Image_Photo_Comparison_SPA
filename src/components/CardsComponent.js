import React from "react";
import { Button, Card } from "react-bootstrap";

function CardsComponent(props) {
  const sendData = () => {
    let obj1 = {
      id: props.data.id,
      title: props.data.title,
      url: props.data.url,
      thumbnailUrl: props.data.thumbnailUrl,
    };

    props.saveData(obj1);
  };

  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img
        style={{ height: "150px" }}
        variant="top"
        src={props.data.thumbnailUrl}
      />
      <Card.Body>
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Text>
          ID: {props.data.id} <br />
          <a href={props.data.url}>Image URL</a>
        </Card.Text>
        {props.idData.includes(props.data.id) ? (
          <Button
            variant="danger"
            onClick={() => {
              props.removeData(props.data.id);
            }}
          >
            Remove
          </Button>
        ) : (
          <Button variant="primary" onClick={sendData}>
            Compare{" "}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default CardsComponent;
