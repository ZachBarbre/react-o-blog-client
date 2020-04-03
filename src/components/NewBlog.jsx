import React, { useState } from 'react';
import styled from 'styled-components';

const BlogIput = styled.section`
margin: 2% auto;
`;

const InputLabel = styled.label`
display: block;
margin: 2%;
`;

const NewBlog = () => {
    const [blogTitle, setBlogTitle] = useState('');
    const [blogEntry, setBlogEntry] = useState('');

    const handleSubmit = event => {
        console.log('submitted', event)
    }

    return (
        <BlogIput>
            <form onSubmit={handleSubmit}>

                    <InputLabel>Blog Title: 
                        <input 
                        type='text' 
                        placeholder='Title' 
                        value={blogTitle}
                        onChange={event => setBlogTitle(event.target.value)}
                        required
                        />
                    </InputLabel>
                
                    <InputLabel>Blog Entry:
                        <textarea 
                        placeholder='Enter blog...' 
                        value={blogEntry}
                        onChange={event => setBlogEntry(event.target.value)}
                        required />
                    </InputLabel>
                    <button>Add Blog</button>
            </form>
        </BlogIput>
    )
}

export default NewBlog;