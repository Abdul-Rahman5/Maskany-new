
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Packages from './components/Packages/Packages';
import PropertyDetails from './components/PropertyDetails/PropertyDetails';
import Profile from './components/profile/profile';
import Help from './components/help/help';
import AgentDashboard from './components/AgentDashboard/AgentDashboard';
import UserContextProvider from './Context/Usercontext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';


let router = createBrowserRouter([
{path:"",element:<Layout/>, children:[
   {index:"",element: <ProtectedRoute><Home/></ProtectedRoute> },
   {path:"register",element:<Register/>},
   {path:"login",element:<Login/>},
   {path:"home",element: <ProtectedRoute><Home/></ProtectedRoute>},
   {path:"Maskany-new",element: <ProtectedRoute><Home/></ProtectedRoute>},
   {path:"packages",element: <ProtectedRoute><Packages/></ProtectedRoute> },
   {path:"propertyDetails/:id",element:  <ProtectedRoute><PropertyDetails/></ProtectedRoute>},
   {path:"profile",element: <ProtectedRoute><Profile/></ProtectedRoute>},
   {path:"help",element: <ProtectedRoute><Help/></ProtectedRoute>},
   {path:"AgentDashboard",element: <ProtectedRoute><AgentDashboard/></ProtectedRoute>},
   {path:"*",element:<NotFound/>},
]}
]);
function App() {

  return <UserContextProvider>


   <RouterProvider router={router} >


  </RouterProvider>
  </UserContextProvider>
}

export default App
