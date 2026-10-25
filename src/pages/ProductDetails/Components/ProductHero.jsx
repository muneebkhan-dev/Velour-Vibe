
import React from "react";
import Rating from "../../../Components/Rating";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useProducts } from "../../../context/ProductContext";

const ProductHero = () => {
  const { id } = useParams();
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center text-gray-500">
        Loading product details...
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center text-red-500">
        Error: {error}
      </div>
    );
  }

  const singleProduct = products.find(
    (p) => String(p.id) === String(id)
  );

  if (!singleProduct) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center text-gray-500">
        Product not found!
      </div>
    );
  }

  const images = singleProduct.images?.length
    ? singleProduct.images
    : [singleProduct.thumbnail].filter(Boolean);

  const mainImage = singleProduct.thumbnail || images[0];

  const discount = Number(singleProduct.discountPercentage) || 0;

  const originalPrice =
    discount > 0
      ? singleProduct.price / (1 - discount / 100)
      : null;

  const stock = Number(singleProduct.stock) || 0;

  const availability =
    stock === 0
      ? "Out of Stock"
      : singleProduct.availabilityStatus || "In Stock";

  const isOutOfStock = stock === 0;

  return (
    <section className="relative pb-10">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-8 lg:gap-12 mx-auto px-4 sm:px-6 lg:px-10">
        <div className="w-full lg:w-1/2 flex gap-3 sm:gap-4 items-start">
          {images.length > 1 && (
            <div className="w-1/5 max-w-24 shrink-0">
              <ul className="flex flex-col gap-3">
                {images.slice(0, 4).map((image, index) => (
                  <li key={`${image}-${index}`}>
                    <img
                      className="w-full aspect-square object-cover rounded-md bg-gray-100"
                      src={image}
                      alt={`${singleProduct.title} view ${index + 1}`}
                      loading="lazy"
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex-1 min-w-0">
            {mainImage ? (
              <img
                className="w-full aspect-[4/5] object-cover rounded-lg bg-gray-100"
                src={mainImage}
                alt={singleProduct.title}
              />
            ) : (
              <div className="w-full aspect-[4/5] rounded-lg bg-gray-100 flex items-center justify-center text-gray-400">
                No image available
              </div>
            )}
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col gap-4 border-b border-gray-200 pb-6">
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-500">
              <span className="capitalize">
                {singleProduct.category?.replaceAll("-", " ")}
              </span>
              {singleProduct.brand && (
                <>
                  <span>•</span>
                  <span>{singleProduct.brand}</span>
                </>
              )}
            </div>
            <h1 className="font-dm text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase leading-tight">
              {singleProduct.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3">
              <Rating rating={singleProduct.rating} />

              {singleProduct.reviews?.length > 0 && (
                <span className="text-sm text-gray-500">
                  ({singleProduct.reviews.length} reviews)
                </span>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-dm text-2xl sm:text-3xl font-semibold">
                ${Number(singleProduct.price).toFixed(2)}
              </h3>
              {discount > 0 && (
                <>
                  <span className="text-sm bg-[#FF3333]/10 text-[#FF3333] rounded-full px-3 py-1">
                    -{discount.toFixed(0)}%
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    ${originalPrice.toFixed(2)}
                  </span>
                </>
              )}
            </div>
            <p className="font-dm text-sm sm:text-base text-gray-500 leading-relaxed">
              {singleProduct.description}
            </p>
          </div>
          <div className="py-5 border-b border-gray-200">
            <h4 className="font-dm text-sm text-gray-400 mb-3">
              Availability
            </h4>
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium ${
                  isOutOfStock
                    ? "bg-red-50 text-red-600"
                    : "bg-green-50 text-green-700"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    isOutOfStock ? "bg-red-500" : "bg-green-500"
                  }`}
                />
                {availability}
              </span>
              {!isOutOfStock && (
                <span className="text-sm text-gray-500">
                  {stock} units available
                </span>
              )}
            </div>
          </div>
          {singleProduct.shippingInformation && (
            <div className="py-5 border-b border-gray-200">
              <h4 className="font-dm text-sm text-gray-400 mb-2">
                Shipping Information
              </h4>
              <p className="text-sm sm:text-base text-gray-700">
                {singleProduct.shippingInformation}
              </p>
            </div>
          )}
          <div className="py-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
            <div className="flex gap-7 bg-gray-100 items-center justify-center py-3 px-7 rounded-full self-start">
              <button
                type="button"
                aria-label="Decrease quantity"
                className="text-lg"
              >
                <FaMinus />
              </button>

              <span className="text-base font-medium">1</span>

              <button
                type="button"
                aria-label="Increase quantity"
                className="text-lg"
              >
                <FaPlus />
              </button>
            </div>

            <button
              type="button"
              disabled={isOutOfStock}
              className="w-full flex-1 font-dm text-base py-3 px-6 rounded-full bg-black text-white transition-colors hover:bg-gray-800 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
            >
              {isOutOfStock ? "Out of Stock" : "Add to Cart"}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductHero;
