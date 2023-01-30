/** @format */

const Tr = ({ value, deleteStudent, editStudent }) => {
  return (
    <tr>
      <td>{value.name}</td>
      <td>{value.age}</td>
      <td>{value.roll}</td>
      <td>{value.gender}</td>
      <td>{value.curriculum}</td>
      <td>{value.subject.join("/")}</td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => {
            deleteStudent(value.id);
          }}>
          Delete
        </button>
      </td>
      <td>
        <button
          className="btn btn-info"
          onClick={() => {
            editStudent(value.id);
          }}>
          Edit
        </button>
      </td>
    </tr>
  );
};

export default Tr;
