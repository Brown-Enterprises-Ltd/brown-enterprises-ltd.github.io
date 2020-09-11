import React from 'react'
import { Root, Routes } from 'react-static'
import { Router } from '@reach/router'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import GlobalStyle from './global-styles/css-reset'

function App() {
  return (
    <Root>
      <link href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap" rel="stylesheet" />
      <GlobalStyle/>
      <Header />
      <React.Suspense fallback={<em>Loading...</em>}>
        <Router>
          <Routes path="*" />
        </Router>
      </React.Suspense>
      <Footer />
    </Root>
  )
}

export default App
