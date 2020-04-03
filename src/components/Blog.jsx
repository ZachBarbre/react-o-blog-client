import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import getData from '../utils/getData';

const BlogEntry = styled.section`
border: 1px solid;
width: 640px;
margin: 1% auto;
`;

const AuthorLine = styled.div`
display: flex;
justify-content: space-around;
`;

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
                    <BlogEntry>
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