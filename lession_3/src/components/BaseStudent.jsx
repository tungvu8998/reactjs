import { useState } from "react";
import { STUDENTS } from "../common/constant";
import { useEffect } from "react";
import api from "../services/api";

import { Outlet } from "react-router-dom";
import { StudentListContext } from "./StudentDataList";

function BaseStudent() {
  const [studentList, setStudentList] = useState(STUDENTS);
  useEffect(() => {
      const fetchData = async () => {
          const data = await api.getPost;
          console.log("=================+++++data của chúng ta đây=====>", data);
          if (data?.length > 0) {
              setStudentList(data)
          }
      }

      fetchData();
  }, []);

  return <StudentListContext.Provider value={{ studentList, setStudentList }}>
      <Outlet></Outlet>
  </StudentListContext.Provider>
}

export default BaseStudent;