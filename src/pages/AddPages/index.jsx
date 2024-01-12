import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./index.scss";
import { useNavigate } from "react-router-dom";

const AddPages = () => {
  const navigate = useNavigate();
  const [table, setTable] = useState([])

  function handleAdd(val) {
    fetch("http://localhost:3000/", {
      method: "POST",
      body: JSON.stringify(val),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    navigate("/");
  }
  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => setTable(data));
  }

  function Delete(id) {
    fetch("http://localhost:3000/" +id, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {getAll()});
  }
  return (
    <>
      <Formik
        initialValues={{ icon: "", name: "", description: "" }}
        validationSchema={Yup.object({
          icon: Yup.string().required("Required"),
          name: Yup.string().required("Required"),
          description: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            handleAdd(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        <div className="formik">
          <div className="form">
            {" "}
            <Form>
              <label htmlFor="icon">Icon</label>
              <Field name="icon" type="text" />
              <ErrorMessage name="icon" />

              <label htmlFor="name">Name</label>
              <Field name="name" type="text" />
              <ErrorMessage name="name" />

              <label htmlFor="description">description</label>
              <Field name="description" type="description" />
              <ErrorMessage name="description" />

              <button type="submit">Submit</button>
            </Form>
          </div>
        </div>
      </Formik>

      <div className="table">
        {table.map((x)=><table>
          <tr>
            <th>Icon</th>
            <th>Name</th>
            <th>Description</th>
            <th>Delete</th>
          </tr>
          <tr>
            <td className={`${x.icon}`}></td>
            <td>{x.name}</td>
            <td>{x.description}</td>
            <button onClick={()=>Delete(x._id)}>Delete</button>
          </tr>
        </table>)}
        
      </div>
    </>
  );
};
export default AddPages;
