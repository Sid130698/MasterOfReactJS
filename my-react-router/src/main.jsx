import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact_Us/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "About",
//         element: <About />,
//       },
//       {
//         path: "ContactUs",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="ContactUs" element={<Contact />} />
      <Route path="User/:userId" element={<User />} />
      <Route path="Github" element={<Github />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
