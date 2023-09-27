import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// creating our own function to check how react works

function Myapp() {
    return(
        <div>
            <h1>Custom react app</h1>
        </div>
    )
    
}

ReactDOM.createRoot(document.getElementById('root')).
render(

    <App />
)
