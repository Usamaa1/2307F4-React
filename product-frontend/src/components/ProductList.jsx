const ProductList = ({ products }) => {
    return (
        <div>
            <h3>Products</h3>
            <div className="product-list">
                {products.map((p) => (
                    <div className="product-card" key={p._id}>
                        <h4>{p.name}</h4>
                        <p>{p.description}</p>
                        <p className="product-price">Price: {p.price}</p>
                        <p>Category: {p.category}</p>
                        {/* {p.categoryId?.name && <p>Category Name: {p.categoryId.name}</p>} */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
