import { Formik } from "formik";
import { Button } from "./components/button";
import { Input } from "./input";
import { InputWrap } from './input-wrap';
import { Counter } from "./components/counter";
import { CheckoutForm } from "./components/form";
import { FormWithHook } from "./components/form-with-hook";
import { SignUp, SignUpHook } from "./components/signup";


import "./App.css"

export const App = () => {
    return (
      <div>
        <Counter>
        {(count, onClick) => {
          return <Button text={count} onClick={onClick} />;
        }}
      </Counter>
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
            return <CheckoutForm />; 
      }}
        </Formik>
        <FormWithHook />
       <br />
      <SignUp />
      <br />
      <SignUpHook />
</div>
  );
};
