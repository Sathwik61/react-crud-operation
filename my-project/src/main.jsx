import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Delete from './Delete.jsx'
import Update from './Update.jsx'
import List from './List.jsx'
import ss from './assets/react.svg'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <div className="flex justify-center m-6 transition-transform transform hover:scale-110">
      <img src={ss} alt="r" className='mx-5' />
      <h1 className="text-5xl font-semibold mb-4 ">Nexus</h1>
    </div>
  <div className="flex m-5 h-15 w-15">
    <App/>
    <Delete/>
    <Update/>

  </div>
  <div className="mt-[10vh]">
    <List/>
  </div>

  </React.StrictMode>,
)
