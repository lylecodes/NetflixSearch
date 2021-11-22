import React, { useState, useEffect } from "react";

import { Table } from "react-bootstrap";
import { Button, ButtonToolbar } from "react-bootstrap";
import AddDepModal from "./AddDepModal.js";

function Department() {
  const [departmentsList, setDepartmentsList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    refreshList();
  }, []);

  const refreshList = () => {
    fetch(`${process.env.REACT_APP_API}department`)
      .then((response) => response.json())
      .then((data) => {
        setDepartmentsList(data);
      });
  };

  const getMovies = () => {
    fetch(`${process.env.REACT_APP_MOVIEGET}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": `${REACT_APP_HOST}`,
        "x-rapidapi-key": `${REACT_APP_KEY}`,
      },
    })
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
        <Button variant="primary" onClick={getMovies}>
          Add Department
        </Button>

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
