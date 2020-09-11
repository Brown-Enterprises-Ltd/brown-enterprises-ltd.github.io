import React from 'react'
import { Root, Routes } from 'react-static'
import { Router } from '@reach/router'
import Header from 'components/Header/Header'
import GlobalStyle from './global-styles/css-reset'

function App() {
  return (
    <Root>
      <GlobalStyle/>
      <Header />
      <React.Suspense fallback={<em>Loading...</em>}>
        <Router>
          <Routes path="*" />
        </Router>
      </React.Suspense>
    </Root>
  )
}

export default App
