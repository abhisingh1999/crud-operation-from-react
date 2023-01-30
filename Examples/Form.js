/** @format */

import { useEffect } from "react";
import { useState } from "react";

const Form = ({ addPerson, detail, updatePerson }) => {
  // const [personDetailName, setpersonDetailName] = useState("");
  // const [personDetailEmail, setpersonDetailEmail] = useState("");
  // const [personDetailGender, setpersonDetailGender] = useState("");
  // const [personDetailPhone, setpersonDetailPhone] = useState("");
  // const [personDetailLanguage, setpersonDetailLanguage] = useState("");
  const [personDetail, setpersonDetail] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    // addpersonDetail({
    //   name: personDetailName,
    //   age: 0,
    //   gender: personDetailGender,
    //   email: personDetailEmail,
    //   phone: personDetailPhone,
    //   language: personDetailLanguage,
    // });
    personDetail.id ? addPerson(personDetail) : updatePerson(personDetail);
  };

  useEffect(() => {
    setpersonDetail(detail);
  }, [detail]);

  return (
    <form className="container my-3" onSubmit={handleSubmit}>
      <input type="hidden" name="id" value={personDetail.id} />
      <div className="my-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="form-control"
          // value={personDetailName}
          value={personDetail.name}
          // onChange={(e) => setpersonDetailName(e.target.value)}
          onChange={(e) => setpersonDetail({ name: e.target.value })}
        />
      </div>
      <div className="my-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="form-control"
          // value={personDetailEmail}
          value={personDetail.email}
          onChange={(e) =>
            setpersonDetail({ ...personDetail, email: e.target.value })
          }
        />
      </div>
      <div className="my-3">
        <label htmlFor="phone" className="form-label">
          Phone.no
        </label>
        <input
          type="text"
          id="phone"
          className="form-control"
          value={personDetail.phone}
          // value={personDetailPhone}
          onChange={(e) =>
            setpersonDetail({ ...personDetail, phone: e.target.value })
          }
        />
      </div>

      <div className="my-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          type="text"
          id="age"
          className="form-control"
          // value={personDetailage}
          value={personDetail.age}
          onChange={(e) =>
            setpersonDetail({ ...personDetail, age: e.target.value })
          }
        />
      </div>
      <div className="form-check my-3">
        <input
          type="radio"
          name="gender"
          id="male"
          className="form-check-input"
          defaultChecked={personDetail.gender === "Male"}
          value="Male"
          onClick={(e) =>
            setpersonDetail({ ...personDetail, gender: e.target.value })
          }
        />
        <label htmlFor="male" className="form-check-label">
          Male
        </label>
      </div>
      <div className="form-check my-3">
        <input
          type="radio"
          name="gender"
          id="female"
          className="form-check-input"
          defaultChecked={personDetail.gender === "FeMale"}
          value="FeMale"
          onClick={(e) =>
            setpersonDetail({ ...personDetail, gender: e.target.value })
          }
        />
        <label htmlFor="female" className="form-check-label">
          Female
        </label>
      </div>
      <div className=" my-3">
        <select
          className="form-select"
          value={personDetail.language}
          // value={personDetailLanguage}
          onChange={(e) =>
            setpersonDetail({ ...personDetail, language: e.target.value })
          }>
          <option>C</option>
          <option>C++</option>
          <option>HTMl</option>
          <option>Javascript</option>
        </select>
      </div>
      <div className="d-grid my-3">
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
};

export default Form;
