import React, { useState, useEffect } from 'react';
import { BlogEntry, AuthorLine } from './BlogStyles';
import getData from '../utils/getData';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect( () => {
        const getBlogs = async() => {
            const blogData = await getData(`http://localhost:5000/api/blogs`);
            setBlogs(blogData);
        }
        getBlogs();
    },[]);

    return (
        <>
            {blogs.map(blog => 
                    <BlogEntry key={blog.id}>
                        <h2>{blog.title}</h2>
                        <AuthorLine>
                            <p>{blog.username}</p>
                            <p>{blog.post_date}</p>
                        </AuthorLine>
                        <p>{blog.blog_entry}</p>
                        <p><a href={`/blog/${blog.id}`}>Comments</a></p>
                    </BlogEntry>
            )}
        </>
            )
}

export default Blog;