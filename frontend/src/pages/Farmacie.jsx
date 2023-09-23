import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

import PostBanner from "../components/PostBanner";
import PostForm from "../components/PostForm";



const Farmacie = () => {

    const [posts, setPosts] = useState(null)

    useEffect(() => {

        const fetchPosts = async () => {
            const response = await fetch('/farmacie/posts');
            const json = await response.json();

            console.log(json);

            if (response.ok) {
                setPosts(json);
            }
        }

        fetchPosts();
    }, [])

    return (
        <>
            <Navbar />

            <PostForm />

            <div className="farmacie">
                <h1>Farmacie</h1>
                <div className="posts">
                    {posts && posts.map(post => (
                        <PostBanner key={post._id} post={post} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Farmacie;