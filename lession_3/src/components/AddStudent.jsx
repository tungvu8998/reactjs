import { useContext } from "react";
import { StudentListContext } from "./StudentDataList";
import { useState } from "react";

function AddStudent() {
  const context = useContext(StudentListContext);
  console.log("context", context);
  const [nameAdd, setNameAdd] = useState('');
  const [ageAdd, setAgeAdd] = useState('');
  const [addressAdd, setAddressAdd] = useState('');
  const [id, setId] = useState("1000000");
  const addStudent = evt => {
      console.log(evt);
      if (nameAdd.length > 0 && addressAdd.length > 0) {
          let obj = { id: id, name: nameAdd, age: ageAdd, address: addressAdd};
          // let new_post = postlist.push(obj);
          let newStudent = [...context.studentList, obj];
          context.setStudentList(newStudent);
          let idTemp = Number(id) + 1;
          setId(idTemp.toString());
      } else {
          alert('Nhap title or content');
      }
  }

  const nameAddChange = (evt) => {
    setNameAdd(evt.target.value);
  }

  const ageAddChange = (evt) => {
    setAgeAdd(evt.target.value);
  }
  const addressAddChange = (evt) => {
    setAddressAdd(evt.target.value);
  }
  return <div>
      <label htmlFor="nameInput">Name</label>
      <input type='text' id="nameInput" placeholder='name' value={nameAdd} onChange={nameAddChange}></input> <br></br>
      <label htmlFor="ageInput">Age</label>
      <input type='text' id="ageInput" placeholder='age' value={ageAdd} onChange={ageAddChange}></input><br></br>
      <label htmlFor="address">Address</label>
      <input type='text' id="addressInput" placeholder='address' value={addressAdd} onChange={addressAddChange}></input><br></br>
      <br></br>
      <button onClick={addStudent}>Add student</button>
  </div>
}
export default AddStudent;