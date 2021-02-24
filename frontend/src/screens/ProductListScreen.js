import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from './../components/Loader'
import Paginate from './../components/Paginate'
import {
  listProduct,
  deleteProduct,
  createProduct,
} from '../actions/productActions'
import { PRODUCT_CREATE_RESET } from '../constants/productConstants'

const ProductListScreen = () => {
  const history = useHistory()
  const pageNumber = useParams().pageNumber || 1
  const dispatch = useDispatch()

  const { loading, error, products, pages, page } = useSelector(
    (state) => state.productList
  )
  const { userInfo } = useSelector((state) => state.userLogin)
  const {
    loading: createLoading,
    error: createError,
    success: createSuccess,
    product: createdProduct,
  } = useSelector((state) => state.createProduct)
  const {
    success: deleteSuccess,
    loading: deleteLoading,
    error: deleteError,
  } = useSelector((state) => state.deleteProduct)

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET })
    if (!userInfo || !userInfo.isAdmin) {
      history.push('/login')
    }
    if (createSuccess) {
      history.push(`/admin/product/${createdProduct._id}/edit`)
    } else {
      dispatch(listProduct('', pageNumber))
    }
  }, [
    dispatch,
    userInfo,
    history,
    deleteSuccess,
    createSuccess,
    createdProduct,
    pageNumber,
  ])

  const deletHandler = (productId) => {
    if (window.confirm('Are you sure you want delete this product')) {
      dispatch(deleteProduct(productId))
    }
  }
  const createProductHandler = () => {
    dispatch(createProduct())
  }

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className="text-right">
          <Button className="my-3" onClick={createProductHandler}>
            {' '}
            <i className="fas fa-plus"></i> Create product
          </Button>
        </Col>
      </Row>
      {createLoading && <Loader />}
      {createError && <Message variant="danger">{createError}</Message>}
      {deleteLoading && <Loader />}
      {deleteError && <Message variant="danger">{deleteError}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map((product) => (
                  <tr key={product._id}>
                    <td>{product._id}</td>
                    <td>{product.name}</td>
                    <td>${product.price}</td>
                    <td>{product.category}</td>
                    <td>{product.brand}</td>
                    <td>
                      <LinkContainer to={`/admin/product/${product._id}/edit`}>
                        <Button variant="light" className="btn-sm">
                          <i className="fas fa-edit"></i>
                        </Button>
                      </LinkContainer>
                      <Button
                        variant="danger"
                        className="btn-sm"
                        onClick={() => deletHandler(product._id)}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <Paginate pages={pages} page={page} isAdmin={true} />
        </>
      )}
    </>
  )
}

export default ProductListScreen