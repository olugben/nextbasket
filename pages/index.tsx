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

const IndexPage = ({ products }) => {
  // console.log({ products: products?.products });
  return <Layout title="Bandage - Home">home page</Layout>;
};

export default IndexPage;
