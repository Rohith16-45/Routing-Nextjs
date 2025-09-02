import Image from "next/image";

export default async function ProductDetails({ params }) {
  const { id } = await params;
  const res = await fetch(`https://fakestoreapi.in/api/products/${id}`);
  const data = await res.json();
  //   console.log(data.product);
  const productData = data.product;
  console.log("data:", productData);

  return (
    <div>
      <h2>{productData.title}</h2>
      <div>
        <Image
          src={productData.image}
          alt={productData.title}
          height={200}
          width={250}
        />
        <p>{productData.description}</p>
        <h3>${productData.price}</h3>
      </div>
    </div>
  );
}
