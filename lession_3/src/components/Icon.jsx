import { useContext } from "react";
import { PostListContext } from "./PostDataList";

function Icon({ id }) {
    const context = useContext(PostListContext);
    const posts = context?.postlist;
    const post = posts?.filter(e => e.id == id)[0];
    const like = post?.like;
    const heart = post?.heart;
    const shared = post?.shared;
    const heartChange = () => {
        let newList = [];
        posts.forEach(element => {
            if (element.id == id) {
                element.heart += 1;
            }
            newList.push(element)
        });
        context?.setPostList(newList);
    }
    const likeChange = () => {
        let newList = [];
        posts.forEach(element => {
            if (element.id == id) {
                element.like += 1;
            }
            newList.push(element)
        });
        context?.setPostList(newList);
    }

    const sharedChange = () => {
        let newList = [];
        posts.forEach(element => {
            if (element.id == id) {
                element.shared = Number(element.shared);
                // element.shared += "";
                element.shared += 1;
            }
            newList.push(element)
        });
        context?.setPostList(newList);
    }
    return <>
        <i class="fa-solid fa-heart" onClick={heartChange}></i> {heart}
        <i class="fa-solid fa-thumbs-up" onClick={likeChange}></i> {like}
        <i class="fa-solid fa-share"  onClick={sharedChange}></i> {shared}
    </>
};

export default Icon;