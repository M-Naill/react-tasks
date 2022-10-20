import { Button, Form } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  const gender = [
    { value: 1, label: "Male" },
    { value: 2, label: "Female" },
  ];

  console.log("error", errors);
  return (
    <div className="container d-flex justify-content-center mt-5">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>first Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your firstName"
            {...register("firstName", {
              required: true,
              minLength: 5,
              maxLength: 15,
            })}
          />
          {errors.firstName?.type === "required" && (
            <p className="text-danger">First name is required</p>
          )}
          {errors.firstName?.type === "minLength" && (
            <p className="text-danger">Min Length of First name is 5</p>
          )}
          {errors.firstName?.type === "maxLength" && (
            <p className="text-danger">Max Length of First name is 15</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="lname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your LastName"
            {...register("lastName", {
              required: true,
              minLength: 5,
              maxLength: 15,
            })}
          />
          {errors.lastName?.type === "required" && (
            <p className="text-danger">First name is required</p>
          )}
          {errors.lastName?.type === "minLength" && (
            <p className="text-danger">Min Length of Last name is 5</p>
          )}
          {errors.lastName?.type === "maxLength" && (
            <p className="text-danger">Max Length of Last name is 15</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email?.type === "required" && (
            <p className="text-danger">Email is required</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password", {
              required: true,
              maxLength: 10,
              minLength: 3,
            })}
          />
          {errors.password?.type === "required" && (
            <p className="text-danger">Password is Required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-danger">MinLength Of Password is 3 </p>
          )}
          {errors.password?.type === "maxLength" && (
            <p className="text-danger">MaxLength Of Password is 10 </p>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label> Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("conf_password", {
              required: true,
              maxLength: 10,
              minLength: 3,
              validate: (val) => {
                if (watch("password") !== val) {
                  return "Your passwords do no match";
                }
              },
            })}
          />
          {errors.password?.type === "required" && (
            <p className="text-danger">Password is Required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-danger">MinLength Of Password is 3 </p>
          )}
          {errors.password?.type === "maxLength" && (
            <p className="text-danger">MaxLength Of Password is 10 </p>
          )}
          {errors.conf_password?.type === "validate" && (
            <p className="text-danger">Your passwords do no match </p>
          )}
        </Form.Group>
        <Form.Label> Select Gender</Form.Label>
        <Controller
          name="select"
          control={control}
          render={({ field }) => <Select {...field} options={gender} />}
        />

        <Button variant="primary" type="submit" className="mt-3">
          Sing Up
        </Button>
      </Form>
    </div>
  );
}

export default Signup;
