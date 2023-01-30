/** @format */

import { useState } from "react";
import Form from "./Components/Form";
import Table from "./Components/Table";

function App() {
  const [studentList, setStudentList] = useState([
    {
      name: "Abhishek",
      roll: 1,
      age: 24,
      gender: "Male",
      curriculum: "Soccer",
      subject: ["Maths"],
      id: "1",
    },
    {
      name: "Ms. Chelsea Farrell",
      age: 95,
      roll: 7,
      gender: "Female",
      curriculum: "Cricket",
      subject: ["Maths", "Physics"],
      id: "2",
    },
    {
      name: "Julie Olson II",
      age: 42,
      roll: 41,
      gender: "Female",
      curriculum: "Volleyball",
      subject: ["Physics"],
      id: "3",
    },
    {
      name: "Lorene Berge",
      age: 12,
      roll: 35,
      gender: "Female",
      curriculum: "Cricket",
      subject: ["Chemistry", "Maths"],
      id: "4",
    },
    {
      name: "Gilberto Watsica",
      age: 44,
      roll: 68,
      gender: "Male",
      curriculum: "Volleyball",
      subject: ["Chemistry"],
      id: "5",
    },
    {
      name: "Ignacio MacGyver",
      age: 12,
      roll: 0,
      gender: "Male",
      curriculum: "curriculum 5",
      subject: ["Physics"],
      id: "6",
    },
  ]);

  const addStudent = (Newstudent) => {
    Newstudent.id = String(studentList.length + 1);
    setStudentList([...studentList, Newstudent]);
  };

  const deleteStudent = (id) => {
    setStudentList(studentList.filter((value) => value.id !== id));
  };

  const [details, setDetails] = useState({
    name: "",
    age: "",
    roll: "",
    gender: "",
    curriculum: "",
    subject: [],
  });

  const editStudent = (id) => {
    setDetails(studentList.find((value) => value.id === id));
  };

  const updateStudent = (newStd) => {
    var student = studentList.filter((value) => value.id !== newStd.id);
    student.push(newStd);
    setStudentList(student);
  };
  // const [student, setStudent] = useState({});
  // const updateStudent = (newStd) => {
  //   var a = parseInt(newStd.id) - 1;
  //   setStudent(studentList.splice(a, 1, newStd));
  //   // student.push(newStd);
  //   setStudentList(student);
  // };
  return (
    <div className="container my-3">
      <Form
        addStudent={addStudent}
        details={details}
        updateStudent={updateStudent}
      />
      <Table
        studentList={studentList}
        deleteStudent={deleteStudent}
        editStudent={editStudent}
      />
    </div>
  );
}

export default App;
