import { useFormik } from "formik";
import { object, string } from "yup";
import { useNavigate, Link } from "react-router-dom";
import Button from "@/register-form/button";
import Input from "@/register-form/input";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuth } from "@/context/auth-context";

const loginSchema = object({
  email: string().required("Email is required").email("Invalid Email"),
  password: string().required("Password is required"),
});

const formikInitialValue = {
  email: "",
  password: "",
};

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: formikInitialValue,
    validationSchema: loginSchema,
    onSubmit: (values, { resetForm }) => {
      const response = login({
        email: values.email,
        password: values.password,
      });
      if (response) {
        resetForm();
        navigate("/products");
      }
    },
  });

  const {
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    status,
    isSubmitting,
  } = formik;

  return (
    <Card className="max-w-[400px] mx-auto mt-10">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle className="text-center text-xl">Login Form</CardTitle>
        </CardHeader>

        <CardContent>
          <Input
            id="email"
            label="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && errors.email}
          />

          <Input
            id="password"
            label="Password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && errors.password}
          />

          {status && <div className="text-red-500 text-sm mt-2">{status}</div>}
        </CardContent>

        <CardFooter className="flex flex-col gap-4">
          <Button type="submit" disabled={isSubmitting} className="w-full">
            Login
          </Button>

          <div className="text-center text-sm">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="underline text-blue-600 hover:text-blue-800"
            >
              Sign up
            </Link>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}
