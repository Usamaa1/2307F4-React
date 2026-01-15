import { useState } from "react";
import { createProduct } from "../api/productApi";

const CreateProduct = ({ onSuccess }) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    categoryId: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProduct(form);
      alert("Product created successfully");
      onSuccess();
    } catch (err) {
      alert(err.response?.data?.error || "Error creating product");
    }
  };

  return (
    <form className="create-product" onSubmit={handleSubmit}>
      <h3>Create Product</h3>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="description" placeholder="Description" onChange={handleChange} />
      <input name="price" type="number" placeholder="Price" onChange={handleChange} />
      <input name="category" placeholder="Category" onChange={handleChange} />
      <input name="categoryId" placeholder="Category ID" onChange={handleChange} />

      <button type="submit">Create</button>
    </form>
  );
};

export default CreateProduct;
