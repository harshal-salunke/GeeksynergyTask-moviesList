import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SignImg from "./SignImg";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",

    password: "",
  });

  // const [data, setData] = useState([]);
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

    const getUserArr = localStorage.getItem("userEntry");
    console.log(getUserArr);

    // console.log(inpval);
    const { email, password } = inpval;

    if (email === "") {
      alert("Email field is requried");
    } else if (!email.includes("@")) {
      alert("Please enter valid Email address");
    } else if (password === "") {
      alert("Password field is required");
    } else if (password.length < 5) {
      alert("Password length should be greater than five");
    } else {
      if (getUserArr && getUserArr.length) {
        const userData = JSON.parse(getUserArr);
        const userLogin = userData.filter((el, k) => {
          return el.email === email && el.password === password;
        });
        if (userLogin.length === 0) {
          alert("Invalid Details");
        } else {
          console.log("User login successfully");
          history("/details"); // yamadun apan direct dusry link madhe jau shakto IMP
          localStorage.setItem("user_login", JSON.stringify(getUserArr));
        }
      }
    }
  };

  return (
    <div>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign IN</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getData}
                  placeholder="Enter Email"
                />
              </Form.Group>

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
                <NavLink to="/"> Register</NavLink>
              </span>
            </p>
          </div>
          <SignImg />
        </section>
      </div>
    </div>
  );
};

export default Login;
