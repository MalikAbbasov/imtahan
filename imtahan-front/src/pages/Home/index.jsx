import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../../components/Header'
import Fetchsection from '../../components/Fetchsection'
import WinesFor from '../../components/WinesFor'
import WinesBlog from '../../components/WinesBlog'
import Sldier from '../../components/Slider'

function Home() {
  return (
    <div>
        <Helmet> <title>Home</title></Helmet>

        <Header/>
        <Fetchsection/>
        <WinesFor/>
        <Sldier/>
        <WinesBlog/>
        </div>
  )
}

export default Home
