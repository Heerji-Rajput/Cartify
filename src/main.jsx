import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Components/Home.jsx'
import Cart from './Components/Cart.jsx'
import { Provider } from 'react-redux'
import MainLayout from './assets/Pages/MainLayout.jsx'
import store from './assets/React-Redux/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout/>}>
              <Route path='/' element={<Home />}/>
              <Route path='/Cart' element={<Cart />}/>
            </Route>
          </Routes>
      </BrowserRouter>
      </Provider>
  </StrictMode>,
)
