import Image from "next/image";

export default async function ProductDetails({ params }) {
  const { id } = await params;
  const res = await fetch(`https://fakestoreapi.in/api/products/${id}`);
  const data = await res.json();
  const productData = data.product;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Product Image */}
        <div className="flex justify-center md:justify-start">
          <Image
            src={productData.image}
            alt={productData.title}
            width={450}
            height={450}
            className="rounded-xl object-contain shadow-lg bg-white p-8"
          />
        </div>

        {/* Right: Product Details */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            {productData.title}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            {productData.description}
          </p>
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            ${productData.price}
          </h3>
          <button className="px-8 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
