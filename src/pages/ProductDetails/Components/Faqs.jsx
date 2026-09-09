import { FiHelpCircle, FiPlus } from "react-icons/fi";

const FAQTab = () => {
  return (
    <section className="relative py-5 ">
    <div className="mt-10 font-dm max-w-7xl w-full mx-auto px-5 lg:px-10">
      <div className="text-center mb-10">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#00D0B0]/10">
          <FiHelpCircle className="text-xl text-[#00D0B0]" />
        </div>

        <h3 className="text-2xl md:text-3xl font-semibold text-[#0F0B33]">
          Frequently Asked Questions
        </h3>

        <p className="mx-auto mt-3 max-w-xl text-sm md:text-base leading-6 text-gray-500">
          Everything you need to know about our products, delivery,
          returns and shopping experience.
        </p>
      </div>
      <div className="mx-auto max-w-4xl space-y-4">

        {/* FAQ 1 */}
        <div className="group rounded-2xl border border-gray-200 bg-white p-5 md:p-6 transition duration-300 hover:border-[#00D0B0]/40 hover:shadow-md">
          <button className="flex w-full items-start gap-4 text-left">

            <span className="hidden sm:flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#00D0B0]/10 text-sm font-semibold text-[#00A990]">
              01
            </span>

            <div className="flex-1">
              <h4 className="text-base md:text-lg font-semibold text-[#0F0B33]">
                What material is this product made from?
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                This product is made from premium 100% cotton fabric,
                designed to provide comfort and durability for everyday wear.
              </p>
            </div>

            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 transition group-hover:bg-[#00D0B0] group-hover:text-white">
              <FiPlus />
            </span>

          </button>
        </div>

        {/* FAQ 2 */}
        <div className="group rounded-2xl border border-gray-200 bg-white p-5 md:p-6 transition duration-300 hover:border-[#00D0B0]/40 hover:shadow-md">
          <button className="flex w-full items-start gap-4 text-left">

            <span className="hidden sm:flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#00D0B0]/10 text-sm font-semibold text-[#00A990]">
              02
            </span>

            <div className="flex-1">
              <h4 className="text-base md:text-lg font-semibold text-[#0F0B33]">
                How long does delivery take?
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Orders are usually delivered within 3–5 working days,
                depending on your location.
              </p>
            </div>

            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 transition group-hover:bg-[#00D0B0] group-hover:text-white">
              <FiPlus />
            </span>

          </button>
        </div>

        {/* FAQ 3 */}
        <div className="group rounded-2xl border border-gray-200 bg-white p-5 md:p-6 transition duration-300 hover:border-[#00D0B0]/40 hover:shadow-md">
          <button className="flex w-full items-start gap-4 text-left">

            <span className="hidden sm:flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#00D0B0]/10 text-sm font-semibold text-[#00A990]">
              03
            </span>

            <div className="flex-1">
              <h4 className="text-base md:text-lg font-semibold text-[#0F0B33]">
                Can I return or exchange the product?
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Yes. Products can be returned or exchanged according
                to our return and exchange policy.
              </p>
            </div>

            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 transition group-hover:bg-[#00D0B0] group-hover:text-white">
              <FiPlus />
            </span>

          </button>
        </div>

        {/* FAQ 4 */}
        <div className="group rounded-2xl border border-gray-200 bg-white p-5 md:p-6 transition duration-300 hover:border-[#00D0B0]/40 hover:shadow-md">
          <button className="flex w-full items-start gap-4 text-left">

            <span className="hidden sm:flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#00D0B0]/10 text-sm font-semibold text-[#00A990]">
              04
            </span>

            <div className="flex-1">
              <h4 className="text-base md:text-lg font-semibold text-[#0F0B33]">
                How should I wash and care for this product?
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                We recommend machine washing with cold water and following
                the care instructions provided with the product.
              </p>
            </div>

            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 transition group-hover:bg-[#00D0B0] group-hover:text-white">
              <FiPlus />
            </span>

          </button>
        </div>

        {/* FAQ 5 */}
        <div className="group rounded-2xl border border-gray-200 bg-white p-5 md:p-6 transition duration-300 hover:border-[#00D0B0]/40 hover:shadow-md">
          <button className="flex w-full items-start gap-4 text-left">

            <span className="hidden sm:flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#00D0B0]/10 text-sm font-semibold text-[#00A990]">
              05
            </span>

            <div className="flex-1">
              <h4 className="text-base md:text-lg font-semibold text-[#0F0B33]">
                Is cash on delivery available?
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Cash on delivery is available for eligible locations.
                Availability may vary depending on your area.
              </p>
            </div>

            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 transition group-hover:bg-[#00D0B0] group-hover:text-white">
              <FiPlus />
            </span>

          </button>
        </div>

      </div>
    </div>
    </section>
  );
};

export default FAQTab;