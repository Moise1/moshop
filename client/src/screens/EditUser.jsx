import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "../hoc/withRouter";
// import Loader from '../components/Loader'
import { Message } from "../components/Message";
import { FormContainer } from "../components/FormContainer";
import { getUserDetails, updateUser } from "../redux/actions/userActions";
import { USER_UPDATE_RESET } from "../redux/constants/userConstants";

const WrappedEditUser = ({ router }) => {
  const { location, navigate, search } = router;

  // const userId = match.params.id
  const {
    userInfo: { _id, name, email, isAdmin },
  } = useSelector((state) => state.userLogin);
  const [, setName] = useState("");
  const [, setEmail] = useState("");
  const [, setIsAdmin] = useState(false);

  const dispatch = useDispatch();

  const { error, loading, user } = useSelector((state) => state.userDetails);

  const {
    error: errorUpdate,
    loading: loadingUpdate,
    success: successUpdate,
  } = useSelector((state) => state.userUpdate);


  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      navigate("/admin/userlist");
    } else {
      if (!user?.name || !user?._id) {
        dispatch(getUserDetails(_id));
      } else {
        setName(user.name);
        setEmail(user.email);
        setIsAdmin(user.isAdmin);
      }
    }
  }, [user, successUpdate, _id, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser({ _id: user._id, name, email, isAdmin }));
  };

  return (
    <div>
      <Link to="/admin/userlist">Go Back</Link>

      <FormContainer>
        <h1>Edit User</h1>
        {/* {loadingUpdate && <Loader />} */}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}

        {error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="isadmin">
              <Form.Check
                type="checkbox"
                label="Is Admin"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></Form.Check>
            </Form.Group>

            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </div>
  );
};

export const EditUser = withRouter(WrappedEditUser);
