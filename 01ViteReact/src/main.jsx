import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotheruser ="xyz"

const reactElement = React.createElement(
  'a',
  {href: 'https://www.baidu.com', target: '_blank'},
  'click me to visit baidu.com',
  anotheruser
)

ReactDOM.createRoot(document.getElementById('root')).render(
   reactElement,
  // < App />
)
