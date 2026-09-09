import {
  FiCheckCircle,
  FiTruck,
  FiRefreshCcw,
  FiShield,
} from "react-icons/fi";

const ProductDetailsTab = () => {
  return (
    <section className="relative py-5">
    <div className="mt-8 font-dm max-w-7xl w-full mx-auto px-5 lg:px-10">
      <div className="mb-10">
        <h3 className="text-xl md:text-2xl font-semibold mb-3">
          Product Details
        </h3>

        <p className="text-gray-600 text-sm md:text-base leading-7 max-w-4xl">
          This premium cotton t-shirt is designed for everyday comfort and
          effortless style. Made with soft, breathable fabric and a modern
          regular fit, it is perfect for casual outings and everyday wear.
        </p>
      </div>

      {/* Specifications */}
      <div className="mb-10">
        <h3 className="text-xl md:text-2xl font-semibold mb-5">
          Specifications
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

          <div className="flex justify-between items-center rounded-xl bg-gray-50 border border-gray-100 px-5 py-4">
            <span className="text-gray-500">Material</span>
            <span className="font-medium">100% Cotton</span>
          </div>

          <div className="flex justify-between items-center rounded-xl bg-gray-50 border border-gray-100 px-5 py-4">
            <span className="text-gray-500">Fit</span>
            <span className="font-medium">Regular Fit</span>
          </div>

          <div className="flex justify-between items-center rounded-xl bg-gray-50 border border-gray-100 px-5 py-4">
            <span className="text-gray-500">Neck</span>
            <span className="font-medium">Round Neck</span>
          </div>

          <div className="flex justify-between items-center rounded-xl bg-gray-50 border border-gray-100 px-5 py-4">
            <span className="text-gray-500">Sleeves</span>
            <span className="font-medium">Short Sleeve</span>
          </div>

          <div className="flex justify-between items-center rounded-xl bg-gray-50 border border-gray-100 px-5 py-4">
            <span className="text-gray-500">Fabric</span>
            <span className="font-medium">Breathable</span>
          </div>

          <div className="flex justify-between items-center rounded-xl bg-gray-50 border border-gray-100 px-5 py-4">
            <span className="text-gray-500">Care</span>
            <span className="font-medium">Machine Wash</span>
          </div>

        </div>
      </div>

      {/* Features */}
      <div className="mb-10">
        <h3 className="text-xl md:text-2xl font-semibold mb-5">
          Why You'll Love It
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <div className="flex gap-3 items-start p-4 rounded-xl border border-gray-100 hover:border-gray-300 transition">
            <FiCheckCircle className="text-[#00D0B0] text-xl mt-0.5 shrink-0" />

            <div>
              <h4 className="font-semibold mb-1">Premium Comfort</h4>
              <p className="text-sm text-gray-500">
                Soft fabric designed to keep you comfortable throughout the day.
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-start p-4 rounded-xl border border-gray-100 hover:border-gray-300 transition">
            <FiShield className="text-[#00D0B0] text-xl mt-0.5 shrink-0" />

            <div>
              <h4 className="font-semibold mb-1">Durable Quality</h4>
              <p className="text-sm text-gray-500">
                Carefully constructed for long-lasting everyday use.
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-start p-4 rounded-xl border border-gray-100 hover:border-gray-300 transition">
            <FiCheckCircle className="text-[#00D0B0] text-xl mt-0.5 shrink-0" />

            <div>
              <h4 className="font-semibold mb-1">Modern Design</h4>
              <p className="text-sm text-gray-500">
                A clean and versatile design that works with any outfit.
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-start p-4 rounded-xl border border-gray-100 hover:border-gray-300 transition">
            <FiRefreshCcw className="text-[#00D0B0] text-xl mt-0.5 shrink-0" />

            <div>
              <h4 className="font-semibold mb-1">Easy Care</h4>
              <p className="text-sm text-gray-500">
                Simple washing instructions make maintenance effortless.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Shipping */}
      <div className="rounded-2xl bg-[#00D0B0]/5 border border-[#00D0B0]/20 p-5 md:p-6">
        <div className="flex gap-4 items-start">

          <div className="w-11 h-11 rounded-full bg-[#00D0B0]/10 flex items-center justify-center shrink-0">
            <FiTruck className="text-[#00D0B0] text-xl" />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">
              Shipping & Delivery
            </h3>

            <p className="text-sm text-gray-600 leading-6">
              Estimated delivery within 3–5 working days.
              Free shipping is available on qualifying orders.
            </p>
          </div>

        </div>
      </div>

    </div>
    </section>
  );
};

export default ProductDetailsTab;