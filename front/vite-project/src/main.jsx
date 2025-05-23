import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import {HelmetProvider} from "react-helmet-async";
import {Provider} from "react-redux";
import {RouterProvider} from "react-router";
import {router} from "./router/router.js";
import {store} from "./redux/store.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <HelmetProvider>
          <Provider store={store}>
              <RouterProvider router={router}>

              </RouterProvider>
          </Provider>
      </HelmetProvider>
  </StrictMode>,
)
