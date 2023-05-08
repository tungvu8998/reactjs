import { useEffect } from "react";

import { login } from "../../services/api";
import { useState } from "react";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            const data = await login.getPost;
            console.log("=================+++++data của chúng ta đây=====>", data);
            if (data?.length > 0) {
                setUsername(data);
                setPassword(data);
            }
        }

        fetchData();
    }, []);
    const usernameChangeHandle = (event) => {
        console.log(event);
        setUsername(event.target.value);
    }
    const passwordChangeHandle = (event) => {
        console.log(event);
        setPassword(event.target.value);
    }
    return  <form action="">
        <label for="username">User:</label>
        <input type="text" value={username} onChange={usernameChangeHandle} ></input> 
        <br></br>
        <label for="password">Pass:</label>
        <input type="text" value={password} onChange={passwordChangeHandle}></input>
        <br></br>
        <input type="submit" value="login"></input>
    </form>
}

export default Login;