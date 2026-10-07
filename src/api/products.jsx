const getProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products/category/mens-shirts");

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();
    return data.products || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return empty array so map() doesn't fail
  }
};

export default getProducts;