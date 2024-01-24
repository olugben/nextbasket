import React, { ReactNode } from "react";
import Head from "next/head";
import Nav from "./Nav";
import TopInfo from "./TopInfo";
import { useRouter } from "next/router";
import SocialsAndFooter from "./SocialsAndFooter";
// import CartOverlay from "./Overlay/CartOverlay";
// import WishListOverlay from "./Overlay/WishListOverlay";
type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
  const router = useRouter();

  const isProductPage = router?.pathname.includes("/product");
  

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <TopInfo />
      <Nav isProductPage={isProductPage} />
      {/* <CartOverlay />
      <WishListOverlay /> */}
      {children}
    


      <SocialsAndFooter />
    </>
  );
};

export default Layout;

