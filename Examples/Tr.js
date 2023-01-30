const Tr = ({ value, deletePerson, editPerson }) => {
  return (
    <tr>
      <td>{value.name}</td>
      <td>{value.age}</td>
      <td>{value.gender}</td>
      <td>{value.email}</td>
      <td>{value.phone}</td>
      <td>{value.language}</td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => {
            deletePerson(value.id);
          }}
        >
          Delete
        </button>
      </td>
      <td>
        <button
          className="btn btn-info"
          onClick={() => {
            editPerson(value.id);
          }}
        >
          Edit
        </button>
      </td>
    </tr>
  );
};

export default Tr;
