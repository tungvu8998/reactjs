import { useEffect, useState } from "react";

function Count() {
    
    const[count, setCount] = useState(0);
    const[count1, setCount1] = useState(0);
    console.log("Count", count);
    useEffect(() => {
        console.log("call use Effect")
        let date = new Date();
        setCount(date.getDate());
        return () => {
            console.log("Count will be unmount")
        }
    }, []);
    return <>
        <p>Count {count}</p>
        <button onClick={() => {setCount(count + 1)}}>Click me</button>
        <button onClick={() => {setCount1(count1 + 1)}}>Click me for count1</button>
    </>
}

export default Count;