import React, {useState, useEffect} from 'react';

export default props => {
    let [username, setUsername] = useState('')
    let [count, setCount] = useState(0);
    //Simulates componentDidMount
    useEffect(()=> {
        //axios request or way of getting data here
        setUsername('Matt')
    }, [])
    //Simulate componentDidUpdate
    useEffect(()=>{
        console.log('Count changed')
    }, [count])


    return (
        <main>
            <h1>Hello, {username}, your count is {count}</h1>
            <input value={username} onChange={e => setUsername(e.target.value)}/>
            <button onClick={() => setCount(count - 1)}>Count Down</button>
            <button onClick={() => setCount(count + 1)}>Count Up</button>
        </main>
    )
}