import React, { useContext, useState } from 'react';
import './post.css';
import Comment from './Comment';
import Author from './Author';
import { PostListContext } from '../App';
import Icon from './Icon';
import { useLocation } from 'react-router-dom';

function Post(props) {
    console.log("Post", props);
    const location = useLocation();
    console.log("location", location);
    const post = location?.state;
    // const context = useContext(PostListContext);
    const[theme, setTheme] = useState({backgroundColor: 'white'});
    const [content, setContent] = useState(post?.content);
    const [likeNumber, setLikeNumber] = useState(0);
    const [author, setAuthor] = useState(post?.author);
    const name = post?.title;
    // const author = props.post?.author;
    // const content = props.post?.content;
    const showLength = () => {
        return content.length;
    }

    const textChangeHandle = (event) => {
        console.log(event);
        setContent(event.target.value);
    }

    const iconLikeClick = () => {
        // let likeNumberTemp = likeNumber + 1;
        setLikeNumber(current => ++current);
        
    }
    
    const changeThemeClick = () => {
        let obj = { backgroundColor: 'black' };
        setTheme(obj);
    }

    return <React.Fragment>
        <h2>{name}</h2>
        <i class="fa-light fa-trash"></i>
        <textarea id="w3review" name="w3review" rows="4" cols="50" value={content} onChange={textChangeHandle}></textarea>
        <p>~{author}~</p>
        <Author id={post?.id} name={author} action={setAuthor}></Author>
        {likeNumber} <i onClick={iconLikeClick} className="fa fa-thumbs-up"></i>
        <br></br>
        <Icon id={post?.id}></Icon>
        <Comment></Comment>
        <p style={theme}>Length of content: <span className='bold'>{showLength()}</span></p>
        {/* <button onClick={changeThemeClick}></button> */}
    </React.Fragment>
}

export default Post;
