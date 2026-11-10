import {
  FiBox,
  FiTag,
  FiLayers,
  FiMaximize2,
  FiTruck,
  FiCheckCircle,
} from "react-icons/fi"
import { useProducts } from "../../../context/ProductContext"
import { useParams } from "react-router-dom";

const ProductDetailsTab = () => {
    const { id } = useParams();
  const { products, loading, error } = useProducts()

  const singleProduct = products.find((p) => String(p.id) === String(id))

  return (
    <section className='relative py-5'>
      <div className='mt-8 font-dm max-w-7xl w-full mx-auto px-5 lg:px-10'>
        <div className='mb-10'>
          <h3 className='text-xl md:text-2xl font-semibold mb-3'>
            Product Details & Information
          </h3>
          <p className='text-gray-600 text-sm md:text-base leading-7 max-w-4xl'>
           {singleProduct.description}
          </p>
        </div>
        <div className='mb-10'>
          <h3 className='text-xl md:text-2xl font-semibold mb-5'>
            Key Specifications
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div className='flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-gray-300 transition'>
              <div className='w-10 h-10 rounded-lg bg-[#00D0B0]/10 flex items-center justify-center shrink-0'>
                <FiBox className='text-[#00D0B0] text-lg' />
              </div>
              <div>
                <span className='text-xs text-gray-400 block mb-0.5'>
                  Brand
                </span>
                <span className='font-semibold text-gray-800'>
                  {singleProduct.brand?(
                    singleProduct.brand
                    ): (<div>Not available</div>)}
                </span>
              </div>
            </div>
            <div className='flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-gray-300 transition'>
              <div className='w-10 h-10 rounded-lg bg-[#00D0B0]/10 flex items-center justify-center shrink-0'>
                <FiTag className='text-[#00D0B0] text-lg' />
              </div>
              <div>
                <span className='text-xs text-gray-400 block mb-0.5'>
                  Category
                </span>
                <span className='font-semibold text-gray-800'>
                  {singleProduct.category}
                </span>
              </div>
            </div>
            <div className='flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-gray-300 transition'>
              <div className='w-10 h-10 rounded-lg bg-[#00D0B0]/10 flex items-center justify-center shrink-0'>
                <FiLayers className='text-[#00D0B0] text-lg' />
              </div>
              <div>
                <span className='text-xs text-gray-400 block mb-0.5'>
                  Weight
                </span>
                <span className='font-semibold text-gray-800'>
                  {singleProduct.weight}
                </span>
              </div>
            </div>
            <div className='flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-gray-300 transition'>
              <div className='w-10 h-10 rounded-lg bg-[#00D0B0]/10 flex items-center justify-center shrink-0'>
                <FiMaximize2 className='text-[#00D0B0] text-lg' />
              </div>
              <div>
                <span className='text-xs text-gray-400 block mb-0.5'>
                  Width
                </span>
                <span className='font-semibold text-gray-800'>{singleProduct.dimensions.width}</span>
              </div>
            </div>
            <div className='flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-gray-300 transition'>
              <div className='w-10 h-10 rounded-lg bg-[#00D0B0]/10 flex items-center justify-center shrink-0'>
                <FiMaximize2 className='text-[#00D0B0] text-lg' />
              </div>
              <div>
                <span className='text-xs text-gray-400 block mb-0.5'>
                  Height
                </span>
                <span className='font-semibold text-gray-800'>{singleProduct.dimensions.height}</span>
              </div>
            </div>
            <div className='flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-gray-300 transition'>
              <div className='w-10 h-10 rounded-lg bg-[#00D0B0]/10 flex items-center justify-center shrink-0'>
                <FiMaximize2 className='text-[#00D0B0] text-lg' />
              </div>
              <div>
                <span className='text-xs text-gray-400 block mb-0.5'>
                  Depth
                </span>
                <span className='font-semibold text-gray-800'>{singleProduct.dimensions.depth}</span>
              </div>
            </div>
          </div>
        </div>
        <div className='rounded-2xl bg-[#00D0B0]/5 border border-[#00D0B0]/20 p-5 md:p-6'>
          <div className='flex gap-4 items-start'>
            <div className='w-11 h-11 rounded-full bg-[#00D0B0]/10 flex items-center justify-center shrink-0'>
              <FiCheckCircle className='text-[#00D0B0] text-xl' />
            </div>
            <div>
              <h3 className='font-semibold text-lg mb-1'>
                Authenticity & Warranty Guaranteed
              </h3>
              <p className='text-sm text-gray-600 leading-6'>
                All products go through strict quality checks to ensure standard
                specifications match. Backed by our standard return and support
                policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetailsTab
