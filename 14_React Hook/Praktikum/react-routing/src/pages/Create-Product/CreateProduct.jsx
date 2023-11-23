import Navbar from "../../components/fragments/Navbar/Navbar";
import Form from "../../components/fragments/Form/Form";
import React, { useEffect } from "react";

const CreateProduct = () => {
  useEffect(() => {
    // Efek samping: Menampilkan alert "Welcome" ketika komponen pertama kali dirender
    alert("Welcome");

    return () => {};
  }, []);

  return (
    <div>
      {alert("Welcome")}
      <Navbar />
      <Form />
    </div>
  );
};

export default CreateProduct;
