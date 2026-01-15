const ProductFilters = ({ onFilter, onSearch, onSort }) => {
  return (
    <div className="filters">
      <h3>Filters</h3>

      <button onClick={() => onFilter({ category: "Electronics" })}>
        Electronics
      </button>

      <button onClick={() => onFilter({ category: "Fashion" })}>
        Fashion
      </button>

      <button onClick={() => onFilter({ minPrice: 100, maxPrice: 500 })}>
        Price 100 - 500
      </button>

      <input
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
      />

      <button onClick={() => onSort("price", "asc")}>Price ↑</button>
      <button onClick={() => onSort("price", "desc")}>Price ↓</button>
    </div>
  );
};

export default ProductFilters;
