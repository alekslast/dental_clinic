import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


import Navbar from "../components/Navbar";
import PostForm from "../components/PostForm";
import PostBanner from "../components/PostBanner";

const Stomatologie = () => {

    const [posts, setPosts] = useState(null)

    const checkLocation = useLocation().pathname


    useEffect(() => {

        const fetchPosts = async () => {
            const response = await fetch(`${checkLocation}/posts`);
            const json = await response.json();

            // console.log(json);

            if (response.ok) {
                setPosts(json);
            }
            else {
                setPosts('No posts')
            }
        }

        fetchPosts();
    }, [])

    return (
        <>
            <Navbar />

            <PostForm loaction={checkLocation} />

            <div className="stomatologie">
                <h1>Stomatologie</h1>
                <div className="posts">
                    {posts && posts.map(post => (
                        <PostBanner key={post._id} post={post} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Stomatologie;