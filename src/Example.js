import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Index = () => {
    useEffect(() => {
        console.log('userEffect=>你來了！Index 頁面');
        return () => {
            console.log('你走了！Index 頁面');
        };
    }, []);
    return <h2>JSPang.com</h2>;
};

const List = () => {
    useEffect(() => {
        console.log('userEffect=>List 頁面');
    });
    return <h2>List-Page</h2>;
};
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
            <Router>
                <ul>
                    <li>
                        {' '}
                        <Link to="/">首页</Link>{' '}
                    </li>
                    <li>
                        <Link to="/list/">列表</Link>{' '}
                    </li>
                </ul>
                <Route path="/" exact component={Index} />
                <Route path="/list/" component={List} />
            </Router>
        </div>
    );
};

export default Example;
