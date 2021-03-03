import React, { useState } from 'react'
// import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { SearchIcon } from './icons'
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
      <SearchIcon />
    </form>
  )
}

export default SearchBox
