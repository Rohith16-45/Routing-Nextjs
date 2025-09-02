import Image from "next/image";
import Link from "next/link";

export default async function Products() {
  // Fetch all products
  const productRes = await fetch(
    "https://fakestoreapi.in/api/products?limit=7"
  );
  const { products } = await productRes.json();

  // Fetch categories
  const categoryRes = await fetch(
    "https://fakestoreapi.in/api/products/category"
  );
  const { categories } = await categoryRes.json();

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Featured Products */}
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Featured Products
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <li
            key={product.id}
            className="border rounded-2xl shadow-md p-4 hover:shadow-lg transition bg-white"
          >
            <Link href={`/products/${product.id}`}>
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={250}
                className="rounded-xl object-contain mx-auto"
              />
              <h3 className="text-lg font-semibold text-gray-700 mb-3 line-clamp-2">
                {product.title}
              </h3>
            </Link>
          </li>
        ))}
      </ul>

      {/* Categories */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Shop by Category
        </h2>
        <ul className="flex flex-wrap gap-4">
          {categories.map((category, index) => (
            <li key={index}>
              <Link
                href={`/categories/${category}`}
                className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-medium hover:bg-gray-800 hover:text-white transition"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
