import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from './../components/Loader'
import { getUserDetails, updateUser } from '../actions/userActions'
import FormContainer from '../components/FormContainer'
import { USER_UPDATE_RESET } from '../constants/userConstants'

const UserEditScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)

  const userId = useParams().id

  const dispatch = useDispatch()

  const history = useHistory()

  const { loading, error, user } = useSelector((state) => state.userDetails)
  const {
    success: updateSuccess,
    error: updateError,
    loading: updateLoading,
  } = useSelector((state) => state.userUpdate)

  useEffect(() => {
    if (updateSuccess) {
      dispatch({ type: USER_UPDATE_RESET })
      history.push('/admin/userList')
    } else {
      if (!user.name || user._id !== userId) {
        dispatch(getUserDetails(userId))
      } else {
        setName(user.name)
        setEmail(user.email)
        setIsAdmin(user.isAdmin)
      }
    }
  }, [dispatch, userId, user, updateSuccess, history])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateUser({ id: userId, name, email, isAdmin }))
  }

  return (
    <>
      <Link to="/admin/userList" className="btn btn-light my-3">
        {' '}
        Go Back{' '}
      </Link>

      <FormContainer>
        <h1>Edit User</h1>

        {updateLoading && <Loader />}
        {updateError && <Message variant="danger">{updateError}</Message>}

        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="email">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="isAdmin">
              <Form.Check
                type="checkbox"
                label="isAdmin"
                value={isAdmin}
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></Form.Check>
            </Form.Group>

            <Button type="submit" variant="primary">
              update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  )
}

export default UserEditScreen
