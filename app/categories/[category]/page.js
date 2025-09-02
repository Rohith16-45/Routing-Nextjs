import Image from "next/image";
import Link from "next/link";

export default async function AllCategory({ params }) {
  const { category } = await params;
  const res = await fetch(
    `https://fakestoreapi.in/api/products/category?type=${category}`
  );
  const { products } = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Category Title */}
      <h2 className="text-3xl font-bold mb-8 text-gray-800 capitalize text-center">
        {category}
      </h2>

      {/* Products Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <li
            key={product.id}
            className="border rounded-2xl shadow-md p-4 hover:shadow-lg transition bg-white flex flex-col items-center"
          >
            <Link href={`/products/${product.id}`}>
              <Image
                src={product.image}
                alt={product.title}
                width={250}
                height={200}
                className="rounded-xl object-contain mx-auto"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-700 line-clamp-2 text-center">
                {product.title}
              </h3>
              <p className="text-gray-900 font-bold mt-2">${product.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
