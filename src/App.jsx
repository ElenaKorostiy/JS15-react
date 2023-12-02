import React from 'react';
import { Formik, Form, Field} from "formik";
import { Input } from "./input";
import { InputWrap } from './input-wrap';


import "./App.css"

export const App = () => {
    return (
    <div>
  <InputWrap>
    {(value, onChange) => <Input value={value} onChange={onChange} />}
  </InputWrap>
  <Formik
    initialValues={{ firstname: "" }}
    enableReinitialize
    onSubmit={(values, formikBag) => {
      console.log(values);
      console.log(formikBag);
    }}
  >
    {(props) => {
      console.log(props);
      return (
        <Form>
          <label>
            <Field name="firstname"/>
          </label>
          <button type="submit">Submit</button>
        </Form>
      );
    }}
  </Formik>
</div>
  );
};
