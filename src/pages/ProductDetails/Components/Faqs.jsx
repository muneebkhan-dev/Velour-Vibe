import { useState } from "react";
import { FiHelpCircle, FiPlus, FiX } from "react-icons/fi";
import { useProducts } from "../../../context/ProductContext";
import { useParams } from "react-router-dom";

const FAQTab = () => {
  const { id } = useParams();
  const { products, loading, error } = useProducts();
  const singleProduct = products.find((p) => String(p.id) === String(id));

  // State yeh track karegi ke konsa FAQ open hai (null matlab sab band hain)
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle function jo click par index set ya close karega
  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Agar wahi dobara click kiya toh band ho jaye
    } else {
      setOpenIndex(index); // Naya open ho jaye
    }
  };

  // Agar product abhi load nahi hua toh crash hone se bachne ke liye safe check
  if (!singleProduct) return null;

  return (
    <section className='relative py-5'>
      <div className='mt-10 font-dm max-w-7xl w-full mx-auto px-5 lg:px-10'>
        <div className='text-center mb-10'>
          <div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#00D0B0]/10'>
            <FiHelpCircle className='text-xl text-[#00D0B0]' />
          </div>

          <h3 className='text-2xl md:text-3xl font-semibold text-[#0F0B33]'>
            Frequently Asked Questions
          </h3>

          <p className='mx-auto mt-3 max-w-xl text-sm md:text-base leading-6 text-gray-500'>
            Everything you need to know about our products, delivery, returns
            and shopping experience.
          </p>
        </div>

        <div className='mx-auto max-w-4xl space-y-4'>
          
          {/* FAQ Item 1: Delivery */}
          <div className='group rounded-2xl border border-gray-200 bg-white p-5 md:p-6 transition duration-300 hover:border-[#00D0B0]/40 hover:shadow-md'>
            <button 
              onClick={() => toggleFAQ(0)}
              className='flex w-full items-start gap-4 text-left cursor-pointer'
            >
              <span className='hidden sm:flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#00D0B0]/10 text-sm font-semibold text-[#00A990]'>
                01
              </span>
              <div className='flex-1'>
                <h4 className='text-base md:text-lg font-semibold text-[#0F0B33]'>
                  How long does delivery take?
                </h4>
                {/* Condition: Agar openIndex 0 hai toh answer show hoga */}
                {openIndex === 0 && (
                  <p className='mt-2 text-sm leading-6 text-gray-500 animate-fadeIn'>
                    {singleProduct.shippingInformation}.
                  </p>
                )}
              </div>
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
                openIndex === 0 ? "bg-[#00D0B0] text-white rotate-45" : "bg-gray-100 group-hover:bg-[#00D0B0] group-hover:text-white"
              }`}>
                <FiPlus />
              </span>
            </button>
          </div>

          {/* FAQ Item 2: Return Policy */}
          <div className='group rounded-2xl border border-gray-200 bg-white p-5 md:p-6 transition duration-300 hover:border-[#00D0B0]/40 hover:shadow-md'>
            <button 
              onClick={() => toggleFAQ(1)}
              className='flex w-full items-start gap-4 text-left cursor-pointer'
            >
              <span className='hidden sm:flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#00D0B0]/10 text-sm font-semibold text-[#00A990]'>
                02
              </span>
              <div className='flex-1'>
                <h4 className='text-base md:text-lg font-semibold text-[#0F0B33]'>
                  Can I return or exchange the product?
                </h4>
                {openIndex === 1 && (
                  <p className='mt-2 text-sm leading-6 text-gray-500 animate-fadeIn'>
                    {singleProduct.returnPolicy}.
                  </p>
                )}
              </div>
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
                openIndex === 1 ? "bg-[#00D0B0] text-white rotate-45" : "bg-gray-100 group-hover:bg-[#00D0B0] group-hover:text-white"
              }`}>
                <FiPlus />
              </span>
            </button>
          </div>

          {/* FAQ Item 3: Warranty */}
          <div className='group rounded-2xl border border-gray-200 bg-white p-5 md:p-6 transition duration-300 hover:border-[#00D0B0]/40 hover:shadow-md'>
            <button 
              onClick={() => toggleFAQ(2)}
              className='flex w-full items-start gap-4 text-left cursor-pointer'
            >
              <span className='hidden sm:flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#00D0B0]/10 text-sm font-semibold text-[#00A990]'>
                03
              </span>
              <div className='flex-1'>
                <h4 className='text-base md:text-lg font-semibold text-[#0F0B33]'>
                  What is the warranty period for this product?
                </h4>
                {openIndex === 2 && (
                  <p className='mt-2 text-sm leading-6 text-gray-500 animate-fadeIn'>
                    {singleProduct.warrantyInformation}.
                  </p>
                )}
              </div>
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
                openIndex === 2 ? "bg-[#00D0B0] text-white rotate-45" : "bg-gray-100 group-hover:bg-[#00D0B0] group-hover:text-white"
              }`}>
                <FiPlus />
              </span>
            </button>
          </div>

          {/* FAQ Item 4: Cash on Delivery */}
          <div className='group rounded-2xl border border-gray-200 bg-white p-5 md:p-6 transition duration-300 hover:border-[#00D0B0]/40 hover:shadow-md'>
            <button 
              onClick={() => toggleFAQ(3)}
              className='flex w-full items-start gap-4 text-left cursor-pointer'
            >
              <span className='hidden sm:flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#00D0B0]/10 text-sm font-semibold text-[#00A990]'>
                04
              </span>
              <div className='flex-1'>
                <h4 className='text-base md:text-lg font-semibold text-[#0F0B33]'>
                  Is cash on delivery available?
                </h4>
                {openIndex === 3 && (
                  <p className='mt-2 text-sm leading-6 text-gray-500 animate-fadeIn'>
                    Cash on delivery is available for all qualifying orders nationwide.
                  </p>
                )}
              </div>
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
                openIndex === 3 ? "bg-[#00D0B0] text-white rotate-45" : "bg-gray-100 group-hover:bg-[#00D0B0] group-hover:text-white"
              }`}>
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