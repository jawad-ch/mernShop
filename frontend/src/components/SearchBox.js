import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
const SearchBox = () => {
  const [keyWord, setKeyWord] = useState('')
  const history = useHistory()
  const submitHandler = (e) => {
    e.preventDefault()
    if (keyWord.trim()) {
      history.push(`/search/${keyWord}`)
    } else {
      history.push(`/`)
    }
  }
  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Group controlId="q">
        <Form.Control
          type="text"
          placeholder="Search Products..."
          value={keyWord}
          className="mr-sm-2 ml-sm-5"
          onChange={(e) => setKeyWord(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Button type="submit" variant="outline-success" className="p-2">
        search
      </Button>
    </Form>
  )
}

export default SearchBox
