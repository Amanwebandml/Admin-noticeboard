import axios from "axios";
import { useMemo, useState } from "react";
import { useEffect } from "react";
import { Subheading } from "../tools/Subheading";

export function LatestPost() {
    const [posts, setPosts] = useState("");
    useMemo(() => {
        axios.get('http://localhost:3000/admin/posts').then((response) => {
            setPosts(response.data.posts);
        })
    }, []);
    console.log(posts);
    
    
    return (
        <div className="text-center bg-pink-300 text-3xl text-white w-80% h-screen mx-auto py-10 my-10">
            <h1 className="text-3xl font-bold underline">Latest Post</h1>
            <Subheading label={posts.title}/>
            <Subheading label={posts.content}/>
        </div>
    );
}