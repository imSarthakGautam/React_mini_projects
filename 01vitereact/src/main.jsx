import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  // react le aafno DOM banauxa- Virtual DOM,
  //ani compare garxa main DOM sanga 
  // ani diffeence matra change garxa
//  jsx ho : <app/> 

  <React.StrictMode>
    <App />
  </React.StrictMode>,

  // React.strictmode is not necessary
  //but better to use it
)
