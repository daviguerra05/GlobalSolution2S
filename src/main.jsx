import React, { } from 'react'
import ReactDOM from 'react-dom/client'
/* importando as dependencias do browserRouter e Router Provider*/
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
/* importando os elementos*/
import App from './App.jsx'
import Error from './Error.jsx'
import Home from './Home.jsx'
import './css/index.css'

 /* criando a função createBrowser */
 const router = createBrowserRouter([
  {
    /* chamando o elemento principal(pai) */
    path: '/', element: <App />,

    /*  chamando o elemento de erro*/
    errorElement: <Error />,
    /* chamando elementos filhos */
    children:[
      {path: '/', element:<Home/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/*chamando a função que será renderizada */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)