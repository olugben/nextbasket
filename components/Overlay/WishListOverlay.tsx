// import React from "react";
// import CloseIcon from "@mui/icons-material/Close";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   toggleWishListView,
//   addToWishList,
//   removeFromWishList,
//   increaseWishListItemQuantity,
//   decreaseWishListItemQuantity,
// } from "../../store/reducers/wishListSlice";
// import { IStoreState } from "../../store";
// import ProductItem from "./ProductItem";
// import { ProductItem as IProductItem } from "../../pages";

// function WishListOverlay() {
//   const dispatch = useDispatch();
//   const isWishListOpen = useSelector(
//     (state: IStoreState) => state?.wishList?.isWishListOpened
//   );

//   const wishListItems = useSelector(
//     (state: IStoreState) => state?.wishList?.wishListItems
//   );

//   const currentWishListItemQuantity = (id) =>
//     wishListItems?.find((item: ProductItem) => item?.id === id)?.quantity || 0;

//   return (
//     <>
//       <div
//         className={`ease-in-out duration-1000 ${
//           isWishListOpen ? "fixed" : "relative bg-transparent"
//         } fixed inset-0 flex top-0 right-0 z-[150]`}
//       >
//         <div
//           className={`ease-in-out duration-1000 ${
//             isWishListOpen ? "fixed" : "relative bg-transparent"
//           }  inset-0 bg-black opacity-50`}
//           onClick={() => dispatch(toggleWishListView())}
//         />

//         <aside
//           className={`ease transition-all duration-1000  w-fit overflow-x-hidden ${
//             isWishListOpen ? "translate-y-0" : "translate-y-[-100%]"
//           } fixed right-0 top-0 h-screen w-80 bg-white dark:bg-gray-800 overflow-auto shadow-lg`}
//         >
//           <div className="h-full flex flex-col p-4">
//             {wishListItems?.length !== 0 ? (
//               <>
//                 <header className="mb-4">
//                   <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 flex items-center justify-between">
//                     Your WishList
//                     <button
//                       onClick={() => dispatch(toggleWishListView())}
//                       className="cursor-pointer rounded-none border-none flex items-center justify-center"
//                     >
//                       <CloseIcon />
//                     </button>
//                   </h2>
//                 </header>
//                 <main className="flex-1 overflow-x-hidden h-full">
//                   {wishListItems?.map((item: IProductItem) => (
//                     <React.Fragment key={item?.id}>
//                       <ProductItem
//                         {...item}
//                         item={item}
//                         add={addToWishList}
//                         remove={removeFromWishList}
//                         increase={increaseWishListItemQuantity}
//                         decrease={decreaseWishListItemQuantity}
//                         quantity={() => currentWishListItemQuantity(item.id)}
//                       />
//                     </React.Fragment>
//                   ))}
//                 </main>
//               </>
//             ) : (
//               <div className="text-2xl text-white w-[300px] text-center my-[300px]">
//                 WishList is Empty
//               </div>
//             )}
//             <div className="mt-4">
//               <button
//                 onClick={() => dispatch(toggleWishListView())}
//                 className="w-full bg-teal-700 text-white hover:bg-white hover:text-teal-700 p-2 ease-in duration-200"
//               >
//                 Close View
//               </button>
//             </div>
//           </div>
//         </aside>
//       </div>
//     </>
//   );
// }

// export default WishListOverlay;
