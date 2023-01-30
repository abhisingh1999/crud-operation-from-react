/** @format */

import { useState } from "react";
import Form from "./Components/Form";
import Table from "./Components/Table";
const App = () => {
  const [detail, setDetail] = useState({});
  const [person, setPerson] = useState([
    {
      name: "Antonio Hegmann",
      age: 82,
      gender: "Transgender person",
      email: "Gerald_Schaden@hotmail.com",
      phone: "(427) 906-0343 x6933",
      language: "Cambridgeshire",
      id: "1",
    },
    {
      name: "Mrs. Caleb Beer",
      age: 1,
      gender: "Female to male transgender man",
      email: "Diego.Morar28@gmail.com",
      phone: "(295) 587-2359 x6290",
      language: "Cambridgeshire",
      id: "2",
    },
    {
      name: "Noah Marquardt I",
      age: 3,
      gender: "Transexual",
      email: "Tara66@yahoo.com",
      phone: "1-342-226-4732 x2581",
      language: "Borders",
      id: "3",
    },
    {
      name: "Mr. Johanna Prosacco DVM",
      age: 33,
      gender: "T* man",
      email: "Connor.Larson@yahoo.com",
      phone: "(565) 370-7729 x32459",
      language: "Avon",
      id: "4",
    },
    {
      name: "Nora Nitzsche",
      age: 65,
      gender: "Neutrois",
      email: "Lina.Jaskolski19@yahoo.com",
      phone: "1-969-781-6871 x1618",
      language: "Avon",
      id: "5",
    },
    {
      name: "Jeanette Zulauf",
      age: 80,
      gender: "Cisgender woman",
      email: "Emerald.Batz@hotmail.com",
      phone: "(295) 609-0411",
      language: "Berkshire",
      id: "6",
    },
    {
      name: "Rickey Legros",
      age: 43,
      gender: "Demi-man",
      email: "Jo99@yahoo.com",
      phone: "994-452-3010 x734",
      language: "Cambridgeshire",
      id: "7",
    },
    {
      name: "Jeffery Emard",
      age: 4,
      gender: "T* woman",
      email: "Jaylon_Schiller20@gmail.com",
      phone: "(792) 632-2746 x1617",
      language: "Avon",
      id: "8",
    },
    {
      name: "Madeline Marquardt",
      age: 24,
      gender: "Omnigender",
      email: "Conner_Haag@gmail.com",
      phone: "(544) 202-3475",
      language: "Berkshire",
      id: "9",
    },
    {
      name: "Latoya Lueilwitz",
      age: 81,
      gender: "Male to female transgender woman",
      email: "Samir.Cronin98@gmail.com",
      phone: "790.562.4453 x71921",
      language: "Berkshire",
      id: "10",
    },
  ]);

  const addPerson = (newPerson) => {
    newPerson.id = String(person.length + 1);
    setPerson([...person, newPerson]);
  };

  const updatePerson = (newPerson) => {
    var personList = person.filter((value) => value.id != newPerson.id);
    personList.push(newPerson);
    setPerson(personList);
  };

  const deletePerson = (id) => {
    setPerson(person.filter((value) => value.id != id));
  };

  const editPerson = (id) => {
    setDetail(person.find((p) => p.id == id));
  };

  return (
    <div className="container my-3">
      <Form addPerson={addPerson} detail={detail} updatePerson={updatePerson} />
      <Table
        person={person}
        deletePerson={deletePerson}
        editPerson={editPerson}
      />
    </div>
  );
};

export default App;
