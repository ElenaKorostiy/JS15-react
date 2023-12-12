import { useForm, Controller } from 'react-hook-form';


export const MyForm = () => {
  const { handleSubmit, control, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div>
        <label>First Name</label>
        <Controller
          name="firstName"
          control={control}
          defaultValue=""
          rules={{ required: "First name is required" }}
          render={({ field }) => (
            <div>
              <input {...field} placeholder="First Name" />
              {errors.firstName && <p>{errors.firstName.message}</p>}
            </div>
          )}
        />
      </div>
      <br/>
      <div>
        <label>Last Name</label>
        <Controller
          name="lastName"
          control={control}
          defaultValue=""
          rules={{ required: "Last name is required" }}
          render={({ field }) => (
            <div>
              <input {...field} placeholder="Last Name" />
              {errors.lastName && <p>{errors.lastName.message}</p>}
            </div>
          )}
        />
      </div>
      <br/>
      <div>
        <label>City</label>
        <Controller
          name="city"
          control={control}
          defaultValue=""
          rules={{ required: "City is required" }}
          render={({ field }) => (
            <div>
              <input {...field} placeholder="City" />
              {errors.city && <p>{errors.city.message}</p>}
            </div>
          )}
        />
      </div>
      <br/>
      <button type="submit">Submit</button>
    </form>
  );
};
