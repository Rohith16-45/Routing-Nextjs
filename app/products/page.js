import Link from "next/link";
import Image from "next/image";

export default async function Products() {
  const res = await fetch("https://fakestoreapi.in/api/products");
  const { products } = await res.json();
  return (
    <div>
      <h2>All Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title}
            <Link href={`/products/${product.id}`}>
              <Image
                src={product.image}
                alt={product.title}
                height={200}
                width={250}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
