import React, { useState, useEffect } from "react";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);

    // Fungsi fetch data produk
    const fetchProducts = async (query = "") => {
        setLoading(true);
        try {
            const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
            const data = await response.json();
            setProducts(data.products);
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    };

    // Menggunakan debounce untuk pencarian
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            fetchProducts(searchTerm);
        }, 500); // 500ms debounce

        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm]);

    // note 
    // problem minor, fetch data product ketika component pertama kali di render menunggu settimout 500ms

    return (
        <div className="p-4">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search for products..."
                    className="p-2 border border-gray-300 rounded w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {loading ? (
                <div className="text-center">Loading...</div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products.map((product) => (
                        <div key={product.id} className="border p-4 rounded shadow">
                            <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover rounded mb-4" />
                            <h3 className="font-bold text-lg">{product.title}</h3>
                            <p className="text-gray-600">${product.price}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Products;
