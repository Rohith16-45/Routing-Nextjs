import Link from "next/link";

export default async function Category() {
  const res = await fetch("https://fakestoreapi.in/api/products/category");
  const { categories } = await res.json();

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
        All Categories
      </h2>

      <ul className="flex flex-wrap justify-center gap-4">
        {categories.map((category, index) => (
          <li key={index}>
            <Link
              href={`/categories/${category}`}
              className="px-6 py-3 bg-gray-100 rounded-xl shadow-sm text-gray-700 font-medium hover:bg-gray-800 hover:text-white transition"
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
