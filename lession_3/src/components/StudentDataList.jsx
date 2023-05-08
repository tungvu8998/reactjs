import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import Post from "./Post";
import { Link } from "react-router-dom";
import NoData from "./shared/NoData";
export const StudentListContext = createContext();

function StudentDataList() {
  const studentListContext = useContext(StudentListContext);
  const studentList = studentListContext.studentList;

  const renderStudentByName = (nameParam) => {
    let students = studentList.filter(value => value.status === nameParam);
    console.log("renderPostByStatus", students);
    // posts = posts.map(value => <Post key={value.id} post={value}/>);
    return students;
  };

  return <>
    <div>
      <Link key="add" to="add">Add new student</Link>

    </div>
    <h1>Students:</h1>

    <details>
      <summary>Students:</summary>
      <div>
      
        {renderStudentByName("name").length > 0 ? renderStudentByName("name").map(
          value => <><Link key={value.id} to={value.id} state={value}>{value.address} - {value.address.substring(0, 10)}</Link> <br></br></>) : <NoData />}
      </div>
    </details>



  </>;
}

export default StudentDataList;