import React from 'react'
import { Helmet } from 'react-helmet'
import AddPage from '../../components/AddPage'

function Add() {
  return (
    <div>
        <Helmet> <title>Add</title></Helmet>
        <AddPage/>
    </div>
  )
}

export default Add