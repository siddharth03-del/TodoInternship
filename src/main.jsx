import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import TodoStore from './Redux/Store/TodoStore.js'
import { ThemeProvider } from '@material-tailwind/react'
import { BrowserRouter } from 'react-router-dom'
import { AppContextProvider } from './Context/AppContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContextProvider>
      <BrowserRouter>
        <ThemeProvider>
          <Provider store={TodoStore}>
            <App />
          </Provider>
        </ThemeProvider>
      </BrowserRouter>
    </AppContextProvider>
  </StrictMode>
)
