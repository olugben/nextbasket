// import React from "react";
// import CloseIcon from "@mui/icons-material/Close";
// import { useSelector, useDispatch } from "react-redux";
// // import { toggleCartView } from "../../store/reducers/cartSlice";
// // import { IStoreState } from "../../store";
// import ProductItem from "./ProductItem";
// import { ProductItem as IProductItem } from "../../pages";
// // import {
// //   addToCart,
// //   removeFromCart,
// //   increaseQuantity,
// //   decreaseQuantity,
// // } from "../../store/reducers/cartSlice";

// function CartOverlay() {
//   const dispatch = useDispatch();
//   // const isCartOpened = useSelector(
//   //   (state: IStoreState) => state?.cart?.isCartOpened
//   // );

//   // const cartItems = useSelector((state: IStoreState) => state?.cart?.cartItems);

//   // const currentCartItemQuantity = (id) =>
//   //   cartItems?.find((item: ProductItem) => item?.id === id)?.quantity || 0;

//   // const sumCartItems = (itemsInCart: ProductItem[]) => {
//   //   return itemsInCart.reduce((total, item: ProductItem) => {
//   //     return total + (item?.quantity || 0) * item.price;
//   //   }, 0);
//   // };

//   // const total = sumCartItems(cartItems || []);
// const isCartOpened =false;
//  const cartItems=[];
//   return (
//     <>
//       <div
//         className={`ease-in-out duration-1000 ${
//           isCartOpened
//             ? "fixed h-[100vh] overflow-hidden inset-0 flex top-0 right-0 z-50"
//             : "relative bg-transparent"
//         } `}
//       >
//         <div
//           className={`ease-in-out duration-1000 ${
//             isCartOpened ? "fixed" : "relative bg-transparent"
//           }  inset-0 bg-black opacity-50`}
//           // onClick={() => dispatch(toggleCartView())}
//         />

//         <aside
//           className={`mt-[108px] lg:mt-0 ease transition-all duration-1000  w-fit overflow-x-hidden ${
//             isCartOpened ? "translate-y-0" : "translate-y-[-100%]"
//           } fixed right-0 top-0 h-screen w-80 bg-white dark:bg-gray-800 overflow-auto shadow-lg`}
//         >
//           <div className="h-full flex flex-col p-4">
//             {cartItems?.length !== 0 ? (
//               <>
//                 <header className="mb-4">
//                   <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 flex items-center justify-between">
//                     Your Cart
//                     <button
//                       // onClick={() => dispatch(toggleCartView())}
//                       className="cursor-pointer rounded-none border-none flex items-center justify-center"
//                     >
//                       <CloseIcon />
//                     </button>
//                   </h2>
//                 </header>
//                 <main className="flex-1 overflow-x-hidden h-full">
//                   {cartItems?.map((item: IProductItem) => (
//                     <React.Fragment key={item?.id}>
//                       <ProductItem
//                         {...item}
//                         item={item}
//                         // increase={increaseQuantity}
//                         // remove={removeFromCart}
//                         // decrease={decreaseQuantity}
//                         // add={addToCart}
//                         // quantity={() => currentCartItemQuantity(item?.id)}
//                       />
//                     </React.Fragment>
//                   ))}
//                 </main>
//                 <p className="text-base text-center text-gray-900 dark:text-gray-100 font-bold">
//                   {/* Total: $ {total} */}
//                 </p>
//               </>
//             ) : (
//               <div className="text-2xl text-white w-[300px] text-center my-[300px]">
//                 Cart is Empty
//               </div>
//             )}
//             <div className="mt-4">
//               <button
//                 // onClick={() => dispatch(toggleCartView())}
//                 className="w-full bg-teal-700 text-white hover:bg-white hover:text-teal-700 p-2 ease-in duration-200"
//               >
//                 Close View
//               </button>
