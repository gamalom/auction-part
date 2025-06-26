import { useFormik } from "formik";
import { object, string, ref } from "yup";
import { useNavigate, Link } from "react-router-dom";
import illustration from "../assets/illustration.jpg";

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
    .min(3, "First Name must be 3 characters long"),
  lastName: string()
    .required("Last Name is required")
    .min(2, "Last Name must be 2 characters long"),
  middleName: string().notRequired(),
  phoneNo: string()
    .required("Phone No. is required")
    .matches(/^\d{10}$/, "Phone Number must be 10 digits"),
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
    <div className="h-180 flex items-center justify-center bg-gray-50 p-4">
      <div className="flex flex-row bg-white shadow-lg rounded-xl overflow-hidden max-w-6xl w-full">
        {/* Left Side - Image and Header */}
        <div className="w-150 bg-orange-400 p-6 flex flex-col justify-center items-center text-white">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Welcome to OLX - The Best Selling Place!
          </h1>
          <img
            src={illustration}
            alt="illustration"
            className="w-full max-w-[400px] rounded-md shadow-lg object-cover"
          />
          <p className="mt-4 text-sm text-center">
            OLX is a popular online marketplace that lets users buy, sell, and
            exchange goods and services locally, making transactions easy, fast,
            and convenient.
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="w-1/2 p-6">
          <h2 className="text-xl font-semibold text-center mb-4">Register</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
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
              label="Phone Number"
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
              label="Confirm Password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
              name="confirmPassword"
              error={touched.confirmPassword && errors.confirmPassword}
            />

            <Button type="submit" className="w-full">
              Register
            </Button>

            <div className="text-center text-sm mt-2">
              Already have an account?{" "}
              <Link
                to="/login"
                className="underline text-blue-600 hover:text-blue-800"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
