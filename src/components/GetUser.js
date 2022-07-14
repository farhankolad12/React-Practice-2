import React from "react";

const GetUser = ({ onClick }) => {
  return (
    <form onSubmit={onClick}>
      <input type={"text"} placeholder="Enter a id" />
      <input type={"submit"} placeholder="Get Details" />
    </form>
  );
};

export default GetUser;
