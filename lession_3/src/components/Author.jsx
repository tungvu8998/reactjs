import { useContext, useState } from 'react';
import { PostListContext } from './PostDataList';
import { BaseContext } from './context/BaseProvider';

function Author({ id, name, action, action1, listPost }) {
    const context = useContext(PostListContext);
    const baseContext = useContext(BaseContext);
    console.log("baseContext", baseContext);
    console.log("context", context);
    const [isEdit, setIsEdit] = useState(false);
    const [authorValue, setAuthorValue] = useState(name);
    const iconPenClick = () => {
        // let likeNumberTemp = likeNumber + 1;
        console.log("edit author");
        let isEditTemp = !isEdit;
        setIsEdit(isEditTemp);
    };
    const changeAuthorHandle = (event) => {
        setAuthorValue(event.target.value);
        action(event.target.value)
        let newList = [];
        if (context) {
            context.postlist.forEach(element => {
                if(element.id == id) {
                    element.author = event.target.value;
                }
                newList.push(element)
            });
            context.setPostList(newList);
        }
        
    };
    return <> 
        {isEdit ? 
            <div>
                <input type="text" value={authorValue} onChange={changeAuthorHandle}></input>
            </div> : <p>made by <i>{authorValue}</i></p>}
        <i onClick={iconPenClick} className="fa-solid fa-pen"></i>
        <br></br>
    </>
}



export default Author;