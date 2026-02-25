import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserList from './components/UserList'
import UserForm from './components/UserForm'
import "./Style.css"

const App = () => {

  let router = createBrowserRouter([
    {
      path : "/",
      element : <UserList></UserList>
    },
    {
      path : "/addUser",
      element : <UserForm></UserForm>
    },
    {
      path : "/editUser/:id",
      element : <UserForm></UserForm>
    }

  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
