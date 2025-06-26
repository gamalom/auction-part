import { useFormik } from "formik";
import { object, string, ref } from "yup";
import { useNavigate } from "react-router-dom";

import Input from "./input";
import Button from "./button";
import { useAuth } from "@/context/auth-context";

const registerSchema = object({
  email: string().required("Email is required").email("Invalid Email"),
  password: string().required("Password is required"),
  confirmPassword: string()
    .required("Confirm Password is required")
    .oneOf([ref("password")], "Passwords must match"),
  firstName: string()
    .required("First Name is required")
    .min(3, "First Name must be 3 character long"),
  lastName: string()
    .required("Last Name is required")
    .min(2, "Last Name must be 2 characters long"),
  middleName: string().notRequired(),
  phoneNo: string()
    .required("Phone No. is requird")
    .max(10, "Phone Number must be 10 digits"),
});

const formikInitialValue = {
  email: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
  middleName: "",
  phoneNo: "",
};

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: formikInitialValue,
    validationSchema: registerSchema,
    onSubmit: (values, { resetForm }) => {
      const { confirmPassword, ...userData } = values;
      register(userData);

      const stored = localStorage.getItem("users");
      const users = stored ? JSON.parse(stored) : [];
      if (!users.find((u) => u.email === userData.email)) {
        users.push(userData);
        localStorage.setItem("users", JSON.stringify(users));
      }
      console.log("User registered successfully", userData);
      resetForm();
      navigate("/login");
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
        id="firstName"
        label="First Name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.firstName}
        name="firstName"
        error={touched.firstName && errors.firstName}
      />
      <Input
        id="middleName"
        label="Middle Name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.middleName}
        name="middleName"
        error={touched.middleName && errors.middleName}
      />
      <Input
        id="lastName"
        label="Last Name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.lastName}
        name="lastName"
        error={touched.lastName && errors.lastName}
      />
      <Input
        id="phoneNo"
        label="Phone No."
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.phoneNo}
        name="phoneNo"
        error={touched.phoneNo && errors.phoneNo}
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
      <Input
        id="confirmPassword"
        label="Retype Password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.confirmPassword}
        name="confirmPassword"
        error={touched.confirmPassword && errors.confirmPassword}
      />
      <Button type="submit">Register</Button>
    </form>
  );
}
