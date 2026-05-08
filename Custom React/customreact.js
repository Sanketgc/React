import { useState, useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [serverUrl, roomId]);
}

function customRender(reactElement, container) {
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    //  domElement.setAttribute('href', reactElement.props.href)
    //  domElement.setAttribute('target', reactElement.props.target)

    //  container.appendChild(domElement)


    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.children;
    for(const prop in reactElement.props){
        if (prop == 'children') continue;
        domElement.setAttribute
        (prop, reactElement.props[prop])

    }
    container.appendChild(domElement)
    
}

const reactElement = {
    type: 'a',
    props:{
        href: "https://www.google.com",
        target: "_blank",
    },
    children: "Google"
}


const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)

