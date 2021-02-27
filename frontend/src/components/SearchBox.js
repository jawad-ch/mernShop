import React, { useState } from 'react'
// import { Button, Form } from 'react-bootstrap'
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
    <form onSubmit={submitHandler} className="header__search">
      <input
        type="search"
        value={keyWord}
        onChange={(e) => setKeyWord(e.target.value)}
        placeholder="Search"
        className="header__input"
      />
      <i className="bx bx-search header__icon"></i>
    </form>
  )
}

export default SearchBox
