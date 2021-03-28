import axios from "axios";
import React, { useEffect, useState } from "react";
import CardsComponent from "./CardsComponent";
import styles from "./PhotoComponent.module.css";
import { Container, Row, Col, Table, CardColumns } from "react-bootstrap";
import TableData from "./TableData";

function PhotoComponent() {
  const [photoData, setphotoData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [idData, setIdData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        //Considering first 100 images
        setphotoData(response.data.slice(0, 100));
      })
      .catch((err) => {
        console.log(err.data);
      });
  }, []);

  const saveData = (fromPhoto) => {
    setTableData([...tableData, fromPhoto]);
    setIdData([...idData, fromPhoto.id]);
  };

  const removeData = (id) => {
    setIdData(idData.filter((dataId) => dataId !== id));
    setTableData(tableData.filter((tableId) => tableId.id !== id));
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={12} sm={12}>
          <h4 className={styles.title}>Photos</h4>
          <section className={styles.cards}>
            <CardColumns className={styles.cardColumns}>
              {photoData.map((data) => {
                return (
                  <CardsComponent
                    key={data.id}
                    saveData={saveData}
                    removeData={removeData}
                    idData={idData}
                    data={data}
                  />
                );
              })}
            </CardColumns>
          </section>
        </Col>
        <Col xs={12} md={12} sm={12}>
          <h4 className={styles.title}>Comparison Table</h4>
          <section className={styles.tableData}>
            <Table responsive="sm" striped bordered hover>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Id</th>
                  <th>URL</th>
                  <th>Title</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((data) => {
                  return <TableData data={data} key={data.id} />;
                })}
              </tbody>
            </Table>
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default PhotoComponent;
