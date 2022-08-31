import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { blue } from '@mui/material/colors'
import PropTypes from 'prop-types'

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
  },
})

function Theme({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

Theme.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Theme
