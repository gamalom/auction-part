import { useFormik } from "formik";
import { object, string } from "yup";
import { useNavigate } from "react-router-dom";

import { useAuth } from "@/context/auth-context";
import Button from "@/register-form/button";
import Input from "@/register-form/input";

const registerSchema = object({
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
    validationSchema: registerSchema,
    onSubmit: (values, { resetForm }) => {
      const success = login(values);
      if (success) {
        resetForm();
        navigate("/products");
      }
    },
  });

  const { values, handleSubmit, handleChange, handleBlur, errors, touched } =
    formik;

  return (
    <form
      onSubmit={handleSubmit}
      className="shadow-sm rounded-xl max-w-[400px] mx-auto border px-4 py-4"
    >
      <Input
        id="email"
        label="Email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        name="email"
        error={touched.email && errors.email}
      />

      <Input
        id="password"
        label="Password"
        type="password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
        name="password"
        error={touched.password && errors.password}
      />

      <Button type="submit">Login</Button>
    </form>
  );
}
