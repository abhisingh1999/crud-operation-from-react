import Tr from "./Tr";
const Table = ({ person, deletePerson, editPerson }) => {
  return (
    <table className="table table-dark table-striped">
      <thead>
        <tr>
          <th>name</th>
          <th>age</th>
          <th>gender</th>
          <th>email</th>
          <th>phone</th>
          <th>language</th>
          <th>Actions</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {person.map((value, index) => {
          return (
            <Tr
              value={value}
              key={index}
              deletePerson={deletePerson}
              editPerson={editPerson}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
