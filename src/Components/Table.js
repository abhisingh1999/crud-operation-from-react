/** @format */

import Tr from "./Tr";

const Table = ({ studentList, deleteStudent, editStudent }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Roll.no</th>
          <th>Gender</th>
          <th>Curriculum</th>
          <th>Subject</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {studentList.map((value, index) => {
          return (
            <Tr
              value={value}
              key={index}
              deleteStudent={deleteStudent}
              editStudent={editStudent}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
