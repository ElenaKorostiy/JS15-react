import { useForm } from 'react-hook-form';
import { InputField } from './components/input';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  city: yup.string().required(),
  
}).required();

export const App = () => {
   const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

   const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <br/>
      <InputField label="First Name" {...register("firstName")} />
      <p>{errors.firstName?.message}</p>
      <br/>
      <InputField label="Last Name" {...register("lastName")} />
      <p>{errors.lastName?.message}</p>
      <br/>
      <InputField label="City" {...register("city")} />
      <p>{errors.city?.message}</p>
      <br/>
      <button type="submit">Submit</button>
    </form>
  );
};
