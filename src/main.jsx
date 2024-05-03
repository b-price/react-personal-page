import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const myData = {
    name: 'Ben Price',
    imageURL: '/BenPic.jpg',
    hobbyList: [
        'Guitar',
        'Drums',
        'Bass',
        'Tea',
        'Climbing',
        'Photography'
    ]
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App data={myData} />
  </React.StrictMode>,
)
