import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const BACKEND_URL = import.meta.env.VITE_API_URL;

const Read = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/employees`)
      .then((res) => setEmployees(res.data))
      .catch(() => toast.error("Failed to fetch employee data."));
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Employee ID</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Department</th>
            <th>Date of Joining</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.employeeID}>
              <td>{employee.name}</td>
              <td>{employee.employeeID}</td>
              <td>{employee.email}</td>
              <td>{employee.phoneNumber}</td>
              <td>{employee.department}</td>
              <td>{employee.dateOfJoining.split("T")[0]}</td>
              <td>{employee.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/">
        <button>Add Details</button>
      </Link>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default Read;
