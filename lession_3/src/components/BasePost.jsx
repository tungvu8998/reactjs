import { Outlet } from "react-router-dom";
import { PostListContext } from "./PostDataList";
import { POST_LIST } from "../common/constant";
import { useEffect, useState } from "react";
import api from "../services/api";

function BasePost() {
    const [postlist, setPostList] = useState(POST_LIST);
    useEffect(() => {
        const fetchData = async () => {
            const data = await api.getPost;
            console.log("=================+++++data của chúng ta đây=====>", data);
            if (data?.length > 0) {
                setPostList(data)
            }
        }

        fetchData();
    }, []);

    return <PostListContext.Provider value={{ postlist, setPostList }}>
        <Outlet></Outlet>
    </PostListContext.Provider>
}

export default BasePost;