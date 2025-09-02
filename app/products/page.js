import Link from "next/link";
import Image from "next/image";

export default async function Products() {
  const res = await fetch("https://fakestoreapi.in/api/products");
  const { products } = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
        All Products
      </h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <li
            key={product.id}
            className="border rounded-2xl shadow-md p-4 hover:shadow-lg transition bg-white flex flex-col items-center"
          >
            <Link href={`/products/${product.id}`} className="w-full">
              <Image
                src={product.image}
                alt={product.title}
                height={250}
                width={250}
                className="rounded-xl object-contain mx-auto"
              />
            </Link>
            <h3 className="mt-4 text-lg font-semibold text-gray-700 line-clamp-2 text-center">
              {product.title}
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
