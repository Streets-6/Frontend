import { createBrowserRouter } from 'react-router-dom'

import App from 'src/components/App/App'
import MainPage from 'src/pages/MainPage/MainPage'
import PartnersPage from 'src/pages/PartnersPage/PartnersPage'
import ErrorPage from 'src/pages/ErrorPage/ErrorPage'
import Error404Page from 'src/pages/Error404Page/Error404Page'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/partners',
        element: <PartnersPage />,
      },
      {
        path: '/*',
        element: <Error404Page />,
      },
    ],
  },
])
