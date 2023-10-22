import React, { createElement as e, useState } from 'react'

function Example() {
    // return (
    //   <h1>Hey</h1>
    // );
    // return React.createElement('h1', {}, 'BY OLYA')

    const [count, setCount] = useState(0)
    return e('div', { className: 'container' }, [
        e('h1', { className: 'font-bold', key: '1' }, `Test JSX ${count}`),
        e(
            'button',
            {
                className: 'py-3 px-5 border',
                key: '2',
                onClick: () => setCount(count + 1),
            },
            'click me'
        ),
    ])
}

export default Example
