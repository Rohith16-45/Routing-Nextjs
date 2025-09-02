import Link from "next/link";

export default async function Category() {
  const res = await fetch("https://fakestoreapi.in/api/products/category");
  const { categories } = await res.json();
  return (
    <div>
      <h2>All categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <Link href={`/categories/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
