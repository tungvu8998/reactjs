import { useContext } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { PostListContext } from "./PostDataList";

function AddPost() {
    const context = useContext(PostListContext);
    console.log("context", context);
    const [titleAdd, setTitleAdd] = useState('');
    const [contentAdd, setContentAdd] = useState('');
    const [statusAdd, setStatusAdd] = useState('old');
    const [id, setId] = useState("1000000");
    const addPost = evt => {
        console.log(evt);
        if (titleAdd.length > 0 && contentAdd.length > 0) {
            let obj = { id: id, title: titleAdd, status: statusAdd, content: contentAdd, like: 0, heart: 0, shared: "0", author:"l2t" };
            // let new_post = postlist.push(obj);
            let new_post = [...context.postlist, obj];
            context.setPostList(new_post);
            let idTemp = Number(id) + 1;
            setId(idTemp.toString());
        } else {
            alert('Nhap title or content');
        }
    }

    const titleAddChange = (evt) => {
        setTitleAdd(evt.target.value);
    }

    const contentAddChange = (evt) => {
        setContentAdd(evt.target.value);
    }
    const statusAddChange = (evt) => {
        setStatusAdd(evt.target.value);
    }
    return <div>
        <label htmlFor="titleInput">Title</label>
        <input type='text' id="titleInput" placeholder='title' value={titleAdd} onChange={titleAddChange}></input> <br></br>
        <label htmlFor="contentInput">Content</label>
        <input type='text' id="contentInput" placeholder='content' value={contentAdd} onChange={contentAddChange}></input><br></br>
        <label htmlFor="status">Status</label>
        <select id="status" value={statusAdd} onChange={statusAddChange}>
            <option value='hot'>Hot</option>
            <option value='new'>New</option>
            <option value='old'>Old</option>
        </select>
        <br></br>
        <button onClick={addPost}>Add post</button>
    </div>
}
export default AddPost;