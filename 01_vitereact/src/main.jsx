import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function myApp(){
  return (
    <div>
      <h1>Hello ganesh !</h1>
    </div>
  )
}
const reactElement ={
  type:"a",
  props:{
      href : "google.com",
      target : "_blank"
  },
  children : "click here to go google"
}
const reactElement1 =React.createElement(
  'a', { href:'google.com', target: "_blank" }, "click here to go google"
)
const anotherElement = (
  <h1>Hello Ganesh !</h1>
)
ReactDOM.createRoot(document.getElementById("root")).render(
  
  // myApp()
  // <myApp>mbcn</myApp>

  // <App></App>

  // anotherElement

  // reactElement //  it is not understanding because of react has their own syntax


  // reactElement1  // react is understanding this syntax
<App></App>
 
)