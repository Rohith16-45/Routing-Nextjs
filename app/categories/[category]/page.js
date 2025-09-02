import Image from "next/image";

export default async function AllCategory({ params }) {
  const { category } = await params;
  const res = await fetch(
    `https://fakestoreapi.in/api/products/category?type=${category}`
  );
  const { products } = await res.json();
  console.log(products);

  return (
    <div>
      <h2>{category}</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title}
            <Image
              src={product.image}
              alt={product.title}
              width={250}
              height={200}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
