
import React from 'react'
import ReactDOM from 'react-dom/client'
//import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes'
import { ThemeProvider } from "styled-components"
import theme from './styledComponentsDefaultTheme'
import GlobalStyle from './styledComponentsGlobalStyle'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={routes}/>
    </ThemeProvider>
  </React.StrictMode>,
)
