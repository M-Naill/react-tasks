import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
function Signin() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log("error", errors);
  return (
    <div className="container d-flex justify-content-center mt-5">
      <Form onSubmit={handleSubmit(onSubmit)}>
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
    </div>
  );
}

export default Signin;
