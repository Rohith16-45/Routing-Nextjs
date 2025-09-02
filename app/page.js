import Image from "next/image";
import Link from "next/link";

export default async function Products() {
  // Fetch all products
  const productRes = await fetch("https://fakestoreapi.in/api/products");
  const { products } = await productRes.json();

  // Fetch categories
  const categoryRes = await fetch(
    "https://fakestoreapi.in/api/products/category"
  );
  const { categories } = await categoryRes.json();

  return (
    <div>
      <h2>All Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={250}
            />
          </li>
        ))}
      </ul>
      <div>
        <h2>Search by category</h2>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <Link href={`/categories/${category}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </div>
      0
    </div>
  );
}
