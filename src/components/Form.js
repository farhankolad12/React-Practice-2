import React from "react";

const Form = ({ submit }) => {
  return (
    <>
      <form onSubmit={submit}>
        <input type={"text"} placeholder="Enter First Name" />
        <br />
        <input type={"text"} placeholder="Enter Last Name" />
        <br />
        <input type={"text"} placeholder="Enter State" />
        <br />
        <input type={"text"} placeholder="Enter City" />
        <br />
        <input type={"number"} placeholder="Enter Pincode" />
        <br />
        <input type={"submit"} placeholder="Submit" />
        <br />
      </form>
    </>
  );
};

export default Form;
