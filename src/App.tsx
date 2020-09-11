import React from 'react'
import { Root, Routes } from 'react-static'
import { Router } from '@reach/router'
import Header from 'components/Header/Header'

function App() {
  return (
    <Root>
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
