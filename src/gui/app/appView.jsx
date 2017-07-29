import * as React from 'react';

export default ({count, increment}) => (
    <div>
        <div>Hello, World: {count}</div>
        <button onClick={increment}>+ 1</button>
    </div>
);
