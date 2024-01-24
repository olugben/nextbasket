import React from "react";
import Layout from "../../components/Layout";
import ProductItemDetails from "../../components/ProductItemDetails";
import ProductDescription from "../../components/ProductDescriptions";
import BestSellers from "../../components/BestSellers";
import ClientsList from "../../components/BestSellers/ClientsList";
import { fetchProducts as fetchSingleProduct } from "../../utils/api";
import { baseUrl } from "../../utils/api";

const SingleProduct = ({ product }) => {
  return (
    <Layout title="product">
      <ProductItemDetails {...product} item={product} />
      <ProductDescription />
      <BestSellers />
      <ClientsList />
    </Layout>
  );
};

export const getServerSideProps = async ({ query }) => {
  const id = query.id || 1;

  try {
    const product = await fetchSingleProduct(`${baseUrl}/products/${id}`);

    return {
      props: {
        product,
      },
    };
  } catch {
    return {
      props: {
        product: null,
      },
    };
  }
};

export default SingleProduct;
