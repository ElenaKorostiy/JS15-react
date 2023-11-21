import React, { memo, useState } from 'react';

import "./App.css";

export const App = () => {
    const Input = memo(({ defaultValue, onChange }) => {
        console.log('Rendering Input component');

        return (
            <input
                type="text"
                defaultValue={defaultValue}
                onChange={(e) => onChange(e.target.value)}
            />
        );
    });

    const [inputValue, setInputValue] = useState('');

    return (
        <div>
            <Input defaultValue=" " onChange={(value) => setInputValue(value)} />
            <p>Input value: {inputValue}</p>
        </div>
    );
};