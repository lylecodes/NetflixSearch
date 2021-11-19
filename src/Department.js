import React, { useState, useEffect } from "react";

import { Table } from "react-bootstrap";
import { Button, ButtonToolbar } from "react-bootstrap";
import AddDepModal from "./AddDepModal.js";

function Department() {
  const [departmentsList, setDepartmentsList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    refreshList();
  });

  const refreshList = () => {
    fetch(`${process.env.REACT_APP_API}department`)
      .then((response) => response.json())
      .then((data) => {
        setDepartmentsList(data);
      });
  };

  const getMovies = () => {
    fetch(
      "https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=get%3Anew7-!1900%2C2000-!0%2C5-!0%2C10-!0-!Any-!Any-!Any-!gt100-!No&t=ns&cl=all&st=adv&ob=Relevance&p=1&sa=and",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "389dd00992msh96cfe1b0e9169edp1c3cb6jsn0838885810c2",
        },
      }
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <Table className="mt-4" striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Movie ID</th>
            <th>Movie Name</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {departmentsList.map((dep) => (
            <tr key={dep.DepartmentId}>
              <td>{dep.DepartmentId}</td>
              <td>{dep.DepartmentName}</td>
              <td>Edit / Delete</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ButtonToolbar>
        {/* <Button variant="primary" onClick={() => setShowModal(!showModal)}>
          Add Department
        </Button> */}

        {showModal && (
          <AddDepModal
            show={showModal}
            onHide={() => setShowModal(!showModal)}
          />
        )}
      </ButtonToolbar>
    </div>
  );
}

export default Department;
