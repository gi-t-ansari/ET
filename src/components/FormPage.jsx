import React from "react";
import Form from "./Form";
import NavBar from "./Navbar";

const FormPage = () => {
  return (
    <div>
      <NavBar display={false} />
      <Form />
    </div>
  );
};

export default FormPage;
