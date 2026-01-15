import { useEffect, useState } from "react";
import {
  getProductsWithCategory,
  getFilteredProducts,
  searchProducts,
  sortProducts,
} from "../api/productApi";

import CreateProduct from "../components/CreateProduct";
import ProductList from "../components/ProductList";
import ProductFilters from "../components/ProductFilters";

const Products = () => {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const res = await getProductsWithCategory();
    setProducts(res.data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleFilter = async (params) => {
    const res = await getFilteredProducts(params);
    setProducts(res.data);
  };

  const handleSearch = async (q) => {
    if (!q) return loadProducts();
    const res = await searchProducts(q);
    setProducts(res.data);
  };

  const handleSort = async (sort, order) => {
    const res = await sortProducts(sort, order);
    setProducts(res.data);
  };

  return (
    <div className="products-container">
      <CreateProduct onSuccess={loadProducts} />
      <ProductFilters
        onFilter={handleFilter}
        onSearch={handleSearch}
        onSort={handleSort}
      />
      <ProductList products={products} />
    </div>
  );
};

export default Products;
