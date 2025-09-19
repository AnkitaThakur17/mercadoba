
import { useForm, Controller } from "react-hook-form";

 function SimpleForm() {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      username: "",
      dob: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
<div className="hero-section">
      <form className="hero-form"onSubmit={handleSubmit(onSubmit)} style={{ padding: "20px" }}>

      <Controller
        name="username"
        control={control}
        rules={{ required: "Username is required" }}
        render={({ field, fieldState }) => (
          <div style={{ marginBottom: "10px" }}>
            <input
              {...field}
              type="text"
              placeholder="Enter username"
              style={{ padding: "5px", width: "200px" }}
            />
            {fieldState.error && (
              <p style={{ color: "red" }}>{fieldState.error.message}</p>
            )}
          </div>
        )}
      />


      <Controller
        name="dob"
        control={control}
        rules={{ required: "Date of Birth is required" }}
        render={({ field, fieldState }) => (
          <div style={{ marginBottom: "10px" }}>
            <input
              {...field}
              type="date"
              style={{ padding: "5px", width: "200px" }}
            />
            {fieldState.error && (
              <p style={{ color: "red" }}>{fieldState.error.message}</p>
            )}
          </div>
        )}
      />

      <button type="submit" style={{ padding: "5px 10px" }}>
        Submit
      </button>
    </form>
</div>
  );
}
export default SimpleForm;