import { createContext, useContext, useEffect, useState } from "react";
import Post from "./Post";
import NoData from "./shared/NoData";
import { Link } from "react-router-dom";
import api, { api_authen } from "../services/api";

export const PostListContext = createContext();

function PostDataList() {
    const postListContext = useContext(PostListContext);
    const postlist = postListContext.postlist;
    const [isShowAdd, setIsShowAdd] = useState(false);

    const renderAllPost = () => {
        const posts = postlist.map(value => <Post key={value.id} post={value} />);
        console.log(posts);
        return posts;
    }

    const renderPostByStatus = (statusParam) => {
        let posts = postlist.filter(value => value.status === statusParam);
        console.log("renderPostByStatus", posts)
        // posts = posts.map(value => <Post key={value.id} post={value}/>);
        return posts;
    }
    const showAddForm = () => {
        let temp = !isShowAdd;
        setIsShowAdd(temp);
    }

    return <>
            <div>
                <Link key="adds" to="adds">Add new post</Link>
                {/* <button onClick={showAddForm}>Add new</button>
                {isShowAdd ? <AddPost></AddPost> : null} */}
            </div>
            <h1>Posts:</h1>
            {/* <PostListContext.Provider value={{postlist: postlist, setPostList: setPostList}}> */}

            <details>
                <summary>New posts:</summary>
                <div>
                    {/* {renderPostByStatus("new").length > 0 ? renderPostByStatus("new").map(value => <Post key={value.id} post={value} action={setPostList} listPost={postlist} />) : <NoData />} */}
                    {renderPostByStatus("new").length > 0 ? renderPostByStatus("new").map(
                        value => <><Link key={value.id} to={value.id} state={value}>{value.title} - {value.content.substring(0, 10)}</Link> <br></br></>) : <NoData />}
                </div>
            </details>

            <details>
                <summary>Hot posts:</summary>
                <div>
                    {/* {renderPostByStatus("hot").length > 0 ? renderPostByStatus("hot").map(value => <Post key={value.id} post={value} action={setPostList} listPost={postlist} />) : <NoData />} */}
                    {renderPostByStatus("hot").length > 0 ? renderPostByStatus("hot").map(
                        value => <><Link key={value.id} to={value.id} state={value}>{value.title} - {value.content.substring(0, 10)}</Link> <br></br></>) : <NoData />}
                </div>
            </details>
            <details>
                <summary>Old posts:</summary>
                <div>
                    {/* {renderPostByStatus("old").length > 0 ? renderPostByStatus("old").map(value => <Post key={value.id} post={value} action={setPostList} listPost={postlist} />) : <NoData />} */}
                    {renderPostByStatus("old").length > 0 ? renderPostByStatus("old").map(
                        value => <><Link key={value.id} to={value.id} state={value}>{value.title} - {value.content.substring(0, 10)}</Link> <br></br></>) : <NoData />}
                </div>
            </details>
           
    </>
}

export default PostDataList;