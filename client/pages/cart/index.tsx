import Link from "next/link";
import React, { useContext } from "react";
import CartItem from "../../src/Components/CartItem";
import { ProductContext } from "../../src/Context/Product";

const index = () => {
  const { productState } = useContext(ProductContext);

  if (productState.isLoading) {
    return (
      <div
        aria-label="Loading..."
        role="status"
        className="flex w-screen h-screen justify-center items-center"
      >
        <svg className="h-12 w-12 animate-spin" viewBox="3 3 18 18">
          <path
            className="fill-gray-100"
            d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
          ></path>
          <path
            className="fill-gray-800"
            d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
          ></path>
        </svg>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-black hover:text-gray-900 "
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Trang chủ
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <Link
                href="/cart"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 "
              >
                Cart
              </Link>
            </div>
          </li>
        </ol>
      </nav>
      <div className="hidden text-center mt-10 flex justify-center flex-col items-center">
        <div className="text-lg font-bold text-gray-800">
          <Link href={"/cart"}>GIỎ HÀNG CỦA BẠN</Link>
        </div>
        <hr className="my-6 h-[2px] bg-gray-300 border-0 w-1/6 " />
      </div>
      <ul className=" bg-white shadow  -left-60 rounded text-black p-5  group-hover:block z-30 ">
        <ul className="overflow-y-auto">
          {productState.data.map((value, index) => (
            <div key={index}>
              <CartItem value={value} />
              <hr className="my-1 h-[1px] bg-gray-300 border-0 w-full" />
            </div>
          ))}
        </ul>

        <div className="flex justify-between my-3">
          <p>Tổng công:</p>
          <p className="font-semibold">26.880.000₫</p>
        </div>
        <hr className="my-3 h-[2px] bg-gray-300 border-0 w-full " />
        <div className="flex justify-around">
          <button className="bg-black px-8 text-sm rounded-sm py-2 text-white hover:bg-slate-900">
            Giỏ hàng
          </button>
          <button className="hover:bg-black bg-white px-8 text-sm rounded-sm py-2 text-black hover:text-white border border-black ">
            Thanh toán
          </button>
        </div>
      </ul>
    </div>
  );
};

export default index;
