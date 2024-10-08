import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ProductShowBox from "./ProductShowBox.jsx";

export default function App() {
  const MySwal = withReactContent(Swal);

  const allProducts = [
    {
      id: 1,
      productImg: "./src/assets/images/products/product1.webp",
      productName: "مانیتور نکسار مدل NDM-22VN سایز 22 اینچ",
      productPrice: 3900,
      category: "computer-devices",
    },
    {
      id: 2,
      productImg: "./src/assets/images/products/product2.webp",
      productName:
        "گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت به همراه شارژر 20 وات اپل - نات اکتیو",
      productPrice: 44990,
      category: "phones",
    },
    {
      id: 3,
      productImg: "./src/assets/images/products/product3.webp",
      productName: "کیبورد و ماوس مخصوص بازی گلد اسکار مدل KB9001",
      productPrice: 593,
      category: "computer-devices",
    },
    {
      id: 4,
      productImg: "./src/assets/images/products/product4.webp",
      productName: "هدفون بلوتوثی مدل P47 EDR",
      productPrice: 110,
      category: "computer-devices",
    },
    {
      id: 5,
      productImg: "./src/assets/images/products/product5.webp",
      productName: "تلفن مدل L019",
      productPrice: 399,
      category: "phones",
    },
    {
      id: 6,
      productImg: "./src/assets/images/products/product6.webp",
      productName: "کلید لمسی هوشمند مدل tuya 4 gang",
      productPrice: 1400,
      category: "other",
    },
  ];

  const [cart, setCart] = useState([]);

  //   functions
  function handleClearCart() {
    setCart([]);
  }
  function addItemToCart(id) {
    setCart((c) => [...c, allProducts[id]]);
    MySwal.fire({
      icon: "success",
      title: "موفقیت آمیز!",
      text: "این کالا با موفقیت به سبد خرید اضافه شد!",
      imageUrl: allProducts[id].productImg,
      imageHeight: 100,
    });
  }
  function deleteItemFromCart(i) {
    setCart((c) => c.filter((c, index) => index !== i));
  }
  function moreThisProduct(id) {
    setCart((c) => [...c, allProducts[id]]);
  }
  function decreaseThisProduct(i) {
    setCart((c) => c.filter((_, index) => index !== i));
  }

  //   function sertedByLittle() {
  //     allProducts.sort((a, b) => b.id - a.id);
  //     console.log("ok");
  //   }
  return (
    <>
      {/* Header */}
      <section className="h-20 bg-white">
        <div className="container py-5 flex items-center justify-between">
          {/* logo and searchBox */}
          <div className="flex items-center gap-x-8">
            {/* Digikala Logo */}
            <svg className="w-[115px] h-[30px]">
              <use href="#digikalaLogo"></use>
            </svg>
            {/* SearchBox and searchIcon*/}
            <div className="relative text-neutral-500 bg-neutral-100 w-[35.5rem] h-9 flex items-center">
              {/* SearchIcon */}
              <svg className="size-5 absolute right-0">
                <use href="#search"></use>
              </svg>
              {/* SearchBox */}
              <input
                type="text"
                placeholder="جستجو"
                className="w-full pr-9 text-sm border-none outline-none bg-neutral-100"
              />
            </div>
          </div>
          {/* Login link & Shopping cart */}
          <div className="flex items-center text-sm">
            {/* Login link */}
            <a
              href="/"
              className="flex gap-x-1 border border-gray-300 rounded-md py-2 px-3"
            >
              {/* Login icon */}
              <svg className="size-5">
                <use href="#arrow-left-end-on-rectangle"></use>
              </svg>
              {/* Login link */}
              <span className="font-bold">ورود | ثبت‌نام</span>
            </a>
            {/* span for line */}
            <span className="h-7 block w-px bg-gray-300 mx-3.5"></span>
            {/* Shopping cart */}
            <div className="relative group">
              <div className="relative cursor-pointer">
                <svg className="size-7">
                  <use href="#shopping-cart"></use>
                </svg>
                <span className="flex items-center justify-center absolute bg-red-500 text-white text-xs px-1 rounded -bottom-2 -right-2">
                  {cart.length}
                </span>
              </div>

              <div className="w-[400px] absolute top-full left-0 shadow-lg bg-neutral-100 z-20 text-slate-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                <div className="h-11 w-full text-gray-500">
                  {cart.length} کالا
                </div>
                {/* Products */}
                <div className="space-y-5 min-h-52 max-h-[22rem] overflow-y-auto">
                  {cart.length <= 0 ? (
                    <div className="h-40 w-full">
                      <img
                        src="./src/assets/images/empty-cart.svg"
                        className="size-full"
                      />
                      <h4 className="text-center text-xl">
                        سبد خرید شما خالی است :(
                      </h4>
                    </div>
                  ) : (
                    cart.map((c, i) => (
                      <div className="flex px-3" key={i}>
                        {/* Product image & offer & numBox */}
                        <div className="flex flex-col justify-center items-center max-w-[144px] pl-3">
                          <img
                            src={c.productImg}
                            className="size-[100px]"
                            alt=""
                          />
                          <h6 className="text-red-600 font-bold text-lg mb-2">
                            فروش ویژه
                          </h6>
                          <div className="w-32 h-10 bg-slate-100">
                            <div className="flex items-center justify-between px-3 py-2 border border-gray-300 rounded-md">
                              {/* Plus icon */}
                              <button className="flex items-center justify-center">
                                <svg
                                  className="size-4 fill-[#ef4056] cursor-pointer"
                                  onClick={() => moreThisProduct(c.id - 1)}
                                >
                                  <use href="#addSimple"></use>
                                </svg>
                              </button>
                              {/* Number of product */}
                              <span className="text-lg text-[#ef4056]">
                                {cart.reduce(
                                  (acc, pp) => (pp.id === c.id ? acc + 1 : acc),
                                  0
                                )}
                              </span>
                              <span>
                                {cart.reduce(
                                  (acc, pp) => (pp.id === c.id ? acc + 1 : acc),
                                  0
                                ) <= 1 ? (
                                  //   {/* Delete icon */}
                                  <svg
                                    className="size-4 fill-[#ef4056] cursor-pointer"
                                    onClick={() => deleteItemFromCart(i)}
                                  >
                                    <use href="#delete"></use>
                                  </svg>
                                ) : (
                                  //   {/* Minus icon */}
                                  <button className="flex items-center justify-center">
                                    <svg
                                      className="size-4 fill-[#ef4056] cursor-pointer"
                                      onClick={() => decreaseThisProduct(i)}
                                    >
                                      <use href="#removeSimple"></use>
                                    </svg>
                                  </button>
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* Title product & color & price */}
                        <div className="pr-3">
                          <h4 className="text-black font-bold text-base line-clamp-2 mb-4">
                            {c.productName}
                          </h4>
                          <div className="bg-slate-100 w-32 h-28"></div>

                          <div className="flex items-center justify-between">
                            <span className="flex items-center gap-x-2">
                              <span className="text-xl font-bold">
                                {cart.reduce(
                                  (acc, pp) =>
                                    pp.id === c.id ? acc + c.productPrice : acc,
                                  0
                                )}
                              </span>
                              <svg className="size-4">
                                <use href="#toman"></use>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                {/* Price & submitBtn */}
                <div className="h-20 flex items-center justify-between mt-4 px-3">
                  {/* Price */}
                  <div className="px-4">
                    <span className="text-xs text-gray-400 mb-2 block">
                      مبلغ قابل پرداخت
                    </span>
                    <span className="flex items-center gap-x-2">
                      <span className="text-xl font-bold">
                        {cart.length === 0
                          ? "0"
                          : cart.length < 2
                          ? cart[0].productPrice
                          : cart.length >= 2
                          ? cart.reduce((acc, c) => acc + c.productPrice, 0)
                          : "0"}
                      </span>
                      <svg className="size-4">
                        <use href="#toman"></use>
                      </svg>
                    </span>
                  </div>
                  {/* SubmitBtn */}
                  <button
                    className="flex items-center justify-center text-white w-28 h-12 bg-[#ef4056] font-bold rounded-md"
                    onClick={handleClearCart}
                  >
                    ثبت سفارش
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Main */}
      <section className="">
        {/* <div className="container flex justify-start">
          <button
            className="ml-3 bg-slate-100 border border-slate-300 px-3 py-1.5 rounded"
            onClick={sertedByLittle}
          >
            ارزان ترین
          </button>
          <button
            className="ml-3 bg-slate-100 border border-slate-300 px-3 py-1.5 rounded"
            // onClick={sertedByBig}
          >
            گران ترین
          </button>
        </div> */}
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allProducts.map((p, i) => (
            <ProductShowBox
              key={i}
              name={p.productName}
              photo={p.productImg}
              price={p.productPrice}
              idd={p.id}
            />
          ))}
        </div>
      </section>
    </>
  );
}
