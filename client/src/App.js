import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Panel from './components/panel';

const App = _ => {

    return (
        <BrowserRouter>
            <div>
                <Panel />
            </div>
        </BrowserRouter>
    )
}

export default App
