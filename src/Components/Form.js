/** @format */

import { useEffect, useState } from "react";

const Form = ({ addStudent, details, updateStudent }) => {
  const [newStudent, setNewStudent] = useState({
    name: "",
    age: "",
    roll: "",
    gender: "",
    curriculum: "",
    subject: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    newStudent.id ? updateStudent(newStudent) : addStudent(newStudent);
  };

  useEffect(() => {
    setNewStudent(details);
  }, [details]);

  const checked = (sub) => {
    let subjectList = newStudent.subject;
    if (subjectList.includes(sub)) {
      subjectList = subjectList.filter((value) => value !== sub);
    } else {
      subjectList.push(sub);
    }
    setNewStudent({ ...newStudent, subject: subjectList });
  };

  return (
    <form className="container my-3" onSubmit={handleSubmit}>
      <input type="hidden" name="id" value={newStudent.id} />
      <div className="container my-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          value={newStudent.name}
          onChange={(e) => {
            setNewStudent({ ...newStudent, name: e.target.value });
          }}
        />
      </div>
      <div className="container my-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          type="text"
          name="age"
          id="age"
          className="form-control"
          value={newStudent.age}
          onChange={(e) => {
            setNewStudent({ ...newStudent, age: e.target.value });
          }}
        />
      </div>
      <div className="container my-3">
        <label htmlFor="roll" className="form-label">
          Roll.no
        </label>
        <input
          type="text"
          name="roll"
          id="roll"
          className="form-control"
          value={newStudent.roll}
          onChange={(e) => {
            setNewStudent({ ...newStudent, roll: e.target.value });
          }}
        />
      </div>
      <div className="container my-3">
        <label>Select your Gender</label>
      </div>
      <div className="container my-3 form-check">
        <input
          type="radio"
          id="male"
          className="form-check-input"
          name="gender"
          value="Male"
          checked={newStudent.gender === "Male"}
          onChange={(e) =>
            setNewStudent({ ...newStudent, gender: e.target.value })
          }
        />
        <label htmlFor="male" className="form-checke-label">
          Male
        </label>
      </div>
      <div className="container my-3 form-check">
        <input
          type="radio"
          id="female"
          className="form-check-input"
          name="gender"
          value="Female"
          checked={newStudent.gender === "Female"}
          onChange={(e) =>
            setNewStudent({ ...newStudent, gender: e.target.value })
          }
        />
        <label htmlFor="female" className="form-checke-label">
          Female
        </label>
      </div>
      <div className="container my-3">
        <select
          className="form-select"
          value={newStudent.curriculum}
          onChange={(e) =>
            setNewStudent({ ...newStudent, curriculum: e.target.value })
          }>
          <option>Select any Curriculum </option>
          <option value="Soccer">Soccer</option>
          <option value="Cricket">Cricket</option>
          <option value="Volleyball">Volleyball</option>
        </select>
      </div>
      <div className="container my-3">
        <label>Select Subjects</label>
      </div>
      <div className="container my-3 form-check">
        <input
          type="checkbox"
          id="maths"
          className="form-check-input"
          onChange={(e) => checked(e.target.value)}
          value="Maths"
          checked={newStudent.subject.includes("Maths")}
        />
        <label htmlFor="maths" className="form-check-label">
          Maths
        </label>
      </div>
      <div className="container my-3 form-check">
        <input
          type="checkbox"
          id="physics"
          className="form-check-input"
          onChange={(e) => checked(e.target.value)}
          value="Physics"
          checked={newStudent.subject.includes("Physics")}
        />
        <label htmlFor="physics" className="form-check-label">
          Physics
        </label>
      </div>
      <div className="container my-3 form-check">
        <input
          type="checkbox"
          id="chemistry"
          className="form-check-input"
          onChange={(e) => checked(e.target.value)}
          value="Chemistry"
          checked={newStudent.subject.includes("Chemistry")}
        />
        <label htmlFor="chemistry" className="form-check-label">
          Chemistry
        </label>
      </div>
      <div className="d-grid my-3">
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
};

export default Form;
