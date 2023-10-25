import { Routes } from "react-router-dom";
import { RoutesMain } from './routes/index.jsx'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer
    autoClose={1000}/>
      <RoutesMain />
    </>
  )
}

export default App
