import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import GetUser from "./components/GetUser";
import { getUser } from "./helpers/helper";
import { addUser } from "./helpers/helper";
import Parser from "html-react-parser";

function App() {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const id = "#" + Math.floor(Math.random() * 500).toString();
    addUser(
      e.target[0].value,
      e.target[1].value,
      e.target[2].value,
      e.target[3].value,
      e.target[4].value,
      id
    );
    setOutput(`Your ID ${id}`);
    e.target.reset();
  };

  const getUserFromFirebase = (e) => {
    setOutput("");
    setLoading(true);
    e.preventDefault();
    getUser(e.target[0].value).then((res) => {
      !res
        ? setOutput("No Data Found")
        : setOutput(`
        <h2>Showing for id: ${e.target[0].value}</h2>
        <table>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>State</th>
            <th>City</th>
            <th>Pincode</th>
          </tr>
          <tr>
            <td>${res.firstName}</td>
            <td>${res.lastName}</td>
            <td>${res.userState}</td>
            <td>${res.userCity}</td>
            <td>${res.userPin}</td>
          </tr>
        </table>
      `);
      setLoading(false);
    });
  };

  return (
    <>
      <div className="App">
        <Form submit={submit} />
        <GetUser onClick={getUserFromFirebase} />
        {loading ? "Loading..." : ""}
        <div className="output">{Parser(output)}</div>
      </div>
    </>
  );
}

export default App;
