import React, { useState } from 'react';
import TShirt from './components/TShirt';
import Customizer from './components/customizer';
import './App.css';

function App() {
    const [color, setColor] = useState('#ff6600');
    const [message, setMessage] = useState('Hello React!');

    return (
        <div className="App">
            <h1>Custom T-Shirt Designer</h1>
            <Customizer
                color={color}
                setColor={setColor}
                message={message}
                setMessage={setMessage}
            />
            <TShirt color={color} message={message} />
        </div>
    );
}

export default App;

