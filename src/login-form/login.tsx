import { useFormik } from "formik";
import { object, string } from "yup";
import { useNavigate } from "react-router-dom";
import Button from "@/register-form/button";
import Input from "@/register-form/input";

const loginSchema = object({
  email: string().required("Email is required").email("Invalid Email"),
  password: string().required("Password is required"),
});

const formikInitialValue = {
  email: "",
  password: "",
};

export default function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: formikInitialValue,
    validationSchema: loginSchema,
    onSubmit: (values, { resetForm, setStatus }) => {
      setStatus("");
      // Get users from localStorage
      const stored = localStorage.getItem("users");
      const users = stored ? JSON.parse(stored) : [];
      const foundUser = users.find(
        (u: { email: string; password: string }) =>
          u.email === values.email && u.password === values.password
      );
      if (foundUser) {
        resetForm();
        navigate("/products");
      } else {
        setStatus("Invalid email or password. Please try again.");
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

      {status && <div className="text-red-500 text-sm mb-2">{status}</div>}

      <Button type="submit" disabled={isSubmitting}>
        Login
      </Button>
    </form>
  );
}
