import React from 'react'
import { Outlet } from 'react-router-dom'
import TempHeader from './TempHeader'
import Container from '@mui/material/Container';

function Layout() {
  return (
    <>
      <header>
        <TempHeader />
      </header>
      <main>
        <Container maxWidth="md">
          <Outlet />
        </Container>
      </main>
    </>
  )
}

export default Layout