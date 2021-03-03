import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from './../components/Loader'
import { listUsers, deleteUser } from './../actions/userActions'
import { CheckIcon, CloseIcon, EditIcon, TrashIcon } from '../components/icons'
const UserListScreen = () => {
  const history = useHistory()

  const dispatch = useDispatch()

  const { loading, error, users } = useSelector((state) => state.userList)
  const { userInfo } = useSelector((state) => state.userLogin)
  const { success: successDelete } = useSelector((state) => state.userDelete)

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers())
    } else {
      history.push('/login')
    }
  }, [dispatch, userInfo, history, successDelete])

  const deletHandler = (userId) => {
    if (window.confirm('Are you sure you want delete this user')) {
      dispatch(deleteUser(userId))
    }
  }

  return (
    <>
      <h1>users</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                  </td>
                  <td>
                    {user.isAdmin ? (
                      <CheckIcon color="2fd12f" />
                    ) : (
                      <CloseIcon color="ff0000" />
                    )}
                  </td>
                  <td className="d-flex justify-content-center">
                    <LinkContainer to={`/admin/user/${user._id}/edit`}>
                      <Button variant="light" className="btn-sm">
                        <EditIcon color="2fd12f" />
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="light"
                      className="btn-sm"
                      onClick={() => deletHandler(user._id)}
                    >
                      <TrashIcon color="ff0000" />
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      )}
    </>
  )
}

export default UserListScreen
