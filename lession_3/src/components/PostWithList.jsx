import React, { useContext, useState } from 'react';
import './post.css';
import Comment from './Comment';
import Author from './Author';
import Icon from './Icon';
import { Navigate, useLocation, useMatch, useNavigate, useParams } from 'react-router-dom';
import { PostListContext } from './PostDataList';

function PostWithList(props) {
    const match = useMatch('home/post/:id');
    console.log("match", match);
    const context = useContext(PostListContext);
    const postList = context.postlist;
    console.log("Post", props);
    const { postId } = useParams();
    const navigate = useNavigate();
    console.log(postId);
    // const context = useContext(PostListContext);
    const postCheck = postList.filter(ele => ele.id == postId);
    const post = postCheck.length > 0 ? postCheck[0] : null;
    const [theme, setTheme] = useState({ backgroundColor: 'white' });
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

    const deletePost = () => {
        navigate("/posts");
    }

    const deletePostHandle = () => {
        let listTemp = postList;
        for (let index = 0; index < listTemp.length; index++) {
            if(listTemp[index].id == postId) {
                listTemp.splice(index, 1); 
            }
        }
        context.setPostList(listTemp);
        navigate("/home/post");
    }

    return <React.Fragment>
        {/* <PostListContext.Provider value={{ postlist, setPostList }}> */}
            {post != null ? (<><h2>{name} <i onClick={deletePostHandle} class="fa-solid fa-trash"></i></h2>
                <textarea id="w3review" name="w3review" rows="4" cols="50" value={content} onChange={textChangeHandle}></textarea>
                <p>~{author}~</p>
                <Author id={post?.id} name={author} action={setAuthor}></Author>
                {likeNumber} <i onClick={iconLikeClick} className="fa fa-thumbs-up"></i>
                <br></br>
                <Icon id={post?.id}></Icon>
                <Comment></Comment>
                <button onClick={deletePost}>Delete Post</button>
                <p style={theme}>Length of content: <span className='bold'>{showLength()}</span></p></>) :
                <Navigate to="/404"></Navigate>}

            <button onClick={changeThemeClick}></button>
        {/* </PostListContext.Provider> */}

    </React.Fragment>
}

export default PostWithList;
