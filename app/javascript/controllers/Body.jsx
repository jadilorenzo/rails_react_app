import React from 'react'
import PropTypes from 'prop-types'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'

function Body({ children }) {
  return (
    <Container maxWidth="sm" sx={{ mt: 2 }}>
      <Paper variant="outlined" style={{ padding: '2rem', minHeight: '5rem' }}>
        {children}
      </Paper>
    </Container>
  )
}

Body.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Body
