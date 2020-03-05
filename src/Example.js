import React, { useState, useEffect } from 'react';

const Example = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(`useEffect=>You clicked ${count} times`);
    });
    return (
        <div>
            <p>You clicked {count} times</p>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Click me
            </button>
        </div>
    );
};

export default Example;
