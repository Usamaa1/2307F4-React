import { useState } from "react";
import { createCategory } from "../api/categoryApi";

const CreateCategory = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return alert("Category name is required");

    try {
      setLoading(true);
      await createCategory({ name });
      alert("Category added successfully");
      setName("");
    } catch (err) {
      alert(err.response?.data?.error || "Error creating category");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="category-container">
      <form className="category-form" onSubmit={handleSubmit}>
        <h3>Create Category</h3>

        <input
          type="text"
          placeholder="Category name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button disabled={loading}>
          {loading ? "Saving..." : "Create Category"}
        </button>
      </form>
    </div>
  );
};

export default CreateCategory;
