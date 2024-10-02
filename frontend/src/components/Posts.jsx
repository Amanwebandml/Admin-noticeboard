import { useState } from "react"
import { Heading } from "../tools/Heading";
import { Subheading } from "../tools/Subheading";
import { InputBox } from "../tools/InputBox";
import { Button } from "../tools/Button";
import axiox from 'axios';

export function Posts(){
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const[success, setSuccess] = useState("");

    return(
        <div className='bg-pink-300 h-screen flex justify-center'>
            <div className='flex flex-col justify-center'>
                <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
                    <Heading label="Post your message"/>
                    <Subheading label="Enter your credentials"/>
                    <InputBox label="title" placeholder="Enter your username" onChange={(e) => setTitle(e.target.value)}/>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contents</label>
                    <textarea 
                        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        rows="5" // Adjust rows for height as needed
                        placeholder="Enter message content"
                        onChange={(e) => setContent(e.target.value)} // Assuming you're capturing this data in state
                    />
                    <div>
                        <Button label="Post" onClick={async () => {
                            const response = await axiox.post('http://localhost:3000/admin/post',{
                                title,
                               content,
                               
                            });
                            if(response){
                                setSuccess("Message posted successfully");
                            }
                        }}/>
                    </div>
                    <div>
                        <Heading label={success}/>
                    </div>
                    <div>
                    <Button label="Logout" onClick={() => {
                        // Remove the "flag" from localStorage
                        localStorage.removeItem("flag");
                        
                        // Reload the entire webpage
                        window.location.reload();
                    }} />

                    </div>
                </div>
            </div>
        </div>
    )
    
}