import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { InputField } from "../../components/input";

import "./contact.css";



const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().required().email('Invalid email address').matches(/@/, 'Email must contain "@" symbol'),
  message: yup.string().required(),

}).required();

export const Contact = () => {

     const { register, handleSubmit, formState:{ errors } } = useForm({
       resolver: yupResolver(schema)
  });

    const onSubmit = (data) => console.log(data);
    
    return (
    <div>
      <h1>Contact Page</h1>
       <Link  to="/">
           <button>Go back</button>
       </Link>
       <br/>
       <br/>
      <form  onSubmit={handleSubmit(onSubmit)}>
          <br />
          <br/>
      <InputField label="Name" {...register("name")} />
      <p>{errors.name?.message}</p>
      <br/>
      <InputField label="Email" {...register("email")} />
      <p>{errors.email?.message}</p>
      <br/>
      <InputField label="Message" {...register("message")} />
      <p>{errors.message?.message}</p>
      <br/>
      <button  type="submit">Submit</button>
    </form> 
    </div>
    )
};