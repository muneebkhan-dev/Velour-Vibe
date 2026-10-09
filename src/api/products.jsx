const clothesCategories = [
  "mens-shirts",
  "womens-dresses",
  "tops",
  "mens-shoes",
  "womens-shoes",
]

const getProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products?limit=0", {
      cache: "no-store",
    })

    if (!response.ok) throw new Error("Fetch failed")

    const data = await response.json()
    const clothesProducts = data.products.filter((product) =>
      clothesCategories.includes(product.category),
    )
    console.log("FakeStore API Data:", data)

    return clothesProducts
  } catch (error) {
    console.error("API Error:", error)
    return []
  }
}

export default getProducts
