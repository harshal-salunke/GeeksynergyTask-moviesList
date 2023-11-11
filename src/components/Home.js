import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import SignImg from "./SignImg";
import { NavLink, useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [data, setData] = useState([]);
  console.log(inpval);

  const getData = (e) => {
    // console.log(e.target.value);
    const { value, name } = e.target;
    // console.log(value, name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();
    // console.log(inpval);
    const { name, email, phone, password } = inpval;

    if (name === "") {
      alert("Name field is required");
    } else if (email === "") {
      alert("Email field is requried");
    } else if (!email.includes("@")) {
      alert("Please enter valid Email address");
    } else if (phone === "") {
      alert("Phone number field to required");
    } else if (password === "") {
      alert("Password field is required");
    } else if (password.length < 5) {
      alert("Password length should be greater than five");
    } else {
      console.log("data added successfully");
      history("/login");

      localStorage.setItem("userEntry", JSON.stringify([...data, inpval]));
    }
  };

  return (
    <div className="bg-dark">
      <div className="container mt-3 ">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign Up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  name="name"
                  onChange={getData}
                  placeholder="Enter Your Name"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getData}
                  placeholder="Enter Email"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="number"
                  name="phone"
                  onChange={getData}
                  placeholder="Enter Phone Number"
                />
              </Form.Group>

              <Dropdown className="mb-3 ">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Profession
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Student</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Employee</Dropdown.Item>
                  <Dropdown.Item href="#/action-3"> Other</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getData}
                  placeholder="Password"
                />
              </Form.Group>

              <Button
                variant="primary"
                className="col-lg-6"
                onClick={addData}
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3 text-white">
              Already Have an Account
              <span>
                <NavLink to="/login"> SignIn</NavLink>
              </span>
            </p>
          </div>
          <SignImg />
        </section>
      </div>
    </div>
  );
};

export default Home;
