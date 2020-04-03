import React, { useState, useEffect } from 'react';
import { BlogEntry, AuthorLine, CommentEntry } from './BlogStyles';
import getData from '../utils/getData';

const SingleBlog = props => {
    const[blog, setBlog] = useState({blog:{},comments:[]});

    useEffect( () => {
        const getBlog = async() => {
            const { blogId } = props.match.params;
            const blogData = await getData(`http://localhost:5000/api/blogs/${blogId}`);
            setBlog(blogData);
        }
        getBlog();
    },[props.match.params]);

    return (
        <>
            {blog.blog.id !== undefined ? 
                <BlogEntry>
                    <h2>{blog.blog.title}</h2>
                    <AuthorLine>
                        <p>{blog.blog.username}</p>
                        <p>{blog.blog.post_date}</p>
                    </AuthorLine>
                    <p>{blog.blog.blog_entry}</p>
                </BlogEntry>
                : <div> </div>}
            {blog.comments.length !== 0 ? 
            <>
                {blog.comments.map(comment => (
                    <CommentEntry>
                        <h3>{comment.title}</h3>
                        <AuthorLine>
                            <p>{comment.username}</p>
                            <p>{comment.post_date}</p>
                        </AuthorLine>
                        <p>{comment.comment}</p>
                    </CommentEntry>
                ))}
            </>
            : <p>No Comments</p>}
            <a href="/">Back to Blog</a>
        </>

    )
}

export default SingleBlog;