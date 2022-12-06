import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../components/Loader";
import { Message } from "../components/Message";
import { FormContainer } from "../components/FormContainer";
import { register } from "../redux/actions/userActions";
import { withRouter } from "../hoc/withRouter";

const WrappedRegister = ({ router }) => {
  const { location, navigate, search } = router;

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
 
  const handleCheckBox = () => setIsAdmin(!isAdmin);
  const { error, loading, userInfo } = useSelector((state) => state.userRegister);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (userData.password != userData.confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register({ ...userData, isAdmin }, navigate));
    }
  };

  return (
    <FormContainer>
      <h1>Register</h1>
      {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter name"
            value={userData.name}
            name="name"
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            required
            type="email"
            name="email"
            value={userData.email}
            placeholder="Enter Email"
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            placeholder="Enter Password"
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="passwordConfirm">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            required
            type="password"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mt-3 mb-3">
          <Form.Check 
          type="checkbox" 
          label="Staff member" 
          checked={isAdmin}
          onChange={handleCheckBox}
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Register
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          Have an Account? <Link to="/login">Sign In</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export const Register = withRouter(WrappedRegister);
