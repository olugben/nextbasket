import Link from "next/link";
import Image from "next/image"
import Layout from "../components/Layout";

export interface ProductItem {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  quantity?: number;
  ItemPrice: number;
}

export type Products = {
  products: ProductItem[];
  total: number;
  skip: number;
  limit: number;
};

export async function getServerSideProps() {
 

  const res =await fetch('https://dummyjson.com/products')
  const products=await res.json();
  const productsArray = products;
  return {
    props: {
      products,
    },
  };
 }
const IndexPage = ({ products }) => {
  // console.log({ products: products?.products });
  return <Layout title="Bandage - Home">
<ul>
    {products.products.map(product=><li key={product.id}>
      {product.category}
      <Link href={""}><Image src={product.images[0]} width={80 } height={80} alt={""}/></Link>
      
    
    </li>)}
  </ul>

  </Layout>;
};

export default IndexPage;
