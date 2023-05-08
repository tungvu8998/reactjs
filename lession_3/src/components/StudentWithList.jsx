import React, { useContext, useState } from 'react';
import './post.css';
import Comment from './Comment';
import Author from './Author';
import Icon from './Icon';
import { Navigate, useMatch, useNavigate, useParams } from 'react-router-dom';

import { StudentListContext } from './StudentDataList';

function StudentWithList(props) {
    const match = useMatch('home/student/:id');
    console.log("match", match);
    const context = useContext(StudentListContext);
    const studentList = context.studentList;
    console.log("Post", props);
    const { studentId } = useParams();
    const navigate = useNavigate();
    console.log(studentId);
    // const context = useContext(PostListContext);
    const studentCheck = studentList.filter(ele => ele.id == studentId);
    const student = studentCheck.length > 0 ? studentCheck[0] : null;
    const name = student?.address;
    const deletePostHandle = () => {
        let listTemp = studentList;
        for (let index = 0; index < listTemp.length; index++) {
            if(listTemp[index].id == studentId) {
                listTemp.splice(index, 1); 
            }
        }
        context.setStudentList(listTemp);
        navigate("/home/student");
    }

    return <React.Fragment>
            {student != null ? (<><h2>{name} <i onClick={deletePostHandle} class="fa-solid fa-trash"></i></h2>
               
               </>) :
                <Navigate to="/404"></Navigate>}

            
        {/* </PostListContext.Provider> */}

    </React.Fragment>
}

export default StudentWithList;