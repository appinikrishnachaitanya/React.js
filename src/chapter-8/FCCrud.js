import { useState } from "react";
import axios from "axios";
function FCCrud(props) {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [city, setcity] = useState("");
  const [balance, setbalance] = useState("");

  function getCustomerData(e) {
    e.preventDefault();
    const customer = {
      name: name,
      age: age,
      city: city,
      balance: balance,
    };

    console.log(customer);

    axios
      .post("http://localhost:8080/api/v1/customer", customer)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("Done");
      });
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>This is the {props.name}</h1>
      <p>
        <span style={{ color: "red" }}>*</span>All required Feilds
      </p>

      <form action="" method="POST" onSubmit={getCustomerData}>
        Name:<br></br>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <br></br>
        Age:<br></br>
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={age}
          onChange={(e) => {
            setage(e.target.value);
          }}
        />
        <br></br>
        city:<br></br>
        <input
          type="text"
          name="city"
          placeholder="City"
          value={city}
          onChange={(e) => {
            setcity(e.target.value);
          }}
        />
        <br></br>
        balance:<br></br>
        <input
          type="text"
          name="balance"
          placeholder="Balance"
          value={balance}
          onChange={(e) => {
            setbalance(e.target.value);
          }}
        />
        <br></br>
        Submit:<br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FCCrud;
