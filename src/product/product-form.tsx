import { useFormik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { useProduct } from "@/context/product-context";
import { useNavigate } from "react-router-dom";
export default function ProductForm() {
  const navigate = useNavigate();

  const { addProduct } = useProduct();

  const productSchema = Yup.object({
    details: Yup.string()
      .required("Product details are required")
      .min(10, "Must be at least 10 characters"),
    price: Yup.number()
      .typeError("Price must be a number")
      .required("Price is required")
      .positive("Price must be positive"),
    categories: Yup.string()
      .required("Category is required")
      .min(3, "Category must be at least 3 characters"),
  });

  const formik = useFormik({
    initialValues: {
      details: "",
      price: "",
      categories: "",
    },
    validationSchema: productSchema,
    onSubmit: (values, { resetForm }) => {
      const newProduct = {
        id: uuidv4(),
        details: values.details.trim(),
        price: parseFloat(values.price),
        categories: values.categories.trim().toLowerCase(),
      };

      addProduct(newProduct);

      navigate("/products");
      resetForm();
    },
  });

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    formik;

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow mt-8">
      <h2 className="text-xl font-semibold mb-4">Sell a Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Product Details</label>
          <textarea
            name="details"
            value={values.details}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full border rounded px-3 py-2"
            rows={4}
            required
          />
          {touched.details && errors.details && (
            <p className="text-red-500 text-sm">{errors.details}</p>
          )}
        </div>

        <div>
          <label className="block font-medium mb-1">Price (NPR)</label>
          <input
            type="number"
            name="price"
            value={values.price}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full border rounded px-3 py-2"
            required
          />
          {touched.price && errors.price && (
            <p className="text-red-500 text-sm">{errors.price}</p>
          )}
        </div>

        <div>
          <label className="block font-medium mb-1">Category</label>
          <input
            type="text"
            name="categories"
            value={values.categories}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full border rounded px-3 py-2"
            required
          />
          {touched.categories && errors.categories && (
            <p className="text-red-500 text-sm">{errors.categories}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Post Product
        </button>
      </form>
    </div>
  );
}
