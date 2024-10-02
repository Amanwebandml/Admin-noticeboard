// Login.js
import  { useState } from 'react';
import { Heading } from '../tools/Heading';
import { Subheading } from '../tools/Subheading';
import { InputBox } from '../tools/InputBox';
import { Button } from '../tools/Button';
import {useNavigate} from "react-router-dom"
import axiox from 'axios';

export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    return(
        <div className='bg-pink-300 h-screen flex justify-center'>
            <div className='flex flex-col justify-center'>
                <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
                    <Heading label="Login"/>
                    <Subheading label="Enter your credentials"/>
                    <InputBox label="Username" placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)}/>
                    <InputBox label="Password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}/>
                    <div>
                        <Button label="Login" onClick={async () => {
                            const response = await axiox.post('http://localhost:3000/admin/signin',{
                                username: username,
                                password: password
                            });
                            if(response.data.flag == true){
                                localStorage.setItem("flag", response.data.flag);
                                navigate("/Posts")
                            }
                        }}/>
                    </div>

                </div>

            </div>
        </div>
    )
}
